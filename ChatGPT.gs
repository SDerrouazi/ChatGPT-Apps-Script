function getChatGPTResponse(input) {
  var apiKey = "MY-API-KEY";
  var apiUrl = "https://api.openai.com/v1/chat/completions";

  // Here you can add an instruction before your input like this :
  // var prompt = "I would like you to give me only the answer, no instructions. " + input;
  // Input contain your question from your Google Spreadsheet
  var prompt = input;

  /* You can learn more abouts models on : platform.openai.com/docs/models */
  var response = UrlFetchApp.fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    payload: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [{
        "role": "user",
        "content": prompt,
      }],
      "temperature": 0.5,
      "max_tokens": 1000,
    })
  });

  var json = response.getContentText();
  var data = JSON.parse(json);
  var text = data.choices[0].message.content.trim();

  return text;
}
