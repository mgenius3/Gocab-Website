class FetchApiClient {
  constructor(baseURL, token = "") {
    this.baseURL = baseURL;
    this.token = token;
  }

  async get(endpoint) {
    try {
      //main server
      // const response = await fetch("/v1" + this.baseURL + endpoint, {
      //next server
      const response = await fetch("/api" + this.baseURL + endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.msg);
      }
      const data = await response.json();
      return { response: data.msg, error: null };
    } catch (err) {
      return { response: null, error: err.message };
    }
  }

  async post(endpoint, body) {
    try {
      //main server
      // const response = await fetch("/v1" + this.baseURL + endpoint, {
      //next server
      const response = await fetch("/api" + this.baseURL + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.msg);
      }
      const data = await response.json();
      return { response: data.msg, error: null };
    } catch (err) {
      return { response: null, error: err.message };
    }
  }

  async delete(endpoint) {
    try {
      //main server
      // const response = await fetch("/v1" + this.baseURL + endpoint, {
      //next server
      const response = await fetch("/api" + this.baseURL + endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.msg);
      }
      const data = await response.json();
      return { response: data.msg, error: null };
    } catch (err) {
      return { response: null, error: err.message };
    }
  }
}

export default FetchApiClient;
