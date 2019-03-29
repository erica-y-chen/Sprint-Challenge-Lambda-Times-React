import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Topbar= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const Span = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  &.span{
    cursor: pointer;
    margin-right: 5%;
  }
`
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  &.span{
    cursor: pointer; 
  }
`


const TopBar = () => {
  return (
    <Topbar>
      <Container>
        <ContainerLeft>
          <Span>TOPICS</Span><Span>SEARCH</Span>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenter className="span">GENERAL</ContainerCenter><ContainerCenter className="span">BROWNBAG</ContainerCenter><ContainerCenter className="span">RANDOM</ContainerCenter><ContainerCenter className="span">MUSIC</ContainerCenter><ContainerCenter className="span">ANNOUNCEMENTS</ContainerCenter>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRight className="span">LOG IN</ContainerRight>
        </ContainerRight>
      </Container>
    </Topbar>
  )
}

export default TopBar;