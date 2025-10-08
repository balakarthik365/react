import axios from "axios";
import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import Markdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton";

const GPTHome = () => {
  const userInput = useRef();
  let [response, setResponse] = useState("");
  let [status, setStatus] = useState(false);
  const askGPTHandler = async (event) => {
    event.preventDefault();
    setStatus(true);
    const question = userInput.current.value;
    const apiURL = "https://api.openai.com/v1/chat/completions";
    const apiKey =
      "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"; // 🔒 never expose this in frontend

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const requestBody = {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: question }],
    };

    try {
      const response = await axios.post(apiURL, requestBody, { headers });
      response.data.choices.forEach((choice, index) => { 
        setResponse(choice.message.content);
      });
      setStatus(false);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <>
      <div className="w-[750px] mx-auto mt-10 mb-32">
        {status ? (
          <>
            <div className="space-y-2">
              <p className="text-neutral-600">Sit back and relax, GPT is thinking...</p>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </>
        ) : (
          <Markdown>{response}</Markdown>
        )}

        <form
          action=""
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[750px] bg-white h-[100px]"
        >
          <div className="flex">
            <input
              type="text"
              ref={userInput}
              placeholder="Ask me anything..."
              className="w-full hover:outline-none border rounded-l-lg border-neutral-400 p-3 focus:border-neutral-500"
            />
            <button
              onClick={askGPTHandler}
              className="p-4 hover:cursor-pointer bg-neutral-700 hover:bg-black text-white font-semibold rounded-r-lg"
            >
              <IoSend />
            </button>
          </div>
          <p className="text-sm text-neutral-700 text-center mt-1">
            ChatGPT is and AI and can make mistakes. Check important info.
          </p>
        </form>
      </div>
    </>
  );
};

export default GPTHome;
