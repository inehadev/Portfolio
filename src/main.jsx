import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import {BrowserRouter} from "react-router-dom"


const styles = {
  global:(props)=>({
    body: {
      color:mode('gray.800' , 'whiteAlpha.900')(props),
      bg:mode('gray.100' , '#101010')(props)
    }
  })
};


const config = {
  initialColorMode:"dark",
  useSystemColorMode:true
}

const color={
  gray:{
    dark:"#1e1e1e",
    light:"#616161"
  }
}

const theme = extendTheme ({config , styles, color})

ReactDOM.render(
  <React.StrictMode>
  
    <ChakraProvider theme ={theme}>
      <App />
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
