export class SocialstatsError extends Error {
  constructor(message) {
    super(message);
    this.name = "SocialstatsError";
  }
}

export class SocialstatsTransportError extends SocialstatsError {
  constructor(message, cause) {
    super(message);
    this.name = "SocialstatsTransportError";
    this.cause = cause;
  }
}

export class SocialstatsAPIError extends SocialstatsError {
  constructor(message, statusCode, payload = null, headers = {}) {
    super(message);
    this.name = "SocialstatsAPIError";
    this.statusCode = statusCode;
    this.payload = payload;
    this.headers = headers;
  }

  toString() {
    return `Socialstats API error (${this.statusCode}): ${this.message}`;
  }
}
