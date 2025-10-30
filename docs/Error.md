# ModelError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Error type | [default to undefined]
**message** | **string** | Human-readable error message | [default to undefined]
**code** | **number** | Application-specific error code | [default to undefined]
**status** | **number** | HTTP status code | [default to undefined]

## Example

```typescript
import { ModelError } from '@postmypost/rest-sdk';

const instance: ModelError = {
    name,
    message,
    code,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
