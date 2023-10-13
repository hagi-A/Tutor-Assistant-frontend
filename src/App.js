import React from 'react'
import './App.css'
// import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/home/Home'
import About from './components/pages/about/About'
import FindTutor from './components/pages/findtutor/FIndTutor'
import BecomeTutor from './components/pages/becometutor/BecomeTutor'
import Price from './components/pages/pricing/Price'

import Login from './components/sign/Login'
import Signup from './components/sign/Signup'
// import AdminLogin from './components/sign/AdminLogin'
// import { useAuthContext } from './hooks/useAuthContext'
// import Loading from './components/state/Loading'
import Footer from './components/common/footer/footer'
// import ProtectedRoute from '../src/utils/ProtectedRoute'// Import the ProtectedRoute component
// import AdminPage from './components/admin/AdminPage'
import ParentPage from './components/pages/parent/ParentPage'
import StudentPage from './components/student/StudentPage'
import SupervisorPage from './components/pages/supervisor/SupervisorPage'
import TutorPage from './components/tutor/TutorPage'
import RegistrationPage from './components/tutor/tutorRegister/RegistrationPage'
import ContactUs from './components/common/footer/ContactUs'
import TutorRegistration from './components/tutor/tutorRegister/TutorRegistration'
// import Main from './components/admin/Main'

const App = () => {
  // const { user } = useAuthContext()

  return (
    
      <>
      <BrowserRouter>
      {/* <Loading/> */}
        <Routes>
          {/* <Route  path="/" element={user ? <Home/> : <Navigate to = "/login"/>} /> */}
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/findTutor" element={<FindTutor/>} />
          <Route  path="/becomeTutor" element={<BecomeTutor/>} />
          <Route  path="/pricing" element={<Price/>} />
          <Route  path="/contactUs" element={<ContactUs />} />
          {/* <Route  path="/login" element={!user ? <Login/> : <Navigate to= "/"/>} />
          <Route  path="/signup" element={!user ? <Signup/> : <Navigate to = "/"/>} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/AdminLogin" element={<AdminLogin />} /> */}

          {/* <Route  path="/admin" element={<AdminPage/>} /> */}
          <Route  path="/parent" element={<ParentPage/>} />
          <Route  path="/student" element={<StudentPage/>} />
          <Route  path="/tutor" element={<TutorPage/>} />
          <Route  path="/supervisor" element={<SupervisorPage/>} />

          <Route  path="/tutorRegistration" element={<TutorRegistration />} />

          {/* <Route path='/admin' element={<App />} />
                <Route index element={<Main />} />  */}
            


        {/* <Route path='/admin' element={<ProtectedRoute/>}/> */}


        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
        
      </>
   
  )
}

export default App;