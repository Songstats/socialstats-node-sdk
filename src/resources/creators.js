import { CREATOR_IDENTIFIER_KEYS, ResourceAPI, requireAnyIdentifier } from "./base.js";

function withCreatorIdentifier(params = {}) {
  const query = { ...params };
  requireAnyIdentifier(query, CREATOR_IDENTIFIER_KEYS);
  return query;
}

export class CreatorsAPI extends ResourceAPI {
  info(params = {}) {
    return this._get("creators/info", { params: withCreatorIdentifier(params) });
  }

  stats(params = {}) {
    return this._get("creators/stats", { params: withCreatorIdentifier(params) });
  }

  historicStats(params = {}) {
    return this._get("creators/historic_stats", { params: withCreatorIdentifier(params) });
  }

  audience(params = {}) {
    return this._get("creators/audience", { params: withCreatorIdentifier(params) });
  }

  audienceDetails({ country_code, ...params } = {}) {
    if (!country_code) {
      throw new Error("country_code is required");
    }

    const query = withCreatorIdentifier(params);
    query.country_code = country_code;
    return this._get("creators/audience/details", { params: query });
  }

  activities(params = {}) {
    return this._get("creators/activities", { params: withCreatorIdentifier(params) });
  }

  content(params = {}) {
    return this._get("creators/content", { params: withCreatorIdentifier(params) });
  }

  authorizedStats(params = {}) {
    return this._get("creators/authorized/stats", { params: withCreatorIdentifier(params) });
  }

  authorizedHistoricStats(params = {}) {
    return this._get("creators/authorized/historic_stats", { params: withCreatorIdentifier(params) });
  }

  authorizedAudience(params = {}) {
    return this._get("creators/authorized/audience", { params: withCreatorIdentifier(params) });
  }

  authorizedContent(params = {}) {
    return this._get("creators/authorized/content", { params: withCreatorIdentifier(params) });
  }

  topPosts(params = {}) {
    return this._get("creators/top_posts", { params: withCreatorIdentifier(params) });
  }

  search({ q, ...params } = {}) {
    if (!q) {
      throw new Error("q is required");
    }

    return this._get("creators/search", { params: { q, ...params } });
  }

  addLinkRequest({ link, ...params } = {}) {
    if (!link) {
      throw new Error("link is required");
    }

    const query = withCreatorIdentifier(params);
    query.link = link;
    return this._post("creators/link_request", { params: query });
  }

  removeLinkRequest({ link, ...params } = {}) {
    if (!link) {
      throw new Error("link is required");
    }

    const query = withCreatorIdentifier(params);
    query.link = link;
    return this._delete("creators/link_request", { params: query });
  }
}
