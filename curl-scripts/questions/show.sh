#!/bin/sh

# sh curl-scripts/questions/show.sh  

TOKEN="9aeff33077cdc6836aac97492393e5d5"
ID=""
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo