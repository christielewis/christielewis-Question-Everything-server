#!/bin/bash

# sh curl-scripts/questions/create.sh  

TITLE="Anime Title"
TOPIC="What is GOAT?"
DESCRIPTION="I've been seeing GOAT everywhere but I don't know what it means."
SEASON=1
EPISODE=1
TOKEN="9aeff33077cdc6836aac97492393e5d5"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "question": {
      "title": "'"${TITLE}"'"
      "topic": "'"${TOPIC}"'",
      "description": "'"${DESCRIPTION}"'",
      "season": "'"${SEASON}"'",
      "episode":"'"${EPISODE}"'"
    }
  }'

echo