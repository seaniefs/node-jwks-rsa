FROM node:12

ENV NODE_ENV production
ENV DEBUG express
ENV JWKS_URI "https://login.microsoftonline.com/undefined_tenant_id/discovery/keys" 
ENV AUDIENCE "undefined_audience"
ENV ISSUER "https://sts.windows.net/undefined_tenant_id/"

COPY package*.json ./
COPY server.js ./
RUN npm install
EXPOSE 4001
CMD [ "node", "server.js" ]

