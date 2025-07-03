import { Configuration, PublicationsApi, PublicationsResponse } from '../src';

// Set your API access token and project ID
const accessToken = 'YOUR_ACCESS_TOKEN';
const projectId = 123456;

const config = new Configuration({
  accessToken: accessToken,
});

const publicationsApi = new PublicationsApi(config);

// Call the getPublications method
publicationsApi
  .getPublications(projectId)
  .then((response) => {
    const publicationsResponse: PublicationsResponse = response.data;
    console.log('Publications list:');

    publicationsResponse.data.forEach((publication: any) => {
      console.log(`  - ID: ${publication.id} | Date: ${publication.post_at}`);
    });

    // Output pagination info
    const pagination = publicationsResponse.pages;
    console.log('Pagination:', pagination);
  })
  .catch((error) => {
    console.error(
      'Error while requesting publications:',
      error.response?.data?.message || error.message,
    );
  });
