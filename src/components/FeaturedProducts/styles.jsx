import styled from 'styled-components'

export const ProductItemWrapper = styled.div`
  span {
    font-weight: bold;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
`

export const ProductItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`

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
`
