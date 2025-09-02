import React, { useState, useEffect } from "react";
import { FaLock, FaLockOpen, FaExclamationCircle, FaDoorClosed, FaDoorOpen, FaClock, FaSignOutAlt, FaFlask } from "react-icons/fa";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins = 600 seconds
  const [showAnimation, setShowAnimation] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);

  const correctPassword = "hairscope123"; // Hardcoded password

  // Timer effect
  useEffect(() => {
    let timer;
    if (isLoggedIn && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleExit(); // Auto exit when time is up
    }
    return () => clearInterval(timer);
  }, [isLoggedIn, timeLeft]);

  const handleLogin = () => {
    if (password === correctPassword) {
      setError("");
      setShowAnimation(true);

      // Play lock + door animation, then go inside lab
      setTimeout(() => {
        setDoorsOpen(true);
        setTimeout(() => {
          setIsLoggedIn(true);
        }, 2000); // wait for doors to fully open
      }, 2000); // wait for lock rotation
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  const handleExit = () => {
    setIsLoggedIn(false);
    setShowAnimation(false);
    setDoorsOpen(false);
    setPassword("");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login-container">
          <h1><FaLock /> Lab Access</h1>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>
            <FaLockOpen style={{ marginRight: "6px" }} /> Enter
          </button>

          {error && (
            <p className="error">
              <FaExclamationCircle style={{ color: "red", marginRight: "6px" }} />
              {error}
            </p>
          )}

          {/* Lock Animation */}
          {showAnimation && (
            <div className="lock-animation">
              <FaLock size={40} />
            </div>
          )}

          {/* Doors */}
          {showAnimation && (
            <div className="doors">
              <div className={`door door-left ${doorsOpen ? "open" : ""}`}>
                <FaDoorClosed size={50} />
              </div>
              <div className={`door door-right ${doorsOpen ? "open" : ""}`}>
                <FaDoorOpen size={50} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="lab-screen">
          <h1>
            Welcome to the Lab <FaFlask />
          </h1>
          <p className="timer">
            <FaClock style={{ marginRight: "6px" }} />
            Time Remaining: {formatTime(timeLeft)}
          </p>
          <button className="exit-btn" onClick={handleExit}>
            <FaSignOutAlt style={{ marginRight: "6px" }} /> Exit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
