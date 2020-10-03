## Social API

<details>
    <summary>POST: Post Message API</summary>

Post Message API is used to post messages to the user's contacts.

**Supported Providers:** Twitter, LinkedIn

The Message API is used to post messages to the user?s contacts. This is one of the APIs that makes up the LoginRadius Friend Invite System. After using the Contact API, you can send messages to the retrieved contacts. This API requires setting permissions in your LoginRadius Dashboard.

GET & POST Message API work the same way except the API method is different. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/post-message-api)

```js
let accessToken = '<accessToken>'; //Required
let message = '<message>'; //Required
let subject = '<subject>'; //Required
let to = '<to>'; //Required

lrv2.socialApi
  .postMessage(accessToken, message, subject, to)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Status Posting</summary>

The Status API is used to update the status on the user's wall.

**Supported Providers:** Facebook, Twitter, LinkedIn. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/status-posting/)

```js
let accessToken = '<accessToken>'; //Required
let caption = '<caption>'; //Required
let description = '<description>'; //Required
let imageurl = '<imageurl>'; //Required
let status = '<status>'; //Required
let title = '<title>'; //Required
let url = '<url>'; //Required
let shorturl = '<shorturl>'; //Optional

lrv2.socialApi
  .statusPosting(
    accessToken,
    caption,
    description,
    imageurl,
    status,
    title,
    url,
    shorturl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Trackable Status Posting</summary>

The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.

The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications.

POST Input Parameter Format: application/x-www-form-urlencoded [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/trackable-status-posting/)

```js
let accessToken = '<accessToken>'; //Required

let statusModel = {
  caption: '<caption>',
  description: '<description>',
  imageurl: '<imageurl>',
  status: '<status>',
  title: '<title>',
  url: '<url>',
}; //Required

lrv2.socialApi
  .trackableStatusPosting(accessToken, statusModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token</summary>

This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/access-token)

```js
let token = '<token>'; //Required

lrv2.socialApi
  .exchangeAccessToken(token)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Refresh Token</summary>

The Refresh Access Token API is used to refresh the provider access token after authentication. It will be valid for up to 60 days on LoginRadius depending on the provider. In order to use the access token in other APIs, always refresh the token using this API.

**Supported Providers :** Facebook,Yahoo,Google,Twitter, Linkedin.

Contact LoginRadius support team to enable this API. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-token)

```js
let accessToken = '<accessToken>'; //Required
let expiresIn = 0; //Optional
let isWeb = true; //Optional

lrv2.socialApi
  .refreshAccessToken(accessToken, expiresIn, isWeb)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Token Validate</summary>

This API validates access token, if valid then returns a response with its expiry otherwise error. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/validate-access-token)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .validateAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token Invalidate</summary>

This api invalidates the active access token or expires an access token validity. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/invalidate-access-token)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .inValidateAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Active Session Details</summary>

This api is use to get all active session by Access Token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/get-active-session-details)

```js
let token = '<token>'; //Required

lrv2.socialApi
  .getActiveSession(token)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Active Session By Account Id</summary>

This api is used to get all active sessions by AccountID(UID). [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-account-id/)

```js
let accountId = '<accountId>'; //Required

lrv2.socialApi
  .getActiveSessionByAccountID(accountId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Active Session By Profile Id</summary>

 This api is used to get all active sessions by ProfileId.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-profile-id/)

```js
let profileId = '<profileId>'; //Required

lrv2.socialApi
  .getActiveSessionByProfileID(profileId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Album</summary>

**Supported Providers:** Facebook, Google, Live, Vkontakte.

This API returns the photo albums associated with the passed in access tokens Social Profile. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/album/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getAlbums(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Albums with cursor</summary>

**Supported Providers:** Facebook, Google, Live, Vkontakte.

This API returns the photo albums associated with the passed in access tokens Social Profile. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/album/)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getAlbumsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Audio</summary>

The Audio API is used to get audio files data from the user's social account.
 
**Supported Providers:** Live, Vkontakte  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/audio)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getAudios(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Audio With Cursor</summary>

The Audio API is used to get audio files data from the user's social account.

**Supported Providers:** Live, Vkontakte [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/audio)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getAudiosWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Check In</summary>

The Check In API is used to get check Ins data from the user's social account.

**Supported Providers:** Facebook, Foursquare, Vkontakte [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/check-in)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getCheckIns(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get CheckIns With Cursor</summary>

The Check In API is used to get check Ins data from the user's social account.

**Supported Providers:** Facebook, Foursquare, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/check-in)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getCheckInsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Contact</summary>

The Contact API is used to get contacts/friends/connections data from the user's social account.This is one of the APIs that makes up the LoginRadius Friend Invite System. The data will normalized into LoginRadius' standard data format. This API requires setting permissions in your LoginRadius Dashboard.

**Note:** Facebook restricts access to the list of friends that is returned. When using the Contacts API with Facebook you will only receive friends that have accepted some permissions with your app.

**Supported Providers:** Facebook, Foursquare, Google, LinkedIn, Live, Twitter, Vkontakte, Yahoo. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/contact)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Optional

