import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import SideIcons from "../SideIcons";
import EmailsView from "../EmailsView"

export default function Main() {
  return (
    <Wrapper>
        <Sidebar/>
        <EmailsView/>
        <SideIcons/>

    </Wrapper>
  )
}

const Wrapper=styled.div`
display:grid;
grid-template-columns:270px auto 50px;
`
