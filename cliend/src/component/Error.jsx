import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className='error'>
      <h1 className="text-center display-1">404 Error Page Not found</h1>
      <button onClick={()=> navigate('/admin/dashboard')}>Back to Home</button>
    </div>
  )
}
export default Error
