import { CREATOR_IDENTIFIER_KEYS, ResourceAPI, requireAnyIdentifier, requireParam } from "./base.js";

const POST_IDENTIFIER_KEYS = ["post_id", "id_unique", "external_id"];

function withPostIdentifier(params = {}) {
  const query = { ...params };
  requireAnyIdentifier(query, CREATOR_IDENTIFIER_KEYS);
  requireParam(query, "source_id");
  requireAnyIdentifier(query, POST_IDENTIFIER_KEYS);
  return query;
}

function authorizedPath(params, action) {
  const sourceId = params.source_id;
  return `posts/authorized/${encodeURIComponent(sourceId)}/${action}`;
}

export class PostsAPI extends ResourceAPI {
  stats(params = {}) {
    return this._get("posts/stats", { params: withPostIdentifier(params) });
  }

  historicStats(params = {}) {
    return this._get("posts/historic_stats", { params: withPostIdentifier(params) });
  }

  authorizedStats(params = {}) {
    const query = withPostIdentifier(params);
    return this._get(authorizedPath(query, "stats"), { params: query });
  }

  authorizedHistoricStats(params = {}) {
    const query = withPostIdentifier(params);
    return this._get(authorizedPath(query, "historic_stats"), { params: query });
  }
}
