#/bin/bash
#export DEBUG=express,jwks
export DEBUG=express
NODE_ENV=production JWKS_URI="https://login.microsoftonline.com/$AD_TENANT_ID/discovery/keys" AUDIENCE="$AD_AUDIENCE" ISSUER="https://sts.windows.net/$AD_TENANT_ID/" node server.js

