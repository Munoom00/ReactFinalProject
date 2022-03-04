import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import { BrowserRouter as Router, Switch as Switching, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Switch from '@material-ui/core/Switch';
import { IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useState, useEffect } from 'react'


function App() {

  const [theme,setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)

  const themtToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    } else{
      setTheme('light-theme')
      setChecked(true)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  },[theme])

  return (
    <div className="App">
      <Sidebar  />
      <MainContentStyled className="main-content">

        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              Value=""
              checked={checked}
              inputProps={{'arial-label':''}}
              size="medium"
              onClick={themtToggler}
            />  
          </div>
        </div>

        <Switching>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/about" exact><AboutPage /></Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`

export default App;
