import styled from 'styled-components'

export const CheckoutGridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 5rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;    
  }
`

export const CheckoutGridTable = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  border: 1px solid black;

  th, td {
    padding: 1rem;
    border: 1px solid black;
  }
`

export const CheckoutGridForm = styled.form`
  label {
    font-weight: bold;
    display: block;
    width: 100%;
    margin-bottom: .3rem;
  }

  input {
    width: 100%;
  }

  div {
    margin-bottom: 15px;
  }
`
