import { useEffect, useState } from 'react'
import { Generator } from './Components/Generator'
import { Loader } from './Components/Loader'


function App() {
  const [flag, setflag] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setflag((prev) => !prev);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
    { flag?<Generator/>:<Loader/>}
    
    </>
  )
}

export default App
