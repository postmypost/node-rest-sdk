import { Configuration, UploadApi } from '../src';

// Set your API access token and the upload ID you want to check
const accessToken = 'YOUR_ACCESS_TOKEN';
const uploadId = 123456;

const config = new Configuration({
  accessToken: accessToken,
});

const uploadApi = new UploadApi(config);

// Call the statusUpload method
uploadApi
  .statusUpload(uploadId)
  .then((response) => {
    const status = response.data;
    console.log('Upload status received successfully.');
    console.log(`  Upload ID:    ${status.id}`);
    console.log(`  Status code:  ${status.status}`);
    // You can map status codes to human-readable messages here if needed.
  })
  .catch((error) => {
    console.error(
      'Error while requesting upload status:',
      error.response?.data?.message || error.message,
    );
  });
