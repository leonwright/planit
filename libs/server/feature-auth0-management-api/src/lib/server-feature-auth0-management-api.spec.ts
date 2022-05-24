import { getManagementApiToken } from './server-feature-auth0-management-api';

describe('serverFeatureAuth0ManagementApi', () => {
  it('should work', () => {
    expect(
      getManagementApiToken({ client_id: 'string', client_secret: 'ssfs' })
    ).toEqual('server-feature-auth0-management-api');
  });
});
