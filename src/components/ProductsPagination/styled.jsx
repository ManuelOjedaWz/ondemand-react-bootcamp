import styled from 'styled-components'

export const ProductsPaginationWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

export const ProductsPaginationButton = styled.button`
  border: none;
  padding: .8rem;
  margin: 3px;
  color: white;
  font-weight: bold;
  background-color: ${props => props.active ? '#575757' : '#14b2df'};
  transition: all ease .2s;

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
