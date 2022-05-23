#!/bin/bash

# sh curl-scripts/auth/sign-out.sh 

TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
