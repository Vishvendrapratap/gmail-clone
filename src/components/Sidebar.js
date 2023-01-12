import React from 'react';
import styled from 'styled-components';
import Compose from './buttons/Compose';
import { sideBarButtonItems } from '../data/sideBarButtonItems';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { bottomicons} from '../data/BottonIconsData'
function Sidebar() {
  return (
    <Wrapper>
        <TopSectionWrapper>
        <ComposeWrapper>
            <Compose/>

        </ComposeWrapper>

        <SideButtonWrapper>
            {
                sideBarButtonItems.map(item=>(
                    <SideBarButtonItem> {item.icon} {item.text}</SideBarButtonItem>
                ))
            }

        </SideButtonWrapper>
        </TopSectionWrapper>

        <SideBarSectionwrapper>
            <Title>
                Meet
            </Title>
            <p>
                <VideoChatIcon/>New Meeting
            </p>
            <p>
                <KeyboardIcon/>Join Meeting
            </p>
        

        </SideBarSectionwrapper>
        <BottomSectionWrapper>
        <SideBarSectionwrapper>
            <Title>Hangouts</Title>
            <p>
                <AccountCircleIcon/>
                David John

            </p>
        </SideBarSectionwrapper>

        

        <BottomIconsWrapper>

            {
                bottomicons.map(items=>(
                    <>
                    {items}</>
                ))
            }

        </BottomIconsWrapper>
        <HangoutsWrapper>

        </HangoutsWrapper>
        </BottomSectionWrapper>

    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
border-right: 3px solid lightgray;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const ComposeWrapper=styled.div`
display:grid;
place-items:start;
padding:10px 20px;
`
const SideButtonWrapper= styled.div``
const SideBarSectionwrapper=styled.div`

border-top: 1px solid lightgray;
p{
  color:gray;
  display:grid;
  grid-template-columns:  14% auto;
  padding-left:30px;
  border-radius:0 100px 100px 0;
  cursor:pointer;
  margin-right:8px;
  height:30px;
  align-items:center;
}
:hover{
    background-color:#f5f7f7
}`
const HangoutsWrapper=styled.div``
const BottomIconsWrapper=styled.div``
const SideBarButtonItem=styled.div`
display:grid;
grid-template-columns:14% auto;
color:gray;
padding:5px 25px;
border-radius:0 100px 100px 0;
cursor:pointer;
margin-right:8px;
:hover{
    background-color:#f5f7f7
 }
`
const Title= styled.h4`
padding-left: 30px;
margin-bottom: 3px;
margin-top:6px;`

const BottomSectionWrapper=styled.div``;
const TopSectionWrapper=styled.div``;