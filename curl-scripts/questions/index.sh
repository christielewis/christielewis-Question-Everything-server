#!/bin/sh

# sh curl-scripts/questions/index.sh 

TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo