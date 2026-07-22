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
