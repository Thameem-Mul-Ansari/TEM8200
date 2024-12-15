import React, { useState } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { GestureCar } from './pages/GestureCar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import GestureMath from './pages/GestureMath';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setSelectedGroup(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
        {/* React Hot Toast for notifications */}
        <Toaster position="top-right" reverseOrder={false} />

        {isAuthenticated && <Header onSignOut={handleSignOut} />}

        <div className="flex-grow">
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/home" replace />
                ) : (
                  <SignIn onSignInSuccess={() => setIsAuthenticated(true)} />
                )
              }
            />

            {/* Home Page */}
            <Route
              path="/home"
              element={
                isAuthenticated ? (
                  selectedGroup === null ? (
                    <HomePage onSelectAgeGroup={setSelectedGroup} />
                  ) : (
                    <GamesPage
                      ageGroup={selectedGroup}
                      onBack={() => setSelectedGroup(null)}
                    />
                  )
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Authentication Pages */}
            <Route
              path="/signin"
              element={<SignIn onSignInSuccess={() => setIsAuthenticated(true)} />}
            />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected Game Routes */}
            <Route
              path="/gesture-car"
              element={
                isAuthenticated ? <GestureCar /> : <Navigate to="/" replace />
              }
            />

            <Route
              path="/gesture-math"
              element={
                isAuthenticated ? <GestureMath /> : <Navigate to="/" replace />
              }
            />
          </Routes>
        </div>

        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;