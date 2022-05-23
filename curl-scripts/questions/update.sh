#!/bin/bash

# sh curl-scripts/questions/update.sh  

ID=""
QUESTION="What is the G.O.A.T.?"
DESCRIPTION="I've been seeing the G.O.A.T. everywhere but I don't know what it means."
SEASON="1"
EPISODE="1"
TOKEN="9aeff33077cdc6836aac97492393e5d5"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "questions": {
      "question": "'"${QUESTION}"'",
      "description": "'"${DESCRIPTION}"'",
      "season": "'"${SEASON}"'",
      "episode":"'"${EPISODE}"'"
    }
  }'

echo