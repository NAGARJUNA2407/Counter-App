import { useState } from "react";
import "./App.css";

function App() {

  
  const [count , setCount ]=useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
		<div className="flex w-[100vw] h-[100vh] flex-col gap-10 bg-[#344151] justify-center items-center">
				<div className="text-2xl text-[#0398d4] "> Increment & Decrement
         </div>
			<div className="bg-[white] flex gap-12 py-3 rounded-sm text-[25px] text-[#344151] justify-center items-center">

				<button onClick={decreaseHandler} className="border-r-2  text-center w-20 text-5xl border-[#bfbfbf]"> - </button>
				<div className="text-5xl font-bold gap-12"> {count} </div>
			<button onClick={increaseHandler}  className="border-l-2  text-center w-20 text-5xl border-[#bfbfbf]" > + </button>
      </div>
			<button onClick={resetHandler} className="bg-[#0398d4] text-white rounded-sm text-lg px-5 py-2"> Reset</button>
		</div>
  );
}

export default App;