lrv2.socialApi
  .getContacts(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Event</summary>

The Event API is used to get the event data from the user's social account.
 
**Supported Providers:** Facebook, Live. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/event)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getEvents(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Events With Cursor</summary>

The Event API is used to get the event data from the user's social account.

**Supported Providers:** Facebook, Live. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/event)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getEventsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Following</summary>

Get the following user list from the user's social account.

**Supported Providers:** Twitter. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/following)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getFollowings(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Followings With Cursor</summary>

Get the following user list from the user's social account.

**Supported Providers:** Twitter. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/following)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getFollowingsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Group</summary>

The Group API is used to get group data from the user's social account.

**Supported Providers:** Facebook, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/group)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getGroups(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Groups With Cursor</summary>

The Group API is used to get group data from the user's social account.

**Supported Providers:** Facebook, Vkontakte [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/group)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getGroupsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Like</summary>

The Like API is used to get likes data from the user's social account.

**Supported Providers:** Facebook [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/like)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getLikes(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Likes With Cursor</summary>

The Like API is used to get likes data from the user's social account.

**Supported Providers:** Facebook. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/like)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getLikesWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Mention</summary>

The Mention API is used to get mentions data from the user's social account.

**Supported Providers:** Twitter. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/mention)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getMentions(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Page</summary>

The Page API is used to get the page data from the user's social account.

**Supported Providers:** Facebook, LinkedIn. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/page)

```js
let accessToken = '<accessToken>'; //Required
let pageName = '<pageName>'; //Required

lrv2.socialApi
  .getPage(accessToken, pageName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Photo</summary>

The Photo API is used to get photo data from the user's social account.

**Supported Providers:** Facebook, Foursquare, Google, Live, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/photo)

```js
let accessToken = '<accessToken>'; //Required
let albumId = '<albumId>'; //Required

lrv2.socialApi
  .getPhotos(accessToken, albumId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Post</summary>

The Post API is used to get post message data from the user's social account.

**Supported Providers:** Facebook. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/post)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getPosts(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Trackable Status Stats</summary>

The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.

The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/get-trackable-status-stats/)

```js
let accessToken = '<accessToken>'; //Required
let caption = '<caption>'; //Required
let description = '<description>'; //Required
let imageurl = '<imageurl>'; //Required
let status = '<status>'; //Required
let title = '<title>'; //Required
let url = '<url>'; //Required

lrv2.socialApi
  .getTrackableStatusStats(
    accessToken,
    caption,
    description,
    imageurl,
    status,
    title,
    url
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Trackable Status Fetching</summary>

The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.

This API is used to retrieve a tracked post based on the passed in post ID value. This API requires setting permissions in your LoginRadius Dashboard

**Note:** To utilize this API you need to find the ID for the post you want to track, which might require using Trackable Status Posting API first. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/trackable-status-fetching/)

```js
let postId = '<postId>'; //Required

lrv2.socialApi
  .trackableStatusFetching(postId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: User Profile</summary>

The User Profile API is used to get social profile data from the user's social account after authentication.

<b>Supported Providers:</b> All. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/user-profile)

```js
let accessToken = '<accessToken>'; //Required
let fields = null; //Optional

lrv2.socialApi
  .getSocialUserProfile(accessToken, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Refresh User Profile</summary>

The User Profile API is used to get the latest updated social profile data from the user's social account after authentication. The social profile will be retrieved via oAuth and OpenID protocols. The data is normalized into LoginRadius' standard data format. This API should be called using the access token retrieved from the refresh access token API. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-user-profile)

```js
let accessToken = '<accessToken>'; //Required
let fields = null; //Optional

lrv2.socialApi
  .getRefreshedSocialUserProfile(accessToken, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Video</summary>

The Video API is used to get video files data from the user's social account.

<b>Supported Providers:</b> Facebook, Google, Live, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/video)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getVideos(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>
