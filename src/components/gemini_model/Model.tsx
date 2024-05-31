import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";


function Model() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const handleInputChange = (event: any) => {
    setQuestion(event.target.value);
  };

  function preTextSrc(value: string) {
    console.log("preTextSrc",value);
    setQuestion(value)
    generateAnswer(value);
  }
  const preText = ["Know more about EV", "What is the future of EV cars", "How EV is crucical for futute"];

  async function generateAnswer(val:string=question) {
    const inputElement = document.querySelector<HTMLInputElement>('#input');
    if (inputElement) {
      inputElement.value = ''; // Change input value
    }
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
          }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: val }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
      console.log(answer);
      
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="bg-zinc-900 w-11/12 rounded-2xl h-[550px] gap-3 mx-auto flex flex-col justify-between items-center text-white py-5 mt-10 mb-5">
        <div className="w-11/12 text-justify px-4 py-2 text-xl border rounded-2xl">
          Know more about EV with AI
        </div>
        <div className={`w-11/12 flex justify-center items-start flex-grow px-4 py-2 text-lg border rounded-2xl overflow-y-auto relative md:items-center` }>
          {answer=="" ? (
            <div className=" w-4/5 h-full flex flex-col item-center justify-evenly md:flex-row md:justify-center md:gap-4 md:h-fit lg:gap-12">
              {preText.map((val, idx) => (
                <div className=" h-fit text-center bg-zinc-800 rounded-xl text-md tracking-[.1em] p-2"
                  onClick={() => (preTextSrc(val))}
                  key={idx}
                >
                  {val}
                </div>
              ))}
            </div>
          ) :
            (<ReactMarkdown className="p-3">{answer}</ReactMarkdown>)
          }
        </div>

        <div className="w-11/12 px-4 py-2 text-lg border rounded-2xl bg-zinc-900 text-left">
          <input id="input"
            disabled={generatingAnswer}
            className="bg-transparent outline-none w-11/12"
            placeholder="Enter your query"
            onChange={handleInputChange}
          />
          <button className="bg-white text-black px-4 rounded-xl text-center mt-3" onClick={()=>(generateAnswer(question))}
            disabled={generatingAnswer}
          >
            Ask!
          </button>
        </div>

      </div>
    </>
  );
}

export default Model;