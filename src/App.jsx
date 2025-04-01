import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import { HfInference } from '@huggingface/inference'
import {getRecipeFromMistral} from './components/hugface'
function App() {
  const [count, setCount] = useState(0)

  console.log('Full Env:', import.meta.env);
 console.log('api key',import.meta.env.VITE_HUGFACE_KEY);
 console.log("key name", import.meta.env); // Should list all environment variables
 const hf = new HfInference(import.meta.env.VITE_HUGFACE_KEY)
 async  function command(params) {
var res= await getRecipeFromMistral()
 }
  return (
    <>
    <Header/>
    <Main/>
    <button onClick={command}></button>
    </>
  )
}

export default App
