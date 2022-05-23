#!/bin/bash

# sh curl-scripts/auth/change-password.sh  

OLDPW="cc"
NEWPW="c"
TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"

API="http://localhost:4741"
URL_PATH="/change-password"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
