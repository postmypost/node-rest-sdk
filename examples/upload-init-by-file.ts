import * as fs from 'fs';
import * as path from 'path';
import axios, { AxiosResponse } from 'axios';
import * as FormData from 'form-data';
import { Configuration, InitUploadRequest, UploadApi, UploadByFile } from '../src';

// Set your API access token and project ID
const accessToken = 'YOUR_ACCESS_TOKEN';
const projectId = 123456;

// Path to your local file
const filePath = '/path/to/file.png';

const config = new Configuration({
  accessToken: accessToken,
});

const uploadApi = new UploadApi(config);

// Check if file exists
if (!fs.existsSync(filePath)) {
  console.error(`File does not exist: ${filePath}`);
  process.exit(1);
}

// Get file information
const fileSize = fs.statSync(filePath).size;
const fileName = path.basename(filePath);

// Step 1: Initialize upload
const uploadRequest: InitUploadRequest = {
  project_id: projectId,
  name: fileName,
  size: fileSize,
};

console.log(uploadRequest);

uploadApi
  .initUpload(uploadRequest)
  .then((response: AxiosResponse<UploadByFile>) => {
    const initResponse = response.data;
    console.log('Upload initialized successfully.');
    console.log(`  Upload ID: ${initResponse.id}`);
    console.log(`  Upload status: ${initResponse.status}`);

    // Step 2: Prepare multipart form data for S3 using node 'form-data'
    const formData = new FormData();

    // Add all fields from the response
    (initResponse.fields as Array<{ key: string; value: string }>).forEach((field) => {
      formData.append(field.key, field.value);
    });

    // Add the file
    formData.append('file', fs.createReadStream(filePath), {
      filename: fileName,
      contentType: 'application/octet-stream',
    });

    // Step 3: Upload file to S3
    axios
      .post(initResponse.action, formData, {
        headers: formData.getHeaders(),
        maxBodyLength: Infinity,
      })
      .then((s3Response) => {
        if (s3Response.status >= 200 && s3Response.status < 300) {
          console.log('File uploaded to storage provider (S3).');

          // Step 4: Complete the upload via Postmypost API
          uploadApi
            .completeUpload(initResponse.id)
            .then((completeRes) => {
              const completeResponse = completeRes.data;
              console.log('Upload completed successfully!');
              console.log(`  Upload ID:    ${completeResponse.id}`);
              console.log(`  Status code:  ${completeResponse.status}`);
            })
            .catch((error: any) => {
              console.error(
                'Error completing upload:',
                error.response?.data?.message || error.message,
              );
            });
        } else {
          console.error(
            `Error uploading to storage provider: ${s3Response.status} ${s3Response.statusText}`,
          );
          console.error(s3Response.data);
        }
      })
      .catch((error: any) => {
        if (error.response) {
          console.error(
            `Error uploading to storage provider: ${error.response.status} ${error.response.statusText}`,
          );
          console.error(error.response.data);
        } else {
          console.error('Error uploading to storage provider:', error.message);
        }
      });
  })
  .catch((error: any) => {
    console.error('Error initializing upload:', error.response?.data?.message || error.message);
  });
