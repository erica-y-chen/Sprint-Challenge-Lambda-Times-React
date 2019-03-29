import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  &.h1{
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
`

const Span = styled.div`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  &.date{
    margin-left: 25px;
    flex: 1;
  }

  &.temp {
    text-align: right;
    margin-right: 25px;
    flex: 1;
  }
`

const Header = () => {
  return (
    <HeaderStyle>
      <Span className="date">MARCH 32, 2018</Span>
      <HeaderStyle className="h1">Lambda Times</HeaderStyle>
      <Span className="temp">98°</Span>
    </HeaderStyle>
  )
}

export default Header



// const HeaderStyle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
//   background-color: #fff;
//   border-bottom: 1px solid lightgrey;
//   width: 100%;
//   height: 120px;
//   margin-top: 44px;
//   padding-bottom: 15px;

//   &.span{
//     align-self: flex-end;
//     font-size: 11px;
//     font-weight: bold;
//     letter-spacing: 1px;
//     margin-left: 25px;
//     flex: 1;
//   }

//   &.Name{
//     font-size: 60px;
//     font-family: Didot, serif;
//     font-weight: bold;
//     flex: 8;
//     text-align: center;
//     color: #000;
//   }

//   &.temp{
//     text-align: right;
//     margin-right: 25px;
//     flex: 1;
//   }
// `