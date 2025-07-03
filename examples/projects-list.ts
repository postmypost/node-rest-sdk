import { Configuration, ProjectsApi } from '../src';

// Set your API access token
const accessToken = 'YOUR_ACCESS_TOKEN';

const config = new Configuration({
  accessToken: accessToken,
});

const projectsApi = new ProjectsApi(config);

// Call the getProjects method
projectsApi
  .getProjects()
  .then((response) => {
    const projectsResponse = response.data;
    console.log('Projects list:');

    // Display each project
    projectsResponse.data.forEach((project) => {
      console.log(`  - ID: ${project.id} | Name: ${project.name}`);
    });

    // Output pagination info
    const pagination = projectsResponse.pages;
    console.log('Pagination:', pagination);
  })
  .catch((error) => {
    console.error(
      'Error while requesting projects:',
      error.response?.data?.message || error.message,
    );
  });
