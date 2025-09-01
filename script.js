import OpenAI from "https://cdn.jsdelivr.net/npm/openai@4.0.0/dist/openai.min.js";

const client = new OpenAI({
  apiKey: "sk-your_api_key_here", // ⚠️ not safe for production!
  dangerouslyAllowBrowser: true,
});

window.getJoke = async function () {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Generating a joke... 😂";

  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Tell me a funny short joke" }],
  });

  jokeElement.textContent = response.choices[0].message.content;
};
