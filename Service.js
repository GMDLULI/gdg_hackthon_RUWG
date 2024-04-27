const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const { runChat } = require('./chat.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/chat', async (req, res) => {
  const userInput = req.body.userInput;
  try {
    const response = await runChat(userInput);
    res.send(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});