//chatGPT-OpenAi
document.addEventListener('DOMContentLoaded', () => {
	const formElement = document.querySelector("form");
	const chatContainer = document.querySelector("#chat-container");
	const prompt = document.querySelector("#prompt");

	const button = document.querySelector("#btn")

	button.addEventListener("click", async function(e) {
		e.preventDefault()
		const promptValue = prompt.value.trim()

		let res = await fetch("/temp", {
			      method: 'POST', 
                  headers: {
                     'Content-Type': 'application/json'
                    },
                  body: JSON.stringify({ prompt: promptValue })
                  })

        let txt = await res.json();
        console.log(txt)
		})


 
	let loadInterval;

	function loader(element) {
		element.textContent = "";
		loadInterval = setInterval(() => {
			element.textContent += "."
			if (element.textContent === "...") element.textContent = "";

		}, 300)
	}

	function typeText(element, text) {
		let index = 0;

		let interval = setInterval(() => {
			if (index < text.length) {
			   element.innerHtml += text.charAt(index);
			   index++;
			} else {
			   clearInterval(interval);
			}
		}, 200)
	}

	function generateUniqueId() {
		const timestamp = Date.now();
		const randomNumber = Math.random();
		const hexString = randomNumber.toString(16);
		return `id-${timestamp}-${hexString}`;
	}
  
})

