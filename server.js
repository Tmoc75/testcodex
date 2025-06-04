const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

if (!N8N_WEBHOOK_URL) {
  console.warn('N8N_WEBHOOK_URL is not set. Messages will not be forwarded.');
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/message', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }
  if (!N8N_WEBHOOK_URL) {
    return res.json({ response: 'n8n webhook not configured' });
  }

  try {
    const response = await axios.post(N8N_WEBHOOK_URL, { message });
    res.json({ response: response.data });
  } catch (error) {
    console.error('Error sending to n8n:', error.message);
    res.status(500).json({ error: 'Failed to contact n8n' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
