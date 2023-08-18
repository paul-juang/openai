//chatGPT-OpenAi
document.addEventListener('DOMContentLoaded', () => {
	const formElement = document.querySelector("form");
	const chatContainer = document.querySelector("#chat-container");
	const prompt = document.querySelector("#prompt");

	const button = document.querySelector("#btn")

	button.addEventListener("click", async function(e) {
		e.preventDefault()
		
		const promptValue = prompt.value.trim();
		prompt.value = "";

		let interval1 = setInterval(() => {
			prompt.value += ".";
			if (prompt.value === "....") prompt.value = ""
		}, 200)
		
		let res = await fetch("/chatGPT", {
			      method: 'POST', 
                  headers: {
                     'Content-Type': 'application/json'
                    },
                  body: JSON.stringify({ prompt: promptValue })
                  })

        let answer = await res.json();
        let answerText = answer["answer"];

        clearInterval(interval1);

        prompt.value = "";

        let finalText = promptValue +"\r\n"+answerText

        index = 0;

        let interval2 = setInterval(() => {
        	   if (index < finalText.length) {
        	   	prompt.value += finalText.charAt(index);
        	   	index++
        	   } else {
        	   	clearInterval(interval2)
        	   }  
        }, 20)

		})


	function generateUniqueId() {
		const timestamp = Date.now();
		const randomNumber = Math.random();
		const hexString = randomNumber.toString(16);
		return `id-${timestamp}-${hexString}`;
	}
  
})

