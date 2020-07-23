import styled from "styled-components"
import { device } from "styles/mediaQuery"

export const Content = styled.div`
  /* box-shadow: var(--shadow-xs); */
  padding: 1em;
  border-radius: 10px;
  width: 100%;
  min-height: 300px;
  background: var(--lightCleanBlack);

  @media ${device.tablet} {
    p {
      line-height: 2em;
      color: var(--dirty-white);
      opacity: 0.9;
    }
  }

  @media ${device.laptop} {
    min-height: 500px;
  }
`
export const ContentNav = styled.ul`
  display: grid;
  grid-auto-flow: row;
  margin-bottom: var(--space-md);

  button {
    font-weight: 500;
    cursor: pointer;
    z-index: 777;
    background-color: transparent;
    border: none;
    outline: none;
    width: 80%;
    color: var(--main-white);
    text-align: start;
    padding-left: var(--space-md);
    height: 40px;
    margin: var(--space-xs) 0;
    border-bottom: 2px solid var(--main-white);
  }

  @media ${device.tablet} {
    grid-auto-flow: column;
    list-style-type: none;
    margin: var(--space-md) 0 var(--space-xl) 0;

    button {
      font-size: var(--font-4);
      font-weight: 400;
    }
  }

  .false {
    opacity: 0.4;
    font-weight: 400;
    border-bottom: none;
  }

  .true {
    opacity: 1;
  }
`
export const About = styled.p`
  padding: 0 var(--space-xs);

  @media ${device.tablet} {
    padding: 0 var(--space-xl);
  }
`
export const Comments = styled.div``

export const Notes = styled.p`
  padding: 0 var(--space-xs);

  @media ${device.tablet} {
    padding: 0 var(--space-xl);
  }
`

export const Comment = styled.div`
  padding: var(--space-md);
  background-color: var(--darkCleanBlack);
  border-radius: 10px;
  border: 4px solid var(--cleanBlack);
  box-shadow: var(--shadow-xs);
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
`

export const Text = styled.p``

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  background-color: var(--cleanBlack);
  border-radius: 10px;
  place-content: center;
  align-items: center;
  margin-bottom: var(--space-md);
  padding: var(--space-xs);
`

export const Date = styled.p`
  margin: 0 0 0 auto;
  letter-spacing: 2px;
`

export const Role = styled.p`
  margin: 0;
`

export const Name = styled.p`
  margin: 0;
  color: var(--orange) !important;
  font-weight: 500;
`
export const Actions = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: grid;
  grid-auto-flow: column;

  button {
    width: 90px;
    background-color: var(--darkCleanBlack);
    border: none;
    box-shadow: var(--shadow-xs);
    color: var(--main-white);
    cursor: pointer;
    transition: box-shadow 50ms ease-in;
    border-radius: 5px;

    &:hover {
      box-shadow: var(--shadow-xs-inset);
    }
  }
`

export const NewComment = styled.div`
  padding: var(--space-md);
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;

  input {
    padding: var(--space-md);
    background-color: var(--darkCleanBlack);
    border-radius: 10px;
    border: 4px solid var(--cleanBlack);
    box-shadow: var(--shadow-xs);
    color: var(--main-white);
    outline: none;
    transition: box-shadow 50ms ease-in-out;

    &:active,
    &:hover {
      box-shadow: var(--shadow-xl);
    }
  }

  div {
    display: grid;
    grid-auto-flow: column;
    place-content: space-between;
    padding: var(--space-md) var(--space-xs);

    button {
      width: 120px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      transition: box-shadow 50ms ease-in;
      border-radius: 5px;
    }

    button:first-of-type {
      background-color: var(--cleanBlack);
      color: var(--dirty-white);
      border: 1px solid var(--dirty-white);
    }

    button:last-of-type {
      background-color: var(--orange);
      color: var(--dirty-white);
    }
  }
`