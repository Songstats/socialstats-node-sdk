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
| GET    | `/top_posts`          | `client.creators.topPosts({...})`                         |
| GET    | `/search`             | `client.creators.search({ q, ... })`                      |
| POST   | `/link_request`       | `client.creators.addLinkRequest({ link, ... })`           |
| DELETE | `/link_request`       | `client.creators.removeLinkRequest({ link, ... })`        |

Creator-scoped methods require `socialstats_creator_id`.

## `/enterprise/v1/posts`

| HTTP | Route             | SDK Method                            |
| ---- | ----------------- | ------------------------------------- |
| GET  | `/stats`          | `client.posts.stats({...})`           |
| GET  | `/historic_stats` | `client.posts.historicStats({...})`   |

Post methods require `socialstats_creator_id`, `source_id`, and one of `post_id`, `id_unique`, or `external_id`.
