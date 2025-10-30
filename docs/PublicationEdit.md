# PublicationEdit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Publication ID | [default to undefined]
**post_at** | **string** | The scheduled or actual date and time when the post is (or was) published | [default to undefined]
**delete_at** | **string** | The scheduled date and time for automatic deletion of the pos | [optional] [default to undefined]
**rubric_id** | **number** | Rubric ID | [optional] [default to undefined]
**account_ids** | **Array&lt;number&gt;** | List of account IDs where the post will be published | [default to undefined]
**details** | [**Array&lt;PublicationDetail&gt;**](PublicationDetail.md) | Publication details for each account or account group | [default to undefined]
**publication_status** | [**PublicationStatusEnumEdit**](PublicationStatusEnumEdit.md) |  | [default to undefined]

## Example

```typescript
import { PublicationEdit } from '@postmypost/rest-sdk';

const instance: PublicationEdit = {
    id,
    post_at,
    delete_at,
    rubric_id,
    account_ids,
    details,
    publication_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
