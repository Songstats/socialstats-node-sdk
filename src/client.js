import { SocialstatsHTTPClient } from "./http.js";
import { CreatorsAPI, InfoAPI, PostsAPI } from "./resources/index.js";

export class SocialstatsClient {
  constructor({
    apiKey,
    baseUrl = "https://api.socialstats.com",
    timeoutMs = 30_000,
    maxRetries = 2,
    fetchImpl,
  } = {}) {
    this._http = new SocialstatsHTTPClient({
      apiKey,
      baseUrl,
      timeoutMs,
      maxRetries,
      fetchImpl,
    });

    this.info = new InfoAPI(this._http);
    this.creators = new CreatorsAPI(this._http);
    this.posts = new PostsAPI(this._http);
  }

  async close() {
    await this._http.close();
  }
}
