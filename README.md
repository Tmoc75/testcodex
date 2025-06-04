# testcodex

This repository provides a simple chat web server that forwards messages to an n8n API webhook.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `N8N_WEBHOOK_URL` environment variable to your n8n webhook.

3. Start the server:
   ```bash
   npm start
   ```

Open `http://localhost:3000` in your browser to access the chat page.
