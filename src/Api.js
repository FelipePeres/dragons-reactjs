export const API_USER_AND_AUTH = 'https://dogsapi.origamid.dev/json';
export const API_DRAGONS =
  'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

export function TOKEN_POST(body) {
  return {
    url: API_USER_AND_AUTH + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_USER_AND_AUTH + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_USER_AND_AUTH + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_USER_AND_AUTH + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DRAGON_POST(body) {
  return {
    url: API_DRAGONS,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DRAGONS_GET() {
  return {
    url: API_DRAGONS,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function DRAGON_GET(id) {
  return {
    url: `${API_DRAGONS}/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function DRAGON_DELETE(id) {
  return {
    url: `${API_DRAGONS}/${id}`,
    options: {
      method: 'DELETE',
    },
  };
}

export function DRAGON_UPDATE(id, body) {
  return {
    url: `${API_DRAGONS}/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
