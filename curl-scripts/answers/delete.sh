# sh curl-scripts/index.sh

TOKEN="f9e6f743e942a0c1b09f3c79f70c6784"
API="http://localhost:4741"
URL_PATH="/answers"
QUES_ID="628bc4dc5aa1344c35f6ee06"
ANSWER_ID="628be9e41983425dd00c073a"

curl "${API}${URL_PATH}/${ANSWER_ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "answer": {
      "questionId":"'"${QUES_ID}"'"
    }
  }'

echo