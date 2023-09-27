import React from 'react'
import {useEffect} from 'react'

const Fetching = () => {
    const [data, setdata] = useState(null)
    const fetchData= () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=20&_end=30')
        
        console.log({response})
        setdata(data)
    }
    useEffect(() => {
      fetchData();
    }, [])
    
  return (
    <div>Fetching</div>
  )
}

export default Fetching