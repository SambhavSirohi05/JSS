// AI Response Testing Utility
import { sendMessageToAI } from '../services/aiService.js';

export const testAIResponses = async () => {
  const testQueries = [
    "Tell me about yourself",
    "What projects have you worked on?",
    "What is AuthentiFi?",
    "What technologies do you know?",
    "Tell me about your education",
    "What is Chainlings Arena?",
    "What are your technical skills?",
    "Tell me about your AI Portfolio project",
    "What problems does AuthentiFi solve?",
    "What extracurricular activities are you involved in?"
  ];

  console.log("🤖 Testing AI Responses...\n");
  
  for (let i = 0; i < testQueries.length; i++) {
    const query = testQueries[i];
    console.log(`\n📝 Test ${i + 1}: "${query}"`);
    console.log("=" * 50);
    
    try {
      const response = await sendMessageToAI(query);
      console.log(`✅ Response: ${response}\n`);
    } catch (error) {
      console.log(`❌ Error: ${error.message}\n`);
    }
    
    // Add delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log("🎉 AI Testing Complete!");
};

// Sample test function for individual queries
export const testSingleQuery = async (query) => {
  console.log(`🤖 Testing: "${query}"`);
  try {
    const response = await sendMessageToAI(query);
    console.log(`✅ Response: ${response}`);
    return response;
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return null;
  }
};
