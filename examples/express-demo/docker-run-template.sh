#/bin/bash
TENANT_ID="<<TENANT_ID>>"
AUDIENCE="<<AUDIENCE_ID>>"
JWKS_URI="https://login.microsoftonline.com/$TENANT_ID/discovery/keys"
ISSUER="https://sts.windows.net/$TENANT_ID/"
docker run -p 4001:4001 -d -e AUDIENCE="$AUDIENCE" -e JWKS_URI="$JWKS_URI" -e ISSUER="$ISSUER" jwks-express
