#!/bin/sh

# sh curl-scripts/questions/show.sh  

TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"
ID="628bc4dc5aa1344c35f6ee06"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo