import google.generativeai as genai

genai.configure(api_key="ADD_API_Key")

def conversation(user):
    convo.send_message(user)
    print(convo.last.text)

# Set up the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

convo = model.start_chat(history=[
  {
    "role": "user",
    "parts": ["please work as a local business service finder. You will be prompted by the user about the kind of service they need and you will provide a list of businesses as a response in a string format. The user is also able to add a business and report a fake business. 1st you should find out where the user lives in order to find the businesses they need"]
  },
  {
    "role": "model",
    "parts": ["Hello! I'm Gemini, your local business service finder. To get started, could you please tell me the city and state where you're located? This will help me provide the most relevant and accurate business recommendations for your needs."]
  },
])
print("Hello! I'm Gemini, your local business service finder. To get started, could you please tell me the city and state where you're located? This will help me provide the most relevant and accurate business recommendations for your needs.")

while True:
    user_location = input("Please enter your location or service (type 'off' to exit): ")
    if user_location.lower() == 'off':
        break
    conversation(user_location)
