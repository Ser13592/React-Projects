
type WordPropType={
    word:string;
    guessedLetters:string[]
    reveal?:boolean
}

export function Word({word,guessedLetters, reveal=false}:WordPropType){
    const wordArray=word.split('');


    return<>
        <div style={{display:'flex', gap:'0.5rem',padding:'1rem', fontSize:'4rem', fontFamily:'monospace', margin:'1rem', textTransform:'uppercase'}}>
             {wordArray.map((letter,index)=> 
             <span key={index} style={{display:'inline-block'
                                    , paddingBottom:'1rem',
                                    borderBottom:'0.1em solid black',
                                    color:!guessedLetters.includes(letter)&&reveal?"red":"black"
                                    }}><span style={{visibility:guessedLetters.includes(letter)||reveal ?'visible':'hidden'}}>{letter}</span></span>)}
        </div>
    </>
}