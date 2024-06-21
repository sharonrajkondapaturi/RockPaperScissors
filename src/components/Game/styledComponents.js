import style from 'styled-components'

export const GameContainer = style.div`
display:flex;
flex-direction:column;
justify-content:space-between;
background-color:#223a5f;
min-height:100vh;
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
@media screen and (max-width:767px){
min-width:400px;
max-width:400px;
}
@media screen and (max-width:600px){
min-width:350px;
max-width:350px;
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
`
export const WeaponImage = style.div`
min-width:${props => props.width}px;
max-width:${props => props.width}px;
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
`
export const ScoreHead = style.p`
font-size:${props => props.fontsize}px;
font-family:${props => props.fontfamily};
margin:5px;
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
`
export const Trigger = style.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
margin-top:20px;
`
export const CenterContainer = style.div`
display:flex;
flex-direction:column;
align-items:center;
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
