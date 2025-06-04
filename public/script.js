async function sendMessage() {
    const input = document.getElementById('input');
    const message = input.value.trim();
    if (!message) return;
    const res = await fetch('/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });
    const data = await res.json();
    const messagesDiv = document.getElementById('messages');
    const p = document.createElement('p');
    p.textContent = 'You: ' + message;
    messagesDiv.appendChild(p);
    const resp = document.createElement('p');
    resp.textContent = 'n8n: ' + (data.response || 'Error');
    messagesDiv.appendChild(resp);
    input.value = '';
}
