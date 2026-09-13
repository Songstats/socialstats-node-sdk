import { CREATOR_IDENTIFIER_KEYS, ResourceAPI, requireAnyIdentifier, requireParam } from "./base.js";

const POST_IDENTIFIER_KEYS = ["post_id", "id_unique", "external_id"];

function withPostIdentifier(params = {}) {
  const query = { ...params };
  requireAnyIdentifier(query, CREATOR_IDENTIFIER_KEYS);
  requireParam(query, "source_id");
  requireAnyIdentifier(query, POST_IDENTIFIER_KEYS);
  return query;
}

function postPath(params, action, authorized = false) {
  const sourceId = params.source_id;
  return `posts/${authorized ? "authorized/" : ""}${encodeURIComponent(sourceId)}/${action}`;
}

export class PostsAPI extends ResourceAPI {
  stats(params = {}) {
    const query = withPostIdentifier(params);
    return this._get(postPath(query, "stats"), { params: query });
  }

  historicStats(params = {}) {
    const query = withPostIdentifier(params);
    return this._get(postPath(query, "historic_stats"), { params: query });
  }

  authorizedStats(params = {}) {
    const query = withPostIdentifier(params);
    return this._get(postPath(query, "stats", true), { params: query });
  }

  authorizedHistoricStats(params = {}) {
    const query = withPostIdentifier(params);
    return this._get(postPath(query, "historic_stats", true), { params: query });
  }
}
