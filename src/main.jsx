import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  
  Routes
} from 'react-router-dom';
import AboutUs from './Component/AboutUs.jsx';
import Layout from './Layout.jsx';
import Contact from './Component/Contact.jsx';
import ProjectVideo from './Component/ProjectVideo.jsx';

const basename = process.env.PUBLIC_URL;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Router basename={basename}>
        <Routes>
          <Route path='' element={<Layout />} >
             <Route path='/' element={<App />} />
             <Route path='/about' element={<AboutUs />} />
             <Route path='/contact' element={<Contact />} />
             <Route path='/video' element={<ProjectVideo />} />
          </Route>
        </Routes>
      </Router>
   
  </React.StrictMode>,
)
