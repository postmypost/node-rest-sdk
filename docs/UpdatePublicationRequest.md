# UpdatePublicationRequest

Request to update a publication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_at** | **string** | The scheduled or actual date and time when the post is (or was) published | [default to undefined]
**delete_at** | **string** | The scheduled date and time for automatic deletion of the pos | [optional] [default to undefined]
**rubric_id** | **number** | Rubric ID | [optional] [default to undefined]
**account_ids** | **Array&lt;number&gt;** | List of account IDs where the publication will be posted | [default to undefined]
**publication_status** | [**PublicationStatusEnumEdit**](PublicationStatusEnumEdit.md) |  | [default to undefined]
**details** | [**Array&lt;PublicationDetailEditRequest&gt;**](PublicationDetailEditRequest.md) | Publication details for each account or group of accounts | [default to undefined]

## Example

```typescript
import { UpdatePublicationRequest } from '@postmypost/rest-sdk';

const instance: UpdatePublicationRequest = {
    post_at,
    delete_at,
    rubric_id,
    account_ids,
    publication_status,
    details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
