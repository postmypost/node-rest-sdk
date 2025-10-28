# AnalyticsApi

All URIs are relative to *https://api.postmypost.io/v4.1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAnalyticsAccounts**](#getanalyticsaccounts) | **GET** /analytics/accounts | Get account analytics|
|[**getAnalyticsPublications**](#getanalyticspublications) | **GET** /analytics/publications | Get publications analytics|

# **getAnalyticsAccounts**
> AccountAnalyticsResponse getAnalyticsAccounts()

Retrieve account metrics (e.g., number of followers) for a specified period.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let projectId: number; //Project ID (default to undefined)
let accountId: string; //Account ID (default to undefined)
let dateFrom: string; //Start date of the period (YYYY-MM-DD) (default to undefined)
let dateTo: string; //End date of the period (YYYY-MM-DD) (default to undefined)
let metrics: string; //Comma-separated list of metrics (e.g., followers,subscribed) (default to undefined)

const { status, data } = await apiInstance.getAnalyticsAccounts(
    projectId,
    accountId,
    dateFrom,
    dateTo,
    metrics
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project ID | defaults to undefined|
| **accountId** | [**string**] | Account ID | defaults to undefined|
| **dateFrom** | [**string**] | Start date of the period (YYYY-MM-DD) | defaults to undefined|
| **dateTo** | [**string**] | End date of the period (YYYY-MM-DD) | defaults to undefined|
| **metrics** | [**string**] | Comma-separated list of metrics (e.g., followers,subscribed) | defaults to undefined|


### Return type

**AccountAnalyticsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of account metrics |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAnalyticsPublications**
> PublicationAnalyticsResponse getAnalyticsPublications()

Retrieve post analytics by account and project for a specified period.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let projectId: number; //Project ID (default to undefined)
let accountId: string; //Account ID (default to undefined)
let dateFrom: string; //Start date of the period (YYYY-MM-DD) (default to undefined)
let dateTo: string; //End date of the period (YYYY-MM-DD) (default to undefined)
let type: 1 | 3 | 4; //Publication Type: 1 — post, 3 — story, 4 — reels/shorts  (optional) (default to undefined)
let sort: string; //List sorting parameter. Format: `sort=field` — ascending by field, `sort=-field` — descending by field. Multiple fields can be specified separated by a comma: `sort=field,-another_field`.  (optional) (default to undefined)
let page: number; //Page number (starts from 1). (optional) (default to 1)
let perPage: number; //Number of items per page (maximum 50). (optional) (default to 20)

const { status, data } = await apiInstance.getAnalyticsPublications(
    projectId,
    accountId,
    dateFrom,
    dateTo,
    type,
    sort,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project ID | defaults to undefined|
| **accountId** | [**string**] | Account ID | defaults to undefined|
| **dateFrom** | [**string**] | Start date of the period (YYYY-MM-DD) | defaults to undefined|
| **dateTo** | [**string**] | End date of the period (YYYY-MM-DD) | defaults to undefined|
| **type** | [**1 | 3 | 4**]**Array<1 &#124; 3 &#124; 4>** | Publication Type: 1 — post, 3 — story, 4 — reels/shorts  | (optional) defaults to undefined|
| **sort** | [**string**] | List sorting parameter. Format: &#x60;sort&#x3D;field&#x60; — ascending by field, &#x60;sort&#x3D;-field&#x60; — descending by field. Multiple fields can be specified separated by a comma: &#x60;sort&#x3D;field,-another_field&#x60;.  | (optional) defaults to undefined|
| **page** | [**number**] | Page number (starts from 1). | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page (maximum 50). | (optional) defaults to 20|


### Return type

**PublicationAnalyticsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of post analytics |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

