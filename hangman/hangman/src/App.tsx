import { useEffect, useState } from 'react';
import { HangMan } from './components/Hangman';
import { Word } from './components/Word';
import { Keyboard } from './components/Keyboard';
import './App.css';
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return(words[Math.floor(Math.random()*words.length )])})
  const [guessedLetters,setGuessedLetters]=useState<string[]>([]);
  const incorrectletters=guessedLetters.filter(letter=>!wordToGuess.includes(letter));

const isLosser=incorrectletters.length>=6;
const isWinner=wordToGuess.split("").every(letter=>guessedLetters.includes(letter));

function addGuessedLetter(letter:string){
  if (guessedLetters.includes(letter) ||isWinner||isLosser) return
  setGuessedLetters(current=>[...current, letter])
  console.log(guessedLetters,isLosser,isWinner);
}





  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])


  return (
   <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    // gap: "2rem",
    margin: "0 auto",
    alignItems: "center",
  }}>
      {isLosser&&<h2>You have lost!-Refresh to play again</h2>}
      {isWinner&&<h2>You have won!-Refresh to play again</h2>}
      {!isWinner&&!isLosser&&<h2>Keep playing...</h2>}
      <HangMan 
      numberOfGuesses={incorrectletters.length}
      
      />
      <Word word={wordToGuess} 
      guessedLetters={guessedLetters}
      reveal={isLosser}
      />
      <div style={{alignSelf:'stretch'}}>
          <Keyboard 
          disabled={isWinner||isLosser}
          addGuessedLetter={addGuessedLetter} 
          activeLetters={guessedLetters.filter(letter=>wordToGuess.includes(letter))}
          inactiveLetters={incorrectletters}
          />
      </div>
   </div>
  
  )
}

export default App
