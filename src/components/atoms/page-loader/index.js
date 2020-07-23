import React from "react"
import styled from "styled-components"
import Spinner from "react-spinkit"
/* https://github.com/KyleAMathews/react-spinkit */

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -40px 0 0 -40px;
  z-index: 999;

  .cube {
    width: 75px;
    height: 75px;
    /* border: 1px solid #f25f4c; */
    background: var(--lightCleanBlack);

    div {
      &:before {
        background-color: azure;
        width: 90%;
        height: 90%;
      }
    }
  }
`

const SpinnerStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid var(--main-white);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`

export const PageLoader = () => (
  <SpinnerWrapper>
    <Spinner name="folding-cube" color="var(--main-white)" className="cube" />
    {/* <SpinnerStyled>
      <div></div>
      <div></div>
    </SpinnerStyled> */}
  </SpinnerWrapper>
)