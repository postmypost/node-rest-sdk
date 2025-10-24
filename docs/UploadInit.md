# UploadInit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Upload ID | [default to undefined]
**url** | **string** | URL of the uploaded file | [default to undefined]
**size** | **number** | File size in bytes | [default to undefined]
**status** | [**UploadStatusEnum**](UploadStatusEnum.md) |  | [default to undefined]
**name** | **string** | File name | [default to undefined]
**action** | **string** | Upload endpoint URL | [default to undefined]
**fields** | [**Array&lt;UploadByFileFieldsInner&gt;**](UploadByFileFieldsInner.md) | Parameters to be submitted with the file during upload | [default to undefined]

## Example

```typescript
import { UploadInit } from '@postmypost/rest-sdk';

const instance: UploadInit = {
    id,
    url,
    size,
    status,
    name,
    action,
    fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
