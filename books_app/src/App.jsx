import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { books } from './data.jsx'
import Books from './components/books.jsx'
function App() {


  return (
    <>

      <Header />
      <div className='books-list'> {
        books?.map((book) =>
        (
          <Books key={book.id} book={book} />
        ))
      }</div>
    </>
  )
}
export default App
