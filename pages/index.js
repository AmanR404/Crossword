import { useState, useEffect, useRef } from "react"
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import {app} from '../firebase'
import { useRouter } from "next/router";

export default function Home() {
  // Instances
  const auth = getAuth(app)
  const router = useRouter();
  const intervalRef = useRef(null);
  const messagesEndRef = useRef(null)

  // States
  const [userScore, setuserScore] = useState(0)
  const [aiScore, setaiScore] = useState(0)
  const [answer, setAnswer] = useState("")
  const [aiAnswer, setaiAnswer] = useState("")
  const [chatSection, setChatSection] = useState(["Chats will be here"])
  const [incorrect, setIncorrect] = useState("invisible text-red-600 font-bold")
  const [questions, setQuestions] = useState(["UI Library built by Facebook", "JavaScript SPA Framework works on typeScript", "Styling Framework", "Interacts with the server/ Fetches data", "Defines structure of a Page", "what is M in Mern Stack", "JavaScript runtine environment", "Microsoft Cloud Service", "Guidelines for an API", "Solve something by digging the problem"])
  const [user, setUser] = useState(null)
  const [word1Visibility, setWord1Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word2Visibility, setWord2Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word3Visibility, setWord3Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word4Visibility, setWord4Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word5Visibility, setWord5Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word6Visibility, setWord6Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word7Visibility, setWord7Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word8Visibility, setWord8Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word9Visibility, setWord9Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
  const [word10Visibility, setWord10Visibility] = useState("invisible w-[10%] bg-green-300 text-center h-full font-semibold")
 
  // Getting user status
  useEffect(() => {
   onAuthStateChanged(auth, (user)=>{
    if(user){
      console.log(user)
      setUser(user.email.slice(0,4))
    }
   })

  }, [])
  
  // Score Checker
  const scoreboard = (parameter) => {
    if (parameter == "ai") {
      setaiScore(prev => prev + 1)
       setChatSection(prevChats => [...prevChats,"AI Guessed word...."])
    }
    else if (parameter == "user") {
      setuserScore(prev => prev + 1)
        setChatSection(prevChats => [...prevChats,"Congrats....U guessed it right."])
    }
  }

  // Answer Matcher
  const matcher = (parameter) => {
    if (answer.toUpperCase() == "REACT" || aiAnswer.toLowerCase().includes("react")) {
      setWord1Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "ANGULAR" || aiAnswer.toLowerCase().includes("angular")) {
      setWord2Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "TAILWIND" || aiAnswer.toLowerCase().includes("tailwind")) {
      setWord3Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "API" || aiAnswer.toLowerCase().includes("api")) {
      setWord4Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "HTML" || aiAnswer.toLowerCase().includes("html")) {
      setWord5Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "MONGODB" || aiAnswer.toLowerCase().includes("mongodb")) {
      setWord6Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "NODE" || aiAnswer.toLowerCase().includes("node")) {
      setWord7Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "AZURE" || aiAnswer.toLowerCase().includes("azure")) {
      setWord8Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "REST" || aiAnswer.toLowerCase().includes("rest")) {
      setWord9Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else if (answer.toUpperCase() == "DEBUG" || aiAnswer.toLowerCase().includes("debug")) {
      setWord10Visibility("visible w-[10%] bg-green-300 text-center h-full font-semibold")
      setQuestions(questions.slice(1,))
      setAnswer("")
      setaiAnswer("")
      scoreboard(parameter)
    }
    else {
      setIncorrect("visible text-red-600 font-bold")
      setTimeout(() => {
        setIncorrect("invisible text-red-600 font-bold")
      }, 2000)
    }
  }

  // AI Responses (Gemini)
  const aiOpponent = () => {
    if(!questions.length) return

        fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAt4MmdVl-83OHt-RpT1sf0Sy45kIeF3s4", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            "contents": [{ "parts": [{ "text": questions[0] }] }]
          })
        })
          .then(res => res.json())
          .then(data => {
            setaiAnswer(data.candidates[0].content.parts[0].text);
            setChatSection(prevChats => [...prevChats,data.candidates[0].content.parts[0].text.split(" ").slice(0,12).join(" ")])
          });
  }

  useEffect(() => {
    if (!aiAnswer) return
    matcher("ai")

  }, [aiAnswer])

  // useEffect(() => {
  //   aiOpponent()

  // }, [questions])

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [chatSection])

 const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
    {user!=null?<button onClick={()=> signOut(auth)} className="absolute right-0 bg-red-600 text-white px-5 py-2 rounded-2xl cursor-pointer">Logout</button>:<button onClick={()=>router.push("/signup")} className="absolute right-0 bg-red-600 text-white px-5 py-2 rounded-2xl cursor-pointer">Sign Up</button>}
      <h2 className="text-center font-bold text-3xl underline">Crossword Battle Arena</h2>
      <section className="flex flex-col md:flex-row gap-10 items-center">
                             {/* Score Board */}
        <div className="flex flex-col gap-2 pl-4">
          <span>{user} Score is :- <strong>{userScore}</strong></span>
          <span>AI Score is :- <strong>{aiScore}</strong></span>
        </div>
        <section className="flex flex-col gap-10">
                             {/* Crossword Board */}
          <section className="w-[450px] h-[360px] border border-black mx-auto mt-10">
            {/* Row 1 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word1Visibility}>R</div>
              <div className={word1Visibility}>E</div>
              <div className={word1Visibility}>A</div>
              <div className={word1Visibility}>C</div>
              <div className={word1Visibility}>T</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word2Visibility}>A</div>
            </div>
            {/* Row 2 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className={word7Visibility}>N</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word3Visibility}>A</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word2Visibility}>N</div>
            </div>
            {/* Row 3 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className={word7Visibility}>O</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word4Visibility}>A</div>
              <div className={word4Visibility}>P</div>
              <div className={word3Visibility}>I</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word2Visibility}>G</div>
            </div>
            {/* Row 4 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className={word7Visibility}>D</div>
              <div className={word8Visibility}>A</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word5Visibility}>H</div>
              <div className={word5Visibility}>T</div>
              <div className={word5Visibility}>M</div>
              <div className={word3Visibility}>L</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word2Visibility}>U</div>
            </div>
            {/* Row 5 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className={word7Visibility}>E</div>
              <div className={word8Visibility}>Z</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word6Visibility}>O</div>
              <div className={word3Visibility}>W</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word2Visibility}>L</div>
            </div>
            {/* Row 6 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word8Visibility}>U</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word6Visibility}>N</div>
              <div className={word3Visibility}>I</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word2Visibility}>A</div>
            </div>
            {/* Row 7 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word8Visibility}>R</div>
              <div className={word9Visibility}>E</div>
              <div className={word9Visibility}>S</div>
              <div className={word9Visibility}>T</div>
              <div className={word6Visibility}>G</div>
              <div className={word3Visibility}>N</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word2Visibility}>R</div>
            </div>
            {/* Row 8 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className={word10Visibility}>D</div>
              <div className={word8Visibility}>E</div>
              <div className={word10Visibility}>B</div>
              <div className={word10Visibility}>U</div>
              <div className={word10Visibility}>G</div>
              <div className={word6Visibility}>O</div>
              <div className={word3Visibility}>D</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
            </div>
            {/* Row 9 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word6Visibility}>D</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
            </div>
            {/* Row 10 */}
            <div className="w-full h-[10%] border border-black flex">
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className={word6Visibility}>B</div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
              <div className="w-[10%] text-center h-full bg-black"></div>
            </div>
          </section>
          <section className="border border-black pb-10 rounded-xs p-1">
            <h1 className="font-bold">Hints :-</h1>
            <div className="flex gap-5 items-center">
              <span className="w-[220px] overflow-x-clip">{questions[0]}</span>
              <input className="px-4 bg-white rounded-lg" type="text" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} /><br/>
              <button className="bg-red-600 text-white px-5 py-1 rounded-2xl cursor-pointer" onClick={() => matcher("user")}>Submit</button>
              <span className={incorrect}>Incorrect</span>
            </div>
          </section>
        </section>
        <div className="border h-[250px] w-[370px] border-black rounded-lg relative bg-gray-800">
                             {/* Chat Screen & Responses */}
            <div className="flex flex-col gap-2 overflow-y-auto border h-[220px]">
             {chatSection.map((chat)=>{
              return(
                <>
                 <p className="w-1/2 p-1 border  m-3 rounded-xl border-black bg-gray-500 text-white">{chat}</p>
                <span ref={messagesEndRef}></span>
                </>)
             })}
            </div>
            <input type="text" placeholder="Type here..." className="bg-gray-500 absolute bottom-0 w-full py-1 px-2"/>
        </div>
      </section>
      <button className="absolute buttom-0 right-35 bg-red-600 text-white px-5 py-1 rounded-2xl cursor-pointer" onClick={()=>handleReload()}>Start New Game</button>
    </>
  )
}
