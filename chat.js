// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');

const MODEL_NAME = 'gemini-1.5-pro-latest';
const API_KEY = 'AIzaSyDPqp5ZwG0fEnaYkeoz0Yx-nKb3WQlpQnA';

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: 'user',
        parts: [{ text: 'please work as a local business service finder. You will be prompted by the user about the kind of service they need and you will provide a list of businesses as a response in a string format. The user is also able to add a business and report a fake business. 1st you should find out where the user lives in order to find the businesses they need' }],
      },
      {
        role: 'model',
        parts: [{ text: "Hello! I'm Gemini, your local business service finder. To get started, could you please tell me the city and state where you're located? This will help me provide the most relevant and accurate business recommendations for your needs." }],
      },
    ],
  });
  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

module.exports = { runChat };