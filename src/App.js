import {createGlobalStyle} from 'styled-components'
import Todotemplate from './components/todmTemplate';


const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`
function App() {
  return (
      <>
      <GlobalStyle/>  
      <Todotemplate>TodoList</Todotemplate>
      </>
  );
}

export default App;
