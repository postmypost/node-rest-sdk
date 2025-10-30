# Account


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Account ID | [default to undefined]
**chanel_id** | **number** | Channel ID | [default to undefined]
**external_id** | **string** | Account ID in the channel | [default to undefined]
**name** | **string** | Account name | [default to undefined]
**login** | **string** | Account login | [optional] [default to undefined]
**connection_status** | [**AccountConnectionStatusEnum**](AccountConnectionStatusEnum.md) |  | [default to undefined]

## Example

```typescript
import { Account } from '@postmypost/rest-sdk';

const instance: Account = {
    id,
    chanel_id,
    external_id,
    name,
    login,
    connection_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
