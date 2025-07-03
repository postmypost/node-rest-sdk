import { AccountsApi, Configuration } from '../src';

// Set your API access token and project ID
const accessToken = 'YOUR_ACCESS_TOKEN';
const projectId = 123456;

const config = new Configuration({
  accessToken: accessToken,
});

const accountsApi = new AccountsApi(config);

// Call the getAccounts method
accountsApi
  .getAccounts(projectId)
  .then((response) => {
    const accountsResponse = response.data;
    console.log('Accounts list:');

    // Display each account
    accountsResponse.data.forEach((account: any) => {
      console.log(`  - ID: ${account.id} | Name: ${account.name}`);
    });

    // Output pagination info
    const pagination = accountsResponse.pages;
    console.log('Pagination:', pagination);
  })
  .catch((error) => {
    console.error(
      'Error while requesting accounts:',
      error.response?.data?.message || error.message,
    );
  });
