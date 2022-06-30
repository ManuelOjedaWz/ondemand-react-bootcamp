import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Title } from '../styles/global'

export default function NotFound () {
  return (
    <section>
      <Title>
        Not found
      </Title>

      <p>
        Should not be here, let me take you back!
      </p>

      <Link to="/">
        <Button>Go back</Button>
      </Link>
    </section>
  )
}
