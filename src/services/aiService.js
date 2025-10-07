const API_KEY = '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';
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const sendMessageToAI = async (message) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant for a portfolio website. You help answer questions about the portfolio owner, their skills, projects, and experience. Be friendly, professional, and concise in your responses.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to get AI response. Please try again.');
  }
};
