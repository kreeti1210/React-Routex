import React, { use } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { id}=useParams()
  return (
    <div>User: {id}</div>
  )
}

export default User