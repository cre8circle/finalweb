import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { Configuration, OpenAIApi } from "openai";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Load FAQs
const faqs = JSON.parse(fs.readFileSync("./faqs.json", "utf8"));

// Setup OpenAI (for embeddings)
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // add in .env
});
const openai = new OpenAIApi(configuration);

// Convert text to embedding
async function embedText(text) {
  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: text,
  });
  return response.data.data[0].embedding;
}

// Store embeddings for FAQs in memory (startup step)
let faqEmbeddings = [];
async function initEmbeddings() {
  for (const faq of faqs) {
    const vector = await embedText(faq.question);
    faqEmbeddings.push({ ...faq, vector });
  }
}
initEmbeddings();

// Cosine similarity
function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (normA * normB);
}

// Chat endpoint
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const queryVector = await embedText(message);

  // Find best matching FAQ
  let bestMatch = null;
  let bestScore = -1;

  for (const faq of faqEmbeddings) {
    const score = cosineSimilarity(queryVector, faq.vector);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  res.json({ answer: bestMatch.answer });
});

app.listen(5000, () => console.log("Chatbot backend running on http://localhost:5000"));
