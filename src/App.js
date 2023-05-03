import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Todotemplate from './components/todmTemplate';
import TodoHeaded from './components/todoHead';
import TodoList from './components/todoList';


const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`
function App() {
  return (
      <>
      <GlobalStyle/>  
      
      <Todotemplate>
        <TodoHeaded/>
        <TodoList/>
        
      </Todotemplate>
      </>
  );
}

export default App;
