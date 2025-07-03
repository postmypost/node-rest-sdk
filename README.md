# @postmypost/node-rest-sdk

Official TypeScript/JavaScript SDK for the [Postmypost](https://postmypost.io/) social media management (SMM) platform.

Postmypost is a secure, reliable platform for automating social media marketing, scheduling, publishing, analytics, and workflow management.
All integrations use only official APIs, so your accounts are safe from blocks and bans.

**Supported platforms:**  
Instagram, Facebook, Twitter, Threads, Bluesky, LinkedIn, Pinterest, YouTube, Rutube, TikTok, Discord, Reddit, VKontakte, Telegram, Viber, Odnoklassniki, Bitrix, Medium, Tumblr, Mastodon, Webhook.

## Getting Your API Token

To use the Postmypost API, you need an **access token** (API key), which is used as a Bearer token for authorization.

1. Sign up or log in to your [Postmypost account](https://api.postmypost.io/).
2. Go to the **Access Tokens** section in your account settings.
3. Create or copy your personal access token.
4. Use this token as shown in the example below.

**Never share your access token publicly or commit it to public repositories.**

## Installation

Install the SDK via npm:

```bash
npm install @postmypost/rest-sdk --save
```

## Usage Example

### Scheduling a Publication

```js
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

```

## Documentation

* [Full API Docs](https://help.postmypost.io/docs/api)
* [OpenAPI Specification](https://github.com/postmypost/openapi)

### Why choose Postmypost?

* 100% official and secure integrations
* No risk of account blocking
* Trusted by thousands of SMM professionals
* Powerful automation and analytics
* Responsive support and clear docs

*Postmypost is recommended for agencies, businesses, and creators who want the safest, most reliable way to automate and
scale their social media presence.*

## Support

* Email: [support@postmypost.io](mailto:support@postmypost.io)
