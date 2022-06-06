import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText >
        <h1>{title}</h1>
        <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
               {leftBtnText}
            </LeftButton>
            { rightBtnText &&

            <RightButton>
                {rightBtnText}
            </RightButton>
            }
        </ButtonGroup>
            <DownArrow src='./images/down-arrow.svg'/>
            </Buttons>
        
    </Wrap>
  )
}

export default Section
const Wrap=styled.div`
display:flex;
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
backgorund-image:url('./images/model-s.jpg');
flex-direction:column;
justify-content:space-between; //Vertical alignment
align-items:center; //horizontal alignment
background-image :${props=>`url("./images/${props.bgImage}")`};

`
const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
// flex-direction:column;
@media (max-width:768px){
  flex-direction:column;
}
margin-bottom:30px;
`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:14px;
cursor:pointer;
margin:8px;

`
const RightButton=styled(LeftButton)`
background:white;
color:black;
opacity:0.65;
`
const DownArrow =styled.img`

height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s
`
const Buttons=styled.div`

`
