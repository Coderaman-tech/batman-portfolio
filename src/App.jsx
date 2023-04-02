import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout'
import Loader from './components/Loader'
import Navbar from './Navbar'
function App(){ 
  const [loading,setLoading] = useState(true);

  useEffect(function(){
    setTimeout(function(){
     setLoading(false)
    },5000)
  },[])

  return(
   <div>
      {
        loading === true ? <Loader/>:
        <Layout>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/> */}
          </Routes>
        </Layout>
      }
   </div>
  )
} 

export default App
