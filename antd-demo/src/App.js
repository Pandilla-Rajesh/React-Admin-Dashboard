import { Button } from 'antd';
import './App.css';
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import ButtonCom from './Components/ButtonCom';
import InputCom from './Components/InputCom';
import AntCols from './Components/AntCols';
import ParentComp from './Components/ParentComp';
import UseSelector from './Components/UseSelector';
import Home from './Pages/Home/Home';

function App() {

  return(
    <>
      {/* <ButtonCom/>
      <InputCom/>
      <AntCols/>
      <ParentComp/>
      <UseSelector/> */}
      <Home/>
    </>
  )

}

export default App;
