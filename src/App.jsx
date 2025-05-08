import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import SearchResultPage from './pages/SearchResultPage'
import SharedTravelPlanPage from './pages/SharedTravelPlanPage'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResultPage />} />
        {/* <Route path="/destination/:id" element={<DestinationDetail />} /> */}
        {/* <Route path="/create-plan" element={<CreatePlan />} /> */}
        <Route path="/featured" element={<SharedTravelPlanPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
