# UploadApi

All URIs are relative to *https://api.postmypost.io/v4.1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**completeUpload**](#completeupload) | **POST** /upload/complete | Complete file upload|
|[**initUpload**](#initupload) | **POST** /upload/init | Initialize file upload|
|[**statusUpload**](#statusupload) | **GET** /upload/status | Check file upload status|

# **completeUpload**
> UploadComplete completeUpload()

Completes the file upload process after the file has been successfully sent.

### Example

```typescript
import {
    UploadApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new UploadApi(configuration);

let id: number; //Upload ID obtained during initialization (default to undefined)

const { status, data } = await apiInstance.completeUpload(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Upload ID obtained during initialization | defaults to undefined|


### Return type

**UploadComplete**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Upload completion |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initUpload**
> UploadInit initUpload(initUploadRequest)

Initializes the file upload process.

### Example

```typescript
import {
    UploadApi,
    Configuration,
    InitUploadRequest
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new UploadApi(configuration);

let initUploadRequest: InitUploadRequest; //Initializes the file upload process. Requires one of the following parameter combinations: - `project_id` and `url` - `project_id`, `name`, and `size` 

const { status, data } = await apiInstance.initUpload(
    initUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initUploadRequest** | **InitUploadRequest**| Initializes the file upload process. Requires one of the following parameter combinations: - &#x60;project_id&#x60; and &#x60;url&#x60; - &#x60;project_id&#x60;, &#x60;name&#x60;, and &#x60;size&#x60;  | |


### Return type

**UploadInit**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Upload initialized |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statusUpload**
> UploadStatus statusUpload()

Checks the processing status of an uploaded file.

### Example

```typescript
import {
    UploadApi,
    Configuration
} from '@postmypost/rest-sdk';

const configuration = new Configuration();
const apiInstance = new UploadApi(configuration);

let id: number; //Upload ID obtained during initialization (default to undefined)

const { status, data } = await apiInstance.statusUpload(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Upload ID obtained during initialization | defaults to undefined|


### Return type

**UploadStatus**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get upload status |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

