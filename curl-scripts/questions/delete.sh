#!/bin/bash

# sh curl-scripts/questions/delete.sh  

ID="628bc7a25aa1344c35f6ee07"
TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo