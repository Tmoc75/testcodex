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

## Docker

1. Build the image:
   ```bash
   docker build -t testcodex-chat .
   ```
2. Run the container, passing your webhook URL:
   ```bash
   docker run -p 3000:3000 -e N8N_WEBHOOK_URL=<your_webhook_url> testcodex-chat
   ```

Then open `http://localhost:3000` in your browser.
