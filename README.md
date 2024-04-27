# GetUrService
GetUrService is a local business service finder that utilizes generative AI to provide personalized business recommendations based on the user's location and needs.

## Installation
To install Gemini, use pip:
$ pip install google-generativeai


## Usage
Configure API Key: Before using Gemini, you need to configure your API key. You can obtain this key from Google Cloud Console. Once you have the key, configure it using the following command:

import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY_HERE")
Start Conversation: To start a conversation with Gemini, simply run the script:
$ python3 chat.py
Provide Location: Gemini will prompt you to enter your location (city and state). Enter your location to receive personalized business recommendations.
Continuous Conversation: Gemini allows for continuous conversation. Enter your location each time prompted, and Gemini will provide updated recommendations.
Exit: To exit the conversation, type "off" when prompted for your location.