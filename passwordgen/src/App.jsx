import { useState, useCallback, useEffect , useRef} from 'react'

function App() {
  const[length, setlength] = useState(0);
  const[password, generate] = useState("");
  const[numbers,allownumers] = useState(false);
  const[chars,allowchars] = useState(false);
// made a few changes

  const Gen = useCallback(
    ()=> {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      
        if(numbers == true) str+="0123456789"
        
        if(chars == true) str+="!@#$%^&*()-=_+[]{}|;:',.<>/"
  
        for(let i=1;i<=length;i++){// to generate a bigger password.
          let char =Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char); // create a collection of characters

        }

        generate(pass);  // Generate one on UI

    },[length, generate, numbers, chars]

  )
  useEffect(
    ()=>{
        Gen()
    }, [length, Gen, chars, numbers]
  )
  function refreshPage(){ 
    window.location.reload(); 
}
const copytoclip = useCallback(
  ()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]
);

const passwordref = useRef();

 // couldn't be called like this, because i can't control the rendering of the elements in react. 
  return (
    <>
    <div className='w-4/12 shadow-md rounded-xl mx-auto  px-4 my-8 bg-gray-700'>
        <h1 className=' text-white text-center text-2xl'>Password Generator</h1>
        <br />
      <div className='flex shadow rounded-lg overflow-hidden mb-4 rounded'>
        <input type="text" value={password} placeholder='Password' readOnly className='outline : none w-full py-1 px-3 text-indigo-300 ' ref={passwordref}/>
        <button className='outline-none bg-purple-300 py-3 px-0.5 text-black text-l w-32  hover:scale-110 hover:bg-blue-200' onClick={copytoclip}>Copy</button>

      </div>
      <div className='flex text-xl gap-x-2 text-orange-200' style={{marginRight: "2%"}}>
        <div className='flex items-center gap-x-1' >
        <input type="range" name="" id="" 
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setlength(e.target.value)
        } }
        />

        <label className='flex gap-x-1 items-center'> Length:: '{length}'</label>

        </div>
        <br />  
        <div >

        <input type="checkbox" 
        defaultChecked={chars}
        onChange={
          ()=>{
            allowchars((e)=>!e) // reset the value again and again.
          }
        }
        id='charinput'
        
        />
        <label htmlFor="charinput"> W-Chars </label>

        <input type="checkbox" 
        defaultChecked={numbers}
        onChange={
          ()=>{
            allownumers((e)=>!e) // reset the value again and again.
          }
        }
        id='numinput'
        />
        <label htmlFor="numinput"> W-Nums</label>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
    <button className='text-black text-xl borber-4 border-white-200 bg-orange-300 w-20 h-10 justify-center rounded hover:scale-105  hover:bg-white' onClick={refreshPage}>Refresh</button>
    </div>
   </>

  )
}

export default App
