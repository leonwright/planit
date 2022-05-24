import axios from 'axios';

export interface TokenResponse {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
}

export interface ApiCredentials {
  client_id: string;
  client_secret: string;
}

export async function getManagementApiToken(
  credentials: ApiCredentials
): Promise<TokenResponse> {
  const options = {
    method: 'POST',
    url: 'https://plan-it.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: `{"client_id":"${credentials.client_id}","client_secret":"${credentials.client_secret}","audience":"https://plan-it.us.auth0.com/api/v2/","grant_type":"client_credentials"}`,
  };

  const response = await axios.post(options.url, options.body, {
    headers: options.headers,
  });

  return response.data;
}
