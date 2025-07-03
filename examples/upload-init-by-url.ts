import { Configuration, InitUploadRequest, UploadApi } from '../src';

// Set your API access token and project ID
const accessToken = 'YOUR_ACCESS_TOKEN';
const projectId = 123456;

// Example image URL (replace with your file if needed)
const fileUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg';

const config = new Configuration({
  accessToken: accessToken,
});

const uploadApi = new UploadApi(config);

// Create the upload request object properly
const uploadRequest: InitUploadRequest = {
  project_id: projectId,
  url: fileUrl,
};

// Initialize the upload
uploadApi
  .initUpload(uploadRequest)
  .then((response) => {
    // Axios by default returns the response data in response.data
    console.log('Upload initialized successfully.');
    console.log(`  Upload ID: ${response.data.id}`);
    console.log(`  Upload status: ${response.data.status}`);
  })
  .catch((error) => {
    console.error('Error during file upload:', error.response?.data?.message || error.message);
  });
