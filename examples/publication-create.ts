import {
  Configuration,
  CreatePublicationRequest,
  PublicationDetailPublicationTypeEnum,
  PublicationsApi,
  PublicationStatusEnumEdit,
} from '../src';

// Set your API access token and project ID
const accessToken = 'YOUR_ACCESS_TOKEN';
const projectId = 123456;

const config = new Configuration({
  accessToken: accessToken,
});

const publicationsApi = new PublicationsApi(config);

// Build the publication request object using plain object literals
const publicationRequest: CreatePublicationRequest = {
  project_id: projectId,
  post_at: '2025-06-30T12:00:00+00:00', // Publication time (UTC)
  account_ids: [111111, 222222], // Example account IDs
  publication_status: PublicationStatusEnumEdit.PENDING_PUBLICATION,
  details: [
    {
      account_id: 111111,
      publication_type: PublicationDetailPublicationTypeEnum.POST,
      content: 'Check out our new product launch! #newproduct #launch',
      file_ids: [42516053],
    },
    {
      account_id: 222222,
      publication_type: PublicationDetailPublicationTypeEnum.POST,
      link: 'https://example.com/new-product',
    },
  ],
};

// Call the createPublication method
publicationsApi
  .createPublication(publicationRequest)
  .then((response) => {
    console.log('Publication created successfully!');
    console.log(`  Publication ID: ${response.data.id}`);
  })
  .catch((error) => {
    console.error(
      'Error while creating publication:',
      error.response?.data?.message || error.message,
    );
  });
