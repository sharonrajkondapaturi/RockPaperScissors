import style from 'styled-components'

export const WeaponList = style.li`
list-style:none;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`

export const Name = style.p`
color:#ffffff;
font-family:Roboto;
font-weight:bold;
font-size:22px;
`
export const Image = style.img`
height:150px;
width:150px;
@media screen and (max-width:375px){
width:100px;
height:100px;
}
`
export const Result = style.p`
color:#ffffff;
font-family:Roboto;
font-weight:bold;
text-align:center;
font-size:24px;
font-family:Roboto
`
export const AgainButton = style.button`
width:150px;
padding:8px;
border:none;
border-radius:10px;
font-size:18px;
cursor:pointer;
font-family:Roboto;
`
export const SmallContainer = style.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-right:20px;
`
