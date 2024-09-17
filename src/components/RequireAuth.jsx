import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function RequireAuth({children, login}) {
    const navigate=useNavigate();
  return (
    <div>
        {login ? children : <Navigate to="/login"/>}
    </div>
  )
}

export default RequireAuth