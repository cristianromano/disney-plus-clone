import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
           <BackGround>
               <img src='https://img.ecartelera.com/noticias/47600/47656-m.jpg' alt='bao-merengue'></img>
           </BackGround>
           <Title>
               <img src='/images/logo-bao.png' alt='logo-bao'/>
           </Title>
           <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' alt='play-icon'/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src='/images/play-icon-white.png' alt='play-icon-white'/>
            <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='/images/group-icon.png' alt='group-icon'/>
            </GroupWatchButton>
           </Controls>
           <SubTitle>
                2018 · 7m · Family , Fantasy , Kids
           </SubTitle>
           <Description>
                ZYZZZ BRAAAAAHHH
           </Description>
        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const BackGround = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    bottom: -1;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Title = styled.div`
height: 30vh;
width: 35vw;
min-height: 170px;
min-width: 200px;

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}


`

const Controls = styled.div`
display: flex;
align-items: center;

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    padding: 0 24px;
    margin-right: 22px;
    align-items: center;
    height: 56px;
    background-color: rgb(249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    
    &:hover{
        background:rgb(198,198,198);
    }
`


const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border: 1px solid rgba(249,249,249);
    color: rgba(249,249,249);
    text-transform: uppercase;
`


const AddButton = styled.button`
height: 44px;
width: 44px;
margin-right: 16px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0,0,0,0.6); ;
cursor: pointer;

span{
    font-size: 30px;
    color:white;
}

`

const GroupWatchButton = styled(AddButton)`
background-color: rgb(0,0,0);

`

const SubTitle = styled.div`
color: rgba(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgba(249,249,249);

`