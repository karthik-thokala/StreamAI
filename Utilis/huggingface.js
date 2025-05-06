const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;

const fetchGpt3Response = async (promptText) => {
  const baseUrl = "https://openrouter.ai/api/v1/chat/completions";

 

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "yourdomain.com",     
        "X-Title": "My AI App",               
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: promptText }],
        temperature: 0.7,
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    
    const generatedText = data.choices?.[0]?.message?.content;

    if (!generatedText) {
      console.warn("No text returned by OpenRouter");
      return null;
    }

    
    const movieNamesArray = generatedText
      .split(",")
      .map(m => m.trim())
      .filter(Boolean);

    return movieNamesArray.length > 0 ? movieNamesArray : [generatedText.trim()];
  } catch (error) {
    console.error("Error calling OpenRouter:", error);
    return null;
  }
};

export default fetchGpt3Response;
