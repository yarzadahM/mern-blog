import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const router=createBrowserRouter([
  {path:'/', element:<Home/>}, 
  {path:'/about', element:<About/>}, 
  {path:'/dashboard', element:<Dashboard/>}, 
  {path:'/signin', element:<Signin/>}, 
  {path:'/signup', element:<Signup/>}, 
  
 ]);
export default function App() {
  return (
  <RouterProvider router={router}/>
  )
}