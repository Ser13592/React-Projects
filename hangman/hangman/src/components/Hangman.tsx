const HEAD=(
    <div style={{width:'50px',height:'50px',border:'10px solid black', borderRadius:'100%', position:'absolute',top:'100px',right:'-185px' }}></div>
)

const BODY=(
    <div style={{width:'10px', height:'100px',  border:'1px solid black', background:'black', position:'absolute',top:'160px',right:'-157px' }}></div>
)

const LEFT_ARM=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'180px',right:'-150px' }}></div>
)

const RIGHT_ARM=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'180px',right:'-255px' }}></div>
)

const LEFT_LEG=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'250px',right:'-155px', transformOrigin:'right bottom', transform:'rotate(-45deg)' }}></div>
)

const RIGHT_LEG=(
    <div style={{width:'100px', height:'10px',  border:'1px solid black', background:'black', position:'absolute',top:'250px',right:'-250px', transformOrigin:'left bottom', transform:'rotate(45deg)' }}></div>
)


export function HangMan(){
return(
<div style={{width:'300px', position:'relative'}}>
    <div style={{width:'10px', height:'50px',  border:'1px solid black', background:'black', position:'relative', top:'52px',right:'-445px'}}></div>
    <div style={{height:'10px',width:'300px', border:'1px solid black', background:'black',marginLeft:'145px'}}></div>
    <div style={{width:'10px', height:'400px',  border:'1px solid black', background:'black', marginLeft:'145px'}}></div>
    <div style={{height:'10px', border:'1px solid black', background:'black'}}></div>
    {HEAD}
    {BODY}
    {LEFT_ARM}
    {RIGHT_ARM}
    {LEFT_LEG}
    {RIGHT_LEG}
</div>

)

}