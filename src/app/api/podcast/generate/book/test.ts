import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { doc } from "prettier";

import { env } from "~/env";

const blob = new Blob();

const loader = new PDFLoader(blob, {
  splitPages: false,
});
const documents = loader.load().then((value) => {
  value;
});
const content = documents[0];

console.log({ content });

// if (!content) {
// } else {
//   const model = new ChatOpenAI({
//     model: "gpt-3.5-turbo-0125",
//     openAIApiKey: env.OPENAI_API_KEY,
//     temperature: 0,
//   });

//   const prompt = ChatPromptTemplate.fromTemplate(``);
//   await prompt.invoke(documents);
// }
