import { useState } from "react"
import {Tweet} from "./components/Tweet"
import './App.css'

function App() {
  // Basicamente o UseState cria uma variável que é monitorada pelo componente, e toda vez que a variável muda esse valor o componente é remontado/rerenderizado em tela com as novas informações daquela variável.
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4"
  ])

  function createTweet() {
    setTweets([...tweets, "Tweet 5"])
  }

  return (
    <>
    {/* Aqui chamei a constante tweet e usei o método Map para percorrer dentro da array  */}
    {tweets.map(tweet => {
      return <Tweet text={tweet}/>
    })}
    <button 
      onClick={createTweet}
      style={{
        backgroundColor: '#8257e6',
        border: 0,
        borderRadius:'12px',
        padding: '6px 12px',
        color: '#FFF'
      }}    
    >
      Adicionar Tweet
    </button>
    </>    
  )
}

export default App
