# Enterprise Routes Audit (Socialstats Rails -> Node SDK)

Audited against:

- `/Users/Oskar/1001tl/config/routes.rb`
- `/Users/Oskar/1001tl/app/controllers/enterprise/v1/creators_controller.rb`
- `/Users/Oskar/1001tl/app/controllers/enterprise/v1/info_controller.rb`
- `/Users/Oskar/1001tl/docs/socialstats_openapi.yaml`

Authentication observed in Rails: `apikey` request header.

## `/enterprise/v1/info`

| HTTP | Route           | SDK Method                   |
| ---- | --------------- | ---------------------------- |
| GET  | `/sources`      | `client.info.sources()`      |
| GET  | `/status`       | `client.info.status()`       |
| GET  | `/uptime_check` | `client.info.uptime_check()` |
| GET  | `/definitions`  | `client.info.definitions()`  |

## `/enterprise/v1/creators`

| HTTP   | Route                 | SDK Method                                                |
| ------ | --------------------- | --------------------------------------------------------- |
| GET    | `/info`               | `client.creators.info({...})`                             |
| GET    | `/stats`              | `client.creators.stats({...})`                            |
| GET    | `/historic_stats`     | `client.creators.historicStats({...})`                    |
| GET    | `/audience`           | `client.creators.audience({...})`                         |
| GET    | `/audience/details`   | `client.creators.audienceDetails({ country_code, ... })`  |
| GET    | `/activities`         | `client.creators.activities({...})`                       |
| GET    | `/content`            | `client.creators.content({...})`                          |
| GET    | `/authorized/stats`   | `client.creators.authorizedStats({...})`                  |
| GET    | `/authorized/historic_stats` | `client.creators.authorizedHistoricStats({...})`   |
| GET    | `/authorized/audience` | `client.creators.authorizedAudience({...})`              |
| GET    | `/authorized/content` | `client.creators.authorizedContent({...})`                |
| GET    | `/top_posts`          | `client.creators.topPosts({...})`                         |
| GET    | `/search`             | `client.creators.search({ q, ... })`                      |
| POST   | `/link_request`       | `client.creators.addLinkRequest({ link, ... })`           |
| DELETE | `/link_request`       | `client.creators.removeLinkRequest({ link, ... })`        |

Creator-scoped methods require one creator identifier: `socialstats_creator_id`, `instagram_creator_id`, `facebook_creator_id`, `youtube_creator_id`, or `tiktok_creator_id`.

## `/enterprise/v1/posts`

| HTTP | Route             | SDK Method                            |
| ---- | ----------------- | ------------------------------------- |
| GET  | `/stats`          | `client.posts.stats({...})`           |
| GET  | `/historic_stats` | `client.posts.historicStats({...})`   |
| GET  | `/authorized/:source_id/stats` | `client.posts.authorizedStats({...})` |
| GET  | `/authorized/:source_id/historic_stats` | `client.posts.authorizedHistoricStats({...})` |

Post methods require one creator identifier, `source_id`, and one of `post_id`, `id_unique`, or `external_id`.

## `/enterprise/v1/oauth`

| HTTP   | Route                          | SDK Method                               |
| ------ | ------------------------------ | ---------------------------------------- |
| POST   | `/oauth`                       | `client.oauth.create({...})`             |
| GET    | `/oauth`                       | `client.oauth.list({...})`               |
| GET    | `/oauth/:id`                   | `client.oauth.get(id)`                   |
| DELETE | `/oauth/:id`                   | `client.oauth.revoke(id)`                |
| GET    | `/oauth-attempts/:state_token` | `client.oauth.attemptStatus(stateToken)` |
