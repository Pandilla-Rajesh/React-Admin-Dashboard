import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Approutes from './Approutes';
import { useEffect } from 'react';


function App() {

useEffect(()=>{

  document.body.classList.add('p-top')

  return()=>{
    document.body.classList.remove('p-top')
  }

},[])

  return (
      <>

      <Outlet/>
      <Approutes/>
      </>
  );
}

export default App;
