# Socialstats Node SDK

Official Node.js client for the **Socialstats Enterprise API**.

API Documentation: https://developers.stats.company/socialstats
API Key Access: Please contact api@socialstats.com

---

## Requirements

- Node.js >= 18

---

## Installation

Install with your package manager of choice:

    npm install socialstats-node-sdk

    yarn add socialstats-node-sdk

    pnpm add socialstats-node-sdk

    bun add socialstats-node-sdk

---

## Quick Start

```js
import { SocialstatsClient } from "socialstats-node-sdk";

const client = new SocialstatsClient({
  apiKey: process.env.SOCIALSTATS_API_KEY,
});

// API status
const status = await client.info.status();

// Creator information
const creator = await client.creators.info({
  socialstats_creator_id: "d3rvjgk2",
});

// Creator statistics
const creatorStats = await client.creators.stats({
  socialstats_creator_id: "d3rvjgk2",
  source: "instagram,youtube,tiktok",
});

// Post statistics
const postStats = await client.posts.stats({
  socialstats_creator_id: "d3rvjgk2",
  source_id: "tiktok",
  post_id: "7654234001833610518",
});

// Start and poll a creator authorization
const authorization = await client.oauth.create({
  socialstats_creator_id: "d3rvjgk2",
  source_id: "youtube",
  return_url: "https://customer.example.com/socialstats/oauth-return",
});
const authorizationStatus = await client.oauth.attemptStatus(authorization.state_token);
```

---

## Authentication

All requests include your API key in the `apikey` header.

We recommend storing your key securely in environment variables:

    export SOCIALSTATS_API_KEY=your_key_here

---

## Available Resource Clients

- `client.info`
- `client.creators`
- `client.posts`
- `client.oauth`

Creator-scoped methods accept `socialstats_creator_id`, `instagram_creator_id`, `facebook_creator_id`, `youtube_creator_id`, or `tiktok_creator_id`. Platform-specific identifiers may be either the platform's internal ID or its username.

---

## Error Handling

```js
import { SocialstatsAPIError, SocialstatsTransportError } from "socialstats-node-sdk";

try {
  await client.creators.info({ socialstats_creator_id: "invalid" });
} catch (error) {
  if (error instanceof SocialstatsAPIError) {
    console.log(`API error: ${error.message}`);
  } else if (error instanceof SocialstatsTransportError) {
    console.log(`Transport error: ${error.message}`);
  } else {
    throw error;
  }
}
```

---

## Versioning

This SDK follows Semantic Versioning (SemVer).

---

## License

MIT

## HTTP transport behavior

`timeoutMs` covers each attempt through the complete response body. Transport failures on GET and HEAD requests, including body-read failures, use the configured retry limit. Retried HTTP responses are cancelled before the next attempt. Redirects are rejected to prevent forwarding the API key to another endpoint; configure `baseUrl` to the final API origin. Empty responses return `null`, and malformed JSON is returned as `{ raw: text }`.

## Request retries

`maxRetries` applies only to GET and HEAD requests. Write requests are attempted once
because a transport failure or server error can occur after a write has already
succeeded. Check the resulting state before retrying a write.
