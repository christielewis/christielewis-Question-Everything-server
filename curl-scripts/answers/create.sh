#!/bin/bash

# sh curl-scripts/answers/create.sh  

# TEXT="The G.O.A.T means The Greatest Of All Time!"
TEXT="Le G.O.A.T stands for Le Greatest Of All Time!"
TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"
API="http://localhost:4741"
URL_PATH="/answers"
QUES_ID="628bc4dc5aa1344c35f6ee06"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "answer": {
      "text": "'"${TEXT}"'",
      "questionId":"'"${QUES_ID}"'"
    }
  }'

echo