import { ResourceAPI, requireParam } from "./base.js";

export class OAuthAPI extends ResourceAPI {
  create(params = {}) {
    const query = { ...params };
    requireParam(query, "socialstats_creator_id");
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
