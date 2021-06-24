const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: "https://dev-84194233.okta.com/oauth2/default",
  clientId: "0oakfukpidZQWVZhi5d6",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: "https://dev-84194233.okta.com",
  logo: "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/marca_black.png",
  clientId: "0oakfukpidZQWVZhi5d6",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {
    // If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to uncomment the below line
    // pkce: false
  },
};

export { oktaAuthConfig, oktaSignInConfig };
