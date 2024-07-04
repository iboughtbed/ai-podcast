import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { GENERATE_SCRIPT_FOR_BOOK_SYSTEM_PROMPT } from "~/lib/constants";

export async function GET() {
  const loader = new PDFLoader(
    "C:/Users/Acer/Documents/Personal/resources/Essays-That-Will-Change-The-Way-You-Think-Brianna-Wiest.pdf",
    {
      splitPages: false,
    },
  );

  const documents = await loader.load();
  const content = documents[0]?.pageContent;

  if (!content) return new Response("Error loading PDF", { status: 500 });

  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    apiKey: "AIzaSyCjeW3I15YPyw4-KORBsDdJZDokV_MYka4",
  });

  const prompt = ChatPromptTemplate.fromTemplate(
    GENERATE_SCRIPT_FOR_BOOK_SYSTEM_PROMPT,
  );

  const chain = prompt.pipe(llm);

  const response = await chain.invoke({ content });

  return new Response(JSON.stringify(response), { status: 200 });
}
