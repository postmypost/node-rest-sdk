# UploadByUrl

Details of a successfully uploaded file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Upload ID | [default to undefined]
**url** | **string** | URL of the uploaded file | [default to undefined]
**size** | **number** | File size in bytes | [default to undefined]
**status** | [**UploadStatusEnum**](UploadStatusEnum.md) |  | [default to undefined]

## Example

```typescript
import { UploadByUrl } from '@postmypost/rest-sdk';

const instance: UploadByUrl = {
    id,
    url,
    size,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
