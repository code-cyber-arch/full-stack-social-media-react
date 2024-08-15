import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/profile";
import SavedPostPages from "./pages/SavedPostPages";
import NotificationPage from "./pages/NotificationPage";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Navigate to="/profile/posts" replace />}
          />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/saved" element={<SavedPostPages />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
