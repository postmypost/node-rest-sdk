# AccountsApi

All URIs are relative to *https://api.postmypost.io/v4.1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccounts**](#getaccounts) | **GET** /accounts | Get list of accounts|

# **getAccounts**
> AccountsResponse getAccounts()

Retrieve a list of all accounts associated with the specified project.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let projectId: number; //Project ID (default to undefined)
let sort: string; //List sorting parameter. Format: `sort=field` — ascending by field, `sort=-field` — descending by field. Multiple fields can be specified separated by a comma: `sort=field,-another_field`.  (optional) (default to undefined)
let page: number; //Page number (starts from 1). (optional) (default to 1)
let perPage: number; //Number of items per page (maximum 50). (optional) (default to 20)

const { status, data } = await apiInstance.getAccounts(
    projectId,
    sort,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Project ID | defaults to undefined|
| **sort** | [**string**] | List sorting parameter. Format: &#x60;sort&#x3D;field&#x60; — ascending by field, &#x60;sort&#x3D;-field&#x60; — descending by field. Multiple fields can be specified separated by a comma: &#x60;sort&#x3D;field,-another_field&#x60;.  | (optional) defaults to undefined|
| **page** | [**number**] | Page number (starts from 1). | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page (maximum 50). | (optional) defaults to 20|


### Return type

**AccountsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of accounts |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

