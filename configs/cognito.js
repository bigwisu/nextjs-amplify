const CognitoConfig = {
  Auth: {
    identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
    region: process.env.COGNITO_REGION,
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.COGNITO_WEBCLIENT_POOL_ID
  }
};

export default CognitoConfig;
