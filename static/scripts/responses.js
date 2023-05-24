function getBotResponse(input) {
  const chatbotResUrl = "chatbot_res";
    $.ajax({
      type: "GET",
      url: chatbotResUrl,
      data: {
        message: input,
      },
      success: function (data) {
        let botHtml = '<p class="botText"><span>' + data.response + '</span></p>';
        $("#chatbox").append(botHtml);
        console.log(data.response)
        return data
      },
      error: function (data) {
        console.log(data)
        return data
      },
    });
  }
  let botTextElements = document.querySelectorAll('.botText');

  // Loop through each element and attach a click event listener
  botTextElements.forEach(function (element) {
    element.addEventListener('click', function () {
      // Get the text content of the clicked p tag
      let text = this.querySelector('span').textContent;
      // Copy the text to clipboard
      navigator.clipboard.writeText(text)
        .then(function() {
          // Alert the user that the text has been copied
          alert("Copied to clipboard: " + text);
        })
        .catch(function(error) {
          console.error('Failed to copy text: ', error);
        });
    });
  });
  
  
  
  
  
  
// function getBotResponse(input) {
//     //rock paper scissors
//     if (input == "rock") {
//         return "paper";
//     } else if (input == "paper") {
//         return "scissors";
//     } else if (input == "scissors") {
//         return "rock";
//     }

//     // Simple responses
//     if (input == "hello") {
//         return "Hello there!";
//     } else if (input == "goodbye") {
//         return "Talk to you later!";
//     } else {
//         return "Try asking something else!";
//     }
// }