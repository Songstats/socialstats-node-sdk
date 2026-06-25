import { ResourceAPI, requireAnyIdentifier, requireParam } from "./base.js";

const POST_IDENTIFIER_KEYS = ["post_id", "id_unique", "external_id"];

function withPostIdentifier(params = {}) {
  const query = { ...params };
  requireParam(query, "socialstats_creator_id");
  requireParam(query, "source_id");
  requireAnyIdentifier(query, POST_IDENTIFIER_KEYS);
  return query;
}

export class PostsAPI extends ResourceAPI {
  stats(params = {}) {
    return this._get("posts/stats", { params: withPostIdentifier(params) });
  }

  historicStats(params = {}) {
    return this._get("posts/historic_stats", { params: withPostIdentifier(params) });
  }
}
