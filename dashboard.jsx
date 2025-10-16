import React from 'react'import { useContext } from 'react'
import { userDetails } from '../App'

function DashBoard() {
 const user=useContext(userDetails)
  return (
   <h1>hello {user}</h1>
  )
}

export default DashBoard