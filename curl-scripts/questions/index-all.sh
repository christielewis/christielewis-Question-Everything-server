#!/bin/sh

# sh curl-scripts/questions/index-all.sh 

TOKEN="9aeff33077cdc6836aac97492393e5d5"
API="http://localhost:4741"
URL_PATH="/"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo