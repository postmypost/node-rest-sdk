import { Configuration, UploadApi, UploadStatusEnum } from '../src';

// Set your API access token and the upload ID you want to check
const accessToken = 'YOUR_ACCESS_TOKEN';
const uploadId = 123456;
const maxAttempts = 10;

const config = new Configuration({
  accessToken: accessToken,
});

const uploadApi = new UploadApi(config);

// Function to check upload status with a delay between attempts
async function checkUploadStatus(attempt = 1): Promise<void> {
  if (attempt > maxAttempts) {
    console.log(`Upload did not complete after ${maxAttempts} attempts.`);
    return;
  }

  try {
    console.log(`Attempt ${attempt}`);
    const response = await uploadApi.statusUpload(uploadId);
    const status = response.data.status;

    console.log(`Upload status: ${status}`);

    if (status === UploadStatusEnum.FILE_UPLOADED_SUCCESSFULLY) {
      console.log(`File ID: ${response.data.file_id}`);
      console.log('Upload completed successfully!');
      return;
    }

    if (status === UploadStatusEnum.ERROR) {
      console.log('Upload failed with error.');
      return;
    }

    // If still processing, wait 2 seconds and try again
    setTimeout(() => checkUploadStatus(attempt + 1), 2000);
  } catch (error: any) {
    // Для Axios error классически используется error.response
    console.error(
      'Error while requesting upload status:',
      error.response?.data?.message || error.message,
    );
  }
}

// Start checking the upload status
checkUploadStatus();
