import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [usererror, setUserError] = useState("");
  const [passerror, setPassError] = useState("");
  const [loginerror, setLoginError] = useState("");
  
  const handleLogin = (iwantitthatway) => {
    iwantitthatway.preventDefault();
    const validdd = username === "bytebros" && password === "BYTEBROS1234";
    
    setUserError("");
    setPassError("");
    setLoginError("");

    if (!username && !password) {
      setLoginError("Please enter a username and password!");
    } else if (!username) {
      setUserError("Please enter your username!");
    } else if (!password) {
      setPassError("Please enter your password!");
    } else if (username && password && !validdd) {
      setLoginError("Invalid username or password!");
    } else {
      setIsLoggedIn(true);
      setUserError("");
      setPassError("");
      setLoginError("");
    }
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  }

  return (
    <div className="flex flex-1 flex-col w-full items-center bg-linear-0 from-sky-500 to-indigo-50">
      {isLoggedIn ? (
        <div className="flex flex-col items-center gap-4 mt-16">
          <h1 className="text-4xl text-sky-600 font-retro font-bold">Welcome back,</h1>
           <h1 className="text-8xl text-sky-600 font-retro font-bold">{username}!</h1>
          <button
            onClick={handleLogout}
            className="inline-block rounded-lg px-8 py-4 w-lg text-center text-white text-xl bg-sky-600 font-bold hover:bg-sky-800 duration-300 mt-16"
          >
            LOGOUT
          </button>
          <h2 className="text-sm text-gray-800 font-retro font-bold italic">There's not much here, feel free to leave!</h2>
        </div>
      ) : (
        <form className="flex flex-col rounded-lg border items-center justify-center border-gray-300 bg-white w-lg h-175 gap-8 mt-16">
          <h1 className="text-4xl text-gray-800 font-bold mt-12">
            Sign In
          </h1>
          <div className="flex flex-1 flex-col justify-center w-md gap-2">
            <div className="h-28">
              <h3 className="mb-2">Username</h3>
              <input 
                type="text"
                placeholder="Enter your username here!"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-2 px-4 py-4 rounded-lg"
              />
              {usererror && <p className="text-xs text-red-600 italic mt-2">{usererror}</p>}
            </div>
            <div className="h-28">
              <h3 className="mb-2">Password</h3>
              <input 
                type="password"
                placeholder="Enter your password here!"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 px-4 py-4 rounded-lg"
              />
              {passerror && <p className="text-xs text-red-600 italic mt-2">{passerror}</p>}
            </div>
            <button
              onClick={handleLogin}
              className="inline-block rounded-lg px-8 py-4 w-md text-center text-white text-xl bg-sky-600 font-bold hover:bg-sky-800 duration-300 mt-12"
            >
              SIGN IN
            </button>
            <div className="h-6 mt-2">
              {loginerror && <p className="text-sm text-center text-red-600 italic">{loginerror}</p>}
            </div>
          </div>
          <h2 className="text-sm text-gray-400 font-bold mb-12">TIP: Try "bytebros" and "BYTEBROS1234" for the credentials!</h2>
        </form>
      )}
    </div>
  )
}