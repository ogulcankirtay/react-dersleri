import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Product name="Laptop" price="$999" />
        <Product name="Phone" price="$499" />
        <Product name="Tablet" price="$299" />
      </Container>
    </>
  )
}

export default App
