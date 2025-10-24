# PublicationsApi

All URIs are relative to *https://api.postmypost.io/v4.1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPublication**](#createpublication) | **POST** /publications | Create publication|
|[**deletePublication**](#deletepublication) | **DELETE** /publications/{id} | Delete publication|
|[**getPublication**](#getpublication) | **GET** /publications/{id} | Get publication by ID|
|[**getPublications**](#getpublications) | **GET** /publications | Get list of publications|
|[**updatePublication**](#updatepublication) | **PUT** /publications/{id} | Update publication|

# **createPublication**
> Publication createPublication(createPublicationRequest)

Create a new publication.

### Example

```typescript
import {
    PublicationsApi,
    Configuration,
    CreatePublicationRequest
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new PublicationsApi(configuration);

let createPublicationRequest: CreatePublicationRequest; //

const { status, data } = await apiInstance.createPublication(
    createPublicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPublicationRequest** | **CreatePublicationRequest**|  | |


### Return type

**Publication**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Publication |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePublication**
> Publication deletePublication()

Delete a publication.

### Example

```typescript
import {
    PublicationsApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new PublicationsApi(configuration);

let id: number; //Publication ID (default to undefined)
let deleteOption: 1 | 2 | 3; //Deletion method: 1 — delete everywhere, 2 — only in social network, 3 — only in Postmypost  (default to undefined)
let accountIds: string; //Comma-separated list of account IDs (default to undefined)

const { status, data } = await apiInstance.deletePublication(
    id,
    deleteOption,
    accountIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Publication ID | defaults to undefined|
| **deleteOption** | [**1 | 2 | 3**]**Array<1 &#124; 2 &#124; 3>** | Deletion method: 1 — delete everywhere, 2 — only in social network, 3 — only in Postmypost  | defaults to undefined|
| **accountIds** | [**string**] | Comma-separated list of account IDs | defaults to undefined|


### Return type

**Publication**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Publication |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublication**
> Publication getPublication()

Retrieve publication data by its ID.

### Example

```typescript
import {
    PublicationsApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new PublicationsApi(configuration);

let id: number; //Publication ID (default to undefined)

const { status, data } = await apiInstance.getPublication(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Publication ID | defaults to undefined|


### Return type

**Publication**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Publication |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublications**
> PublicationsResponse getPublications()

Retrieve a list of all publications available in the system.

### Example

```typescript
import {
    PublicationsApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new PublicationsApi(configuration);

let projectId: number; //Project ID (default to undefined)
let postDate: string; //Publication date (YYYY-MM-DD) (optional) (default to undefined)
let sort: string; //List sorting parameter. Format: `sort=field` — ascending by field, `sort=-field` — descending by field. Multiple fields can be specified separated by a comma: `sort=field,-another_field`.  (optional) (default to undefined)
let page: number; //Page number (starts from 1). (optional) (default to 1)
let perPage: number; //Number of items per page (maximum 50). (optional) (default to 20)

const { status, data } = await apiInstance.getPublications(
    projectId,
    postDate,
    sort,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project ID | defaults to undefined|
| **postDate** | [**string**] | Publication date (YYYY-MM-DD) | (optional) defaults to undefined|
| **sort** | [**string**] | List sorting parameter. Format: &#x60;sort&#x3D;field&#x60; — ascending by field, &#x60;sort&#x3D;-field&#x60; — descending by field. Multiple fields can be specified separated by a comma: &#x60;sort&#x3D;field,-another_field&#x60;.  | (optional) defaults to undefined|
| **page** | [**number**] | Page number (starts from 1). | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page (maximum 50). | (optional) defaults to 20|


### Return type

**PublicationsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of publications |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePublication**
> Publication updatePublication(updatePublicationRequest)

Update a publication by ID.

### Example

```typescript
import {
    PublicationsApi,
    Configuration,
    UpdatePublicationRequest
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new PublicationsApi(configuration);

let id: number; //Publication ID (default to undefined)
let updatePublicationRequest: UpdatePublicationRequest; //

const { status, data } = await apiInstance.updatePublication(
    id,
    updatePublicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePublicationRequest** | **UpdatePublicationRequest**|  | |
| **id** | [**number**] | Publication ID | defaults to undefined|


### Return type

**Publication**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Publication |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

