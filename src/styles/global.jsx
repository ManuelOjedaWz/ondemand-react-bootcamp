import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  margin: 3px;
  color: white;
  font-weight: bold;
  background-color: ${props => props.active ? '#575757' : '#14b2df'};
  transition: all ease .2s;
  max-width: 250px;

  &:hover {
    cursor: pointer;
    background-color: #0b6a85;
  }

  &:disabled {
    &:hover {
      cursor: not-allowed;
    }
    opacity: 0.2;
  }
`

export const Input = styled.input`
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 8rem;
  height: 2rem;
`

export const TextArea = styled.textarea`
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid black;
  border-spacing: initial;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
  td, th {
    padding: 1rem;
    border: 1px solid black;
  }

  img {
    max-width: 100px;
  }
`

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const Subtitle = styled.h3`
  margin-bottom: 1rem;
  margin-top: 0;
`
