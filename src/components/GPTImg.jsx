import axios from "axios";
import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton";
const GPTImg = () => {
  const userInput = useRef();
  let [status, setStatus] = useState(false);
  const [img, setImg] = useState(null);
  const [textResponses, setTextResponses] = useState([]);
  const askGPTHandler = async (event) => {
    event.preventDefault();
    setStatus(true);
    const question = userInput.current.value;
    const apiURL = "https://api.stability.ai/v2beta/stable-image/generate/core";
    const apiKey = "sk-QT1kmoAY4VLIAWbjst1cAXbshHmyNP7qqIcN0mPC0gDBzu7M";
    const formData = new FormData();
    formData.append("prompt", question);
    formData.append("output_format", "webp");
    try {
      const response = await axios.post(apiURL, formData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "image/*",
        },
        responseType: "arraybuffer", // receive binary image data
      });
      // Convert ArrayBuffer to Base64 (browser-friendly)
      const bytes = new Uint8Array(response.data);
      let binary = "";
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      const base64Image = btoa(binary);
      const imageUrl = `data:image/webp;base64,${base64Image}`;
      setStatus(false);
      setImg(imageUrl);
    } catch (error) {
      console.error(
        "Error generating image:",
        error.response ? error.response.data : error.message
      );
      setStatus(false);
    }
  };
  return (
    <>
      <div className="w-[750px] mx-auto mt-10 mb-32">
        {status ? (
          <>
            <div className="space-y-2">
              <p className="text-neutral-600">
                Sit back and relax, GPT is thinking...
              </p>
              <Skeleton className="w-full h-[500px] object-contain" />
            </div>
          </>
        ) : (
          img && (
            <img
              src={img}
              alt="Generated"
              className="w-full h-[500px] object-cover"
            />
          )
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

export default GPTImg;
