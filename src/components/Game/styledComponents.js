import style from 'styled-components'

export const GameContainer = style.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#223a5f;
min-height:100vh;
width:100%;
padding:30px;
`
export const ScoreBoard = style.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
border-radius:10px;
border-style:solid;
border-color:#ffffff;
min-width:800px;
max-width:800px;
@media screen and (max-width:991px){
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
border-radius:10px;
border-style:solid;
border-color:#ffffff;
min-width:500px;
max-width:500px;
}
@media screen and (max-width:767px){
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
border-radius:10px;
border-style:solid;
border-color:#ffffff;
min-width:400px;
max-width:400px;
}
@media screen and (max-width:600px){
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
border-radius:10px;
border-style:solid;
border-color:#ffffff;
min-width:350px;
max-width:350px;
}
@media screen and (max-width:575px){
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
border-radius:10px;
border-style:solid;
border-color:#ffffff;
min-width:320px;
max-width:320px;
}
@media screen and (max-width:375px){
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
border-radius:10px;
border-style:solid;
border-color:#ffffff;
min-width:220px;
max-width:220px;
}
`
export const Weapons = style.div`
`

export const Score = style.div`
background-color:#ffffff;
color:#223a5f;
border-radius:10px;
padding-left:40px;
padding-right:40px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
@media screen and (max-width:375px){
background-color:#ffffff;
color:#223a5f;
border-radius:10px;
padding-left:20px;
padding-right:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
}
`
export const WeaponImage = style.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:${props => props.wrap};
margin-top:100px;
`
export const Name = style.h1`
color:#ffffff;
font-family:Bree Serif;
margin:0px;
font-size:24px;
font-weight:500;
@media screen and (max-width:375px){
color:#ffffff;
font-family:Bree Serif;
margin:0px;
font-size:16px;
font-weight:500; 
}
`
export const ScoreHead = style.p`
font-size:22px;
font-family:${props => props.fontfamily};
margin:5px;
@media screen and (max-width:375px){
font-family:${props => props.fontfamily};
margin:5px;
font-size:17px;
}
`
export const ScoreHead2 = style.p`
font-size:40px;
font-family:${props => props.fontfamily};
margin:5px;
@media screen and (max-width:375px){
font-size:30px;
font-family:${props => props.fontfamily};
margin:5px;   
}
`

export const RuleButton = style.button`
border:none;
background-color:#ffffff;
color:#223a5f;
font-family:Roboto;
padding:5px;
font-size:18px;
border-radius:8px;
width:100px;
cursor:pointer;
font-weight:500;
`
export const PopDisplay = style.div`
display:flex;
flex-direction:row;
justify-content:center;
padding:20px;
background-color:#ffffff;
`

export const RuleImage = style.img`
height:400px;
width:500px;
margin-right:10px;
@media screen and (max-width:575px){
height:300px;
width:300px;
margin-right:10px;
}
`
export const Trigger = style.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
margin-top:20px;
`
export const CloseButton = style.button`
border:none;
background-color:transparent;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
cursor:pointer;
padding:0px;
`
