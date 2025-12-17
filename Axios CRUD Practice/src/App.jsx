import React, { use, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const baseUrl = 'https://dummyjson.com'
  const getAllUsers = async () => {

    await axios.get(baseUrl + '/users').then((response) => {
      console.log(response.data.users)
    })

  }
  const getUserById = async (id) => {

    await axios.get(baseUrl + '/users/' + id).then((response) => {
      console.log(response.data.firstName + " " + response.data.lastName)
    })
  }

  const saveUser = async () => {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      email: "johnhoj@mail.com"
    }

    await axios.post(baseUrl + "/users/add", userData).then((response) => {
      console.log("User saved with ID: " + response.data.id)

    })
  }
  useEffect(() => {
    //getAllUsers()
    // getUserById(5)
    saveUser()
  }, [])
  return (
    <>
      <div>Axios</div>
    </>
  )
}

export default App
