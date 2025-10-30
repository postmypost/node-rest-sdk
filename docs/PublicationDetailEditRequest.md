# PublicationDetailEditRequest

Parameters for creating or updating publication details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **number** | Account ID | [optional] [default to undefined]
**publication_type** | [**PublicationDetailPublicationTypeEnum**](PublicationDetailPublicationTypeEnum.md) |  | [default to undefined]
**content** | **string** | Publication text | [optional] [default to undefined]
**comment** | **string** | First comment on the publication | [optional] [default to undefined]
**link** | **string** | External link for the publication | [optional] [default to undefined]
**title** | **string** | Publication title | [optional] [default to undefined]
**tiktok_comment** | **boolean** | Allow comments on TikTok | [optional] [default to undefined]
**tiktok_duet** | **boolean** | Allow duets on TikTok | [optional] [default to undefined]
**tiktok_stitch** | **boolean** | Allow stitch on TikTok | [optional] [default to undefined]
**tiktok_privacy_status** | [**PublicationDetailTikTokPrivacyStatusEnum**](PublicationDetailTikTokPrivacyStatusEnum.md) |  | [optional] [default to undefined]
**youtube_privacy_status** | [**PublicationDetailYouTubePrivacyStatusEnum**](PublicationDetailYouTubePrivacyStatusEnum.md) |  | [optional] [default to undefined]
**x_reply_settings** | [**PublicationDetailXReplySettingsEnum**](PublicationDetailXReplySettingsEnum.md) |  | [optional] [default to undefined]
**instagram_share_to_feed** | **boolean** | Share to Instagram feed | [optional] [default to undefined]
**nsfw** | **boolean** | Not safe for work flag | [optional] [default to undefined]
**file_ids** | **Array&lt;number&gt;** | File IDs | [optional] [default to undefined]

## Example

```typescript
import { PublicationDetailEditRequest } from '@postmypost/rest-sdk';

const instance: PublicationDetailEditRequest = {
    account_id,
    publication_type,
    content,
    comment,
    link,
    title,
    tiktok_comment,
    tiktok_duet,
    tiktok_stitch,
    tiktok_privacy_status,
    youtube_privacy_status,
    x_reply_settings,
    instagram_share_to_feed,
    nsfw,
    file_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
