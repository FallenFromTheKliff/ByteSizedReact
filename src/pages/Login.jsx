import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");
  const [loginError, setLoginError] = useState("");
  
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
    <div className="flex flex-1 flex-col w-full items-center bg-linear-to-t from-indigo-50 via-indigo-600 to-sky-500">
      {isLoggedIn ? (
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-3xl text-indigo-50 font-painter font-bold">Welcome back,</h1>
           <h1 className="text-9xl text-indigo-50 font-painter font-bold">{username}!</h1>
          <button
            onClick={handleLogout}
            className="cursor-pointer rounded-lg px-8 py-4 w-lg text-gray-700 text-3xl font-painter font-bold bg-indigo-200 hover:bg-indigo-300 duration-300 mt-16"
          >
            LOGOUT
          </button>
          <h2 className="text-lg text-indigo-50 font-painter font-bold mt-4">There's not much here, feel free to leave!</h2>
        </div>
      ) : (
        <form className="flex flex-col rounded-lg border items-center border-gray-300 bg-white w-lg h-165 mt-16">
          <h1 className="text-5xl text-indigo-500 font-painter font-bold mt-12">
            Login Authentication
          </h1>
          <h2 className="text-xl text-gray-500 font-painter font-bold mt-4">
            Activity 2
          </h2>
          <div className="flex flex-1 flex-col justify-center w-md">
            <div className="h-28">
              <h3 className="text-xl text-gray-600 font-painter font-bold mb-2">Username:</h3>
              <input 
                type="text"
                placeholder="Enter your username here!"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-4 placeholder:font-painter placeholder:text-gray-400 rounded-lg border border-indigo-500"
              />
              {userError && <p className="text-sm text-red-600 font-painter mt-2">{userError}</p>}
            </div>
            <div className="h-28 mt-4">
              <h3 className="text-xl text-gray-600 font-painter font-bold mb-2">Password:</h3>
              <input 
                type="password"
                placeholder="Enter your password here!"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 placeholder:font-painter placeholder:text-gray-400 rounded-lg border border-indigo-500"
              />
              {passError && <p className="text-sm text-red-600 font-painter mt-2">{passError}</p>}
            </div>
            <button
              onClick={handleLogin}
              className="cursor-pointer rounded-lg px-8 py-4 text-white text-2xl font-painter font-bold bg-indigo-500 hover:bg-indigo-700 duration-300 mt-8"
            >
              LOGIN
            </button>
            <div className="h-6 mt-2">
              {loginError && <p className="text-center text-red-600 font-painter">{loginError}</p>}
            </div>
          </div>
          <h2 className="text-lg text-gray-400 font-painter font-bold mb-8">try "bytebros" and "BYTEBROS1234" for the credentials -jers</h2>
        </form>
      )}
    </div>
  )
}