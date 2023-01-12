import React from 'react'
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Header() {
  return (
   <Wrapper>
   <LogoWrapper>
    
      <Menu>
        <MenuIcon/>
      </Menu>
      
    <Logo>
    <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png'/>
    </Logo>

   </LogoWrapper>

   <SearchWrapper>
    <SearchBarWrapper>
      <SearchIcon/>
      <input type="text" placeholder='search mail'/>
      <ExpandMoreIcon/>

    </SearchBarWrapper>

   </SearchWrapper>

   <IconsWrapper>
    <HelpIcon/>
    <SettingsIcon/>
    <AppsIcon/>
    <AccountCircleIcon/>

   </IconsWrapper>

   </Wrapper>
  )
}

export default Header

const Wrapper= styled.div`   
display:grid;
grid-template-columns: 270px auto 170px;
border-bottom: 1px solid lightgray;
height: 70px;
align-items:center;`
//using styled components to define the custom wraooers for styling and avoid creating classes



const LogoWrapper= styled.div`

display:grid;
height:45px;
grid-template-columns:25% auto;

`
const Menu=styled.div` 
display:grid;
place-items:center;
`
//setting up the menu icon in the center of the grid-column
const Logo= styled.div`
display:flex;
height:45px;`

const SearchWrapper= styled.div`

`

const SearchBarWrapper= styled.div`
background-color:#f1f3f4;
width:750px;
display:grid;
grid-template-columns:10% auto 7%;
place-items:center;
height:45px;
border-radius:6px;

.MuiSvgIcon-root{
  color:#5f6368
  
}
// coloring the search icon
input{
  width:100%;
  height:30px;
  background:none;
  border:none;
  font-size:18px;
  :focus{
    outline:none;
  }
}
`
const IconsWrapper= styled.div`
display:grid;
grid-template-columns:repeat(4,auto);

.MuiSvgIcon-root{
  color:#5f6368;
}
`