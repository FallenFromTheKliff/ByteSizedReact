import { useState } from "react";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleCheck(event) {
    event.preventDefault();

    if (password.trim() === "") {
      setError("Please enter a password.");
      setResult(null);
      return;
    }

    const len = password.length;
    let status = "";
    let message = "";
    let statusColor = "";
    let boxTheme = "";

    if (len < 6) {
      status = "Weak Password";
      message = "Status: Weak – Create a stronger password.";
      statusColor = "text-red-600";
      boxTheme = "border-red-200 bg-red-50";
    } else if (len <= 9) {
      status = "Medium Password";
      message = "Status: Weak – Create a stronger password.";
      statusColor = "text-amber-600";
      boxTheme = "border-amber-200 bg-amber-50";
    } else {
      status = "Strong Password";
      message = "Status: Strong – You can use this password.";
      statusColor = "text-emerald-600";
      boxTheme = "border-emerald-200 bg-emerald-50";
    }

    setResult({ status, message, statusColor, boxTheme });
    setError("");
  }

  function handleClear() {
    setPassword("");
    setResult(null);
    setError("");
  }

  return (
    <div className="flex flex-1 w-full items-start justify-center bg-[#eef3ff] px-4 py-16">
      <section className="w-full max-w-lg overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
        
     
        <div className="bg-[#1f2b3d] px-8 py-8 text-white">
          <h1 className="font-retro text-3xl font-bold">Password Strength Checker</h1>
          <p className="mt-2 font-retro text-lg">Activity 3</p>
        </div>


        <form className="space-y-6 px-8 py-8" onSubmit={handleCheck}>
          <div>
            <label className="mb-2 block font-retro text-lg font-semibold text-[#172235]" htmlFor="password">
              Password Input
            </label>
            <input
              id="password"
              className="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg text-[#172235] outline-none focus:border-[#1f2b3d] focus:ring-2 focus:ring-gray-200"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
          </div>

      
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              className="rounded-lg bg-[#1f2b3d] px-5 py-4 font-retro text-lg font-bold text-white shadow-sm hover:bg-[#172235]"
              type="submit"
            >
              Check Password
            </button>
            <button
              className="rounded-lg bg-gray-200 px-5 py-4 font-retro text-lg font-bold text-[#172235] hover:bg-gray-300"
              type="button"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

    
          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-600">
              {error}
            </p>
          )}


          {result && (
            <div className={`rounded-lg border p-5 ${result.boxTheme}`}>
              <p className="text-lg text-[#172235]/70">Password Status</p>
              <p className={`mt-1 text-2xl font-bold ${result.statusColor}`}>
                {result.status}
              </p>

              <p className="mt-4 text-lg text-[#172235]/70">Strength Message</p>
              <p className="mt-1 text-base font-semibold text-[#172235]">
                {result.message}
              </p>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}