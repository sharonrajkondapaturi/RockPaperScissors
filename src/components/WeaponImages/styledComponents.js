import style from 'styled-components'

export const WeaponList = style.li`
list-style:none;
margin-right:50px;
`

export const Image = style.img`
height:150px;
width:150px;
cursor:pointer;
@media screen and (max-width:375px){
height:100px;
width:100px;
cursor:pointer;  
}
`

export const WeaponButton = style.button`
border:none;
background-color:transparent;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
