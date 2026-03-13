import { facultyData } from '../data/facultyData.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const createSystemPrompt = () => {
  // Calculate department statistics
  const totalFaculty = facultyData.length;
  const totalPublications = facultyData.reduce((sum, f) => {
    const pubs = f.publications;
    return sum + (pubs.scie || 0) + (pubs.scopus || 0) + (pubs.conferences || 0);
  }, 0);
  const totalPatents = facultyData.reduce((sum, f) => sum + (f.patents?.length || 0), 0);
  const totalTeachingYears = facultyData.reduce((sum, f) => sum + (f.experience.teaching || 0), 0);

  // Faculty overview
  const facultyOverview = facultyData.map(f => {
    const publications = (f.publications.scie || 0) + (f.publications.scopus || 0) + (f.publications.conferences || 0);
    const patents = f.patents?.length || 0;
    const researchAreas = f.researchAreas?.slice(0, 3).join(', ') || 'N/A';

    return `${f.name} - ${f.designation}
    • Email: ${f.email}
    • Experience: ${f.experience.teaching} years teaching, ${f.experience.research || 0} years research
    • Publications: ${publications}+, Patents: ${patents}
    • Research Areas: ${researchAreas}`;
  }).join('\n\n');

  return `You are an AI assistant for JSS Academy of Technical Education's Information Technology Department. You are knowledgeable, professional, and helpful.

DEPARTMENT INFORMATION:
- Institution: JSS Academy of Technical Education, Noida
- Department: Information Technology
- Total Faculty: ${totalFaculty}
- Total Publications: ${totalPublications}+
- Total Patents: ${totalPatents}+
- Combined Teaching Experience: ${totalTeachingYears}+ years

FACULTY MEMBERS:

${facultyOverview}

KEY RESEARCH AREAS IN THE DEPARTMENT:
• Deep Learning and Machine Learning
• Artificial Intelligence
• Blockchain Technology
• Fog and Cloud Computing
• Internet of Things (IoT)
• Wireless Sensor Networks
• Cybersecurity
• Computer Vision and Robotics
• Network Security

RESPONSE GUIDELINES:
1. Keep responses SHORT and CRISP - maximum 2-3 sentences for simple queries
2. Use professional, academic language
3. Use bullet points for lists of multiple items
4. For faculty information, provide:
   • Faculty Name - Designation
   • Specialization areas
   • Contact: email
5. Be helpful and informative about the department and faculty
6. If asked about a specific faculty member, provide their details
7. If asked about research areas, mention relevant faculty members
8. For contact information, always provide email addresses
9. Use line breaks for better readability
10. Stay factual and accurate based on the provided information

You are representing a prestigious technical institution. Keep responses professional and informative.`;
};

export const sendMessageToAI = async (message) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: createSystemPrompt(),
    });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: message }] }],
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.5,
      }
    });

    let content = result.response.text();

    // Post-process to ensure proper bullet point formatting
    content = content.replace(/•\s*/g, '\n• ');
    content = content.replace(/\n\n+/g, '\n\n'); // Clean up multiple line breaks
    content = content.trim();

    return content;
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to get AI response. Please try again.');
  }
};
