# UploadByFile

Parameters required for direct file upload to storage (e.g., S3).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Upload ID | [default to undefined]
**name** | **string** | File name | [default to undefined]
**size** | **number** | File size in bytes | [default to undefined]
**action** | **string** | Upload endpoint URL | [default to undefined]
**fields** | [**Array&lt;UploadByFileFieldsInner&gt;**](UploadByFileFieldsInner.md) | Parameters to be submitted with the file during upload | [default to undefined]
**status** | [**UploadStatusEnum**](UploadStatusEnum.md) |  | [default to undefined]

## Example

```typescript
import { UploadByFile } from '@postmypost/rest-sdk';

const instance: UploadByFile = {
    id,
    name,
    size,
    action,
    fields,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
