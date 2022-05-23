#!/bin/bash

# sh curl-scripts/questions/update.sh  

ID="628bc4dc5aa1344c35f6ee06"
TITLE="Anime Title #1"
TOPIC="What is the G.O.A.T.?"
DESCRIPTION="I've been seeing the G.O.A.T. everywhere but I don't know what it means."
SEASON="1"
EPISODE="3"
TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "question": {
      "title": "'"${TITLE}"'",
      "topic": "'"${TOPIC}"'",
      "description": "'"${DESCRIPTION}"'",
      "season": "'"${SEASON}"'",
      "episode":"'"${EPISODE}"'"
    }
  }'

echo