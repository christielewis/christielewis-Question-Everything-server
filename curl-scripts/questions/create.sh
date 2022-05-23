#!/bin/bash

# sh curl-scripts/questions/create.sh  

# TITLE="Anime Title"
# TOPIC="What is GOAT?"
# DESCRIPTION="I've been seeing GOAT everywhere but I don't know what it means."
# SEASON="1"
# EPISODE="1"

TITLE="Anime Title #2"
TOPIC="Who is the best character from Anime Title #2?"
DESCRIPTION="I've been having this debate with Anime Title #2 fans. Who is the best character from that show? I choose Character #1 because reasons!"
SEASON="1"
EPISODE="1"
TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"
API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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