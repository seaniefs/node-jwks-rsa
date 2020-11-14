const Express = require('express');
const jwt = require('express-jwt');
const logger = require('debug')('express');
const jwksRsa = require('jwks-rsa');

const jwksUri = process.env.JWKS_URI;
const audience = process.env.AUDIENCE;
const issuer = process.env.ISSUER;

// Initialize the app.
const app = new Express();
app.use(jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${jwksUri}`
  }),
  audience: audience,
  issuer: issuer,
  algorithms: [ 'RS256' ]
}));

app.get('/', (req, res) => {
  res.json({result: "OK"});
});

app.use((err, req, res, next) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  logger(ip, err.name, err.message);
  res.status(401);
  res.json({result: "AUTHERR"});
});

// Start the server.
const port = process.env.PORT || 4001;
app.listen(port, function(error) {
  if (error) {
    logger(error);
  } else {
    logger('Listening on http://localhost:' + port);
  }
});
