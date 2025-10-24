# PublicationAnalytics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Publication ID | [default to undefined]
**type** | **string** | Publication Type | [default to undefined]
**external_id** | **string** | Chanel publication ID | [optional] [default to undefined]
**external_url** | **string** | Chanel publication URL | [default to undefined]
**created_at** | **string** | Post creation date and time | [default to undefined]
**content** | **string** | Post text | [optional] [default to undefined]
**analytics** | **{ [key: string]: number; }** | Metrics for the post (e.g. views, likes, comments, etc.) | [default to undefined]
**attaches** | [**Array&lt;Attachment&gt;**](Attachment.md) | Array of attachments | [default to undefined]

## Example

```typescript
import { PublicationAnalytics } from '@postmypost/rest-sdk';

const instance: PublicationAnalytics = {
    id,
    type,
    external_id,
    external_url,
    created_at,
    content,
    analytics,
    attaches,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
