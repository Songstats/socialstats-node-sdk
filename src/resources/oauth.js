import { CREATOR_IDENTIFIER_KEYS, ResourceAPI, requireAnyIdentifier, requireParam } from "./base.js";

export class OAuthAPI extends ResourceAPI {
  create(params = {}) {
    const query = { ...params };
    requireAnyIdentifier(query, CREATOR_IDENTIFIER_KEYS);
    requireParam(query, "source_id");
    return this._post("oauth", { params: query });
  }

  list(params = {}) {
    return this._get("oauth", { params });
  }

  get(id) {
    requireParam({ id }, "id");
    return this._get(`oauth/${encodeURIComponent(id)}`);
  }

  revoke(id) {
    requireParam({ id }, "id");
    return this._delete(`oauth/${encodeURIComponent(id)}`);
  }

  attemptStatus(stateToken) {
    requireParam({ stateToken }, "stateToken");
    return this._get(`oauth-attempts/${encodeURIComponent(stateToken)}`);
  }
}
