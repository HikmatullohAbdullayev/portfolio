
import { Route,  Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  

  return (
    <>
      <Routes >
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/project' element={<Projects/>} />
        <Route path='project:id'  element={<ProjectDetail/>}/>


    <Route path='*' element={<h1>sahifa yo`q</h1>}/>
    </Route>
     
      </Routes>
    </>
  )
}

export default App
