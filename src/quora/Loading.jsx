import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {

  const [count, setCount] = useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1)
    }, 10)

    count === 0 && navigate('/login');

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div></div>
  )
}

export default Loading