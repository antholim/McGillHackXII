import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa'; // To fetch the Auth0/Okta public key

// Configure the JWKS client
const client = jwksClient({
  jwksUri: `https://YOUR_DOMAIN/.well-known/jwks.json`, // Replace with Auth0/Okta JWKS URI
});

// Get the signing key
const getKey = (header, callback) => {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
};

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token
  if (!token) return res.status(401).send('Access token missing');

  jwt.verify(
    token,
    getKey,
    {
      audience: 'YOUR_API_AUDIENCE', // Replace with your API audience
      issuer: 'https://YOUR_DOMAIN/', // Replace with your Auth0/Okta issuer domain
    },
    (err, decoded) => {
      if (err) return res.status(401).send('Invalid token');
      req.user = decoded; // Attach user info to the request object
      next();
    }
  );
};
// const verifyToken = {verifyToken}
export default verifyToken;
