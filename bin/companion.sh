#!/usr/bin/env bash

# Load local env vars. In CI, these are injected.
if [ -f .env ]; then
  nodemon --watch packages/@ImageTestVarLang/companion/src --exec node -r dotenv/config ./packages/@ImageTestVarLang/companion/src/standalone/start-server.js
else
  env \
    COMPANION_DATADIR="./aoutput" \
    COMPANION_DOMAIN="localhost:3030" \
    COMPANION_PROTOCOL="https" \
    COMPANION_PORT=3030 \
    COMPANION_CLIENT_ORIGINS="" \
    COMPANION_SECRET="stg" \
    COMPANION_PREAUTH_SECRET="stg" \
    COMPANION_ALLOW_LOCAL_URLS="true" \
    nodemon --watch packages/@ImageTestVarLang/companion/src --exec node ./packages/@ImageTestVarLang/companion/src/standalone/start-server.js
fi

