export const configuration = () => ({
  applicationId: process.env.APP_NAME || 'leons-mackbook',
  port: parseInt(process.env.PORT, 10) || 3000,
  auth0ClientId: process.env.AUTH0_CLIENT_ID,
  auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
});
