#!/bin/bash

# sh curl-scripts/questions/delete.sh  

ID=""
TOKEN="9aeff33077cdc6836aac97492393e5d5"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo