const HEAD=(
    <div style={{width:'50px',height:'50px',border:'10px solid black', borderRadius:'100%', position:'absolute',top:'50px',right:'-85px',marginBottom:'2rem' }}></div>
)

const BODY=(
    <div style={{width:'10px', height:'100px',  border:'1px solid black', background:'black', position:'absolute',top:'110px',right:'-57px' }}></div>
)

const LEFT_ARM=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'130px',right:'-50px' }}></div>
)

const RIGHT_ARM=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'130px',right:'-155px' }}></div>
)

const LEFT_LEG=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'200px',right:'-55px', transformOrigin:'right bottom', transform:'rotate(-45deg)' }}></div>
)

const RIGHT_LEG=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'200px',right:'-150px', transformOrigin:'left bottom', transform:'rotate(45deg)' }}></div>
)
const BODY_PARTS=[HEAD,BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanProps={
    numberOfGuesses:number  
}

export function HangMan( {numberOfGuesses}:HangmanProps){
return(
<div style={{width:'300px', position:'relative'}}>
    <div style={{width:'10px', height:'50px',  border:'1px solid black', background:'black', position:'absolute', top:'0px',right:'-55px'}}></div>
    <div style={{height:'10px',width:'200px', border:'1px solid black', background:'black',marginLeft:'145px'}}></div>
    <div style={{width:'10px', height:'300px',  border:'1px solid black', background:'black', marginLeft:'145px'}}></div>
    <div style={{height:'10px', border:'1px solid black', background:'black'}}></div>
    {BODY_PARTS.slice(0,numberOfGuesses)}
</div>

)

}