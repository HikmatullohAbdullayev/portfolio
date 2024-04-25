
import { Route,  Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'
import Home from './page/Home'
import Project from './page/Project'
import ProjectDetail from './page/ProjectDetail'
import { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [dark, setDark] = useState(false);

  const themeMode = () => {
    setDark(!dark);
  };

  return (
    <>
      <ThemeContext.Provider value={{ dark, setDark, themeMode }}>
      <Routes >
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/project' element={<Project/>} />
        <Route path='/project/:id'  element={<ProjectDetail/>}/>


    <Route path='*' element={<h1>sahifa yo`q</h1>}/>
    </Route>
     
      </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
