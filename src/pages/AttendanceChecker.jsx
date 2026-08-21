import { useState } from 'react';

export default function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheckAttendance = (e) => {
    e.preventDefault();

    if (!employeeName.trim() || timeIn === '') {
      setError('Please provide both Employee Name and Time In.');
      setResult(null);
      return;
    }

    const time = parseFloat(timeIn);

    if (isNaN(time) || time < 0 || time > 24) {
      setError('Please enter a valid time value (e.g., 8.5 for 8:30 AM).');
      setResult(null);
      return;
    }

    setError('');

    let status;
    let message;
    let badgeBg;
    let textColor;

    // Activity 5 logic requirements
    if (time <= 8) {
      status = 'On Time';
      message = 'Status: On Time - Good job!';
      badgeBg = 'bg-emerald-500/20 border-emerald-400/50';
      textColor = 'text-emerald-950';
    } else if (time <= 9) {
      status = 'Late';
      message = 'Status: Late - Please be on time tomorrow.';
      badgeBg = 'bg-amber-500/20 border-amber-400/50';
      textColor = 'text-amber-950';
    } else {
      status = 'Very Late';
      message = 'Status: Very Late - Report to your supervisor.';
      badgeBg = 'bg-rose-500/20 border-rose-400/50';
      textColor = 'text-rose-950';
    }

    setResult({
      name: employeeName,
      time: time,
      status: status,
      message: message,
      badgeBg: badgeBg,
      textColor: textColor,
    });
  };

  const handleReset = () => {
    setEmployeeName('');
    setTimeIn('');
    setResult(null);
    setError('');
  };

  return (
    <div className="min-h-[calc(100vh-70px)] w-full bg-gradient-to-b from-[#dce4ec] via-[#768799] to-[#202b38] flex flex-col items-center py-12 px-4 font-retro">
      {/* Scaled Header matching Home Page */}
      <h1 className="text-3xl md:text-4xl text-[#1b2430] tracking-widest text-center mb-2 uppercase font-bold drop-shadow-sm">
        EMPLOYEE ATTENDANCE CHECKER
      </h1>
      <p className="text-xs md:text-sm text-[#3e4c59] text-center max-w-xl mb-4 leading-relaxed tracking-wide">
        Check an employee's time-in and determine whether they are on time, late arrival, or VERY late!
      </p>

      {/* Decorative Divider */}
      <div className="w-[550px] max-w-[90%] h-[3px] bg-[#1b2430] mb-10" />

      {/* Glassmorphism Chamfered Container */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/80 octagonee-[24] shadow-2xl p-8 flex flex-col justify-between">
        {/* Activity Badge */}
        <div className="w-9 h-9 bg-slate-200/80 octagonee-[8] flex items-center justify-center text-sm font-bold text-slate-800 mb-6">
          5
        </div>

        <form onSubmit={handleCheckAttendance} className="space-y-4">
          {/* Employee Name Input */}
          <div>
            <label className="block text-xs text-[#1b2430] mb-1.5 uppercase font-semibold">
              Employee Name:
            </label>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="e.g. John Paulo"
              className="w-full px-3.5 py-2.5 bg-white/60 backdrop-blur-sm border-2 border-slate-300/80 octagonee-[8] text-xs text-[#1b2430] outline-none focus:border-[#1b2430] transition-colors"
            />
          </div>

          {/* Time In Input */}
          <div>
            <label className="block text-xs text-[#1b2430] mb-1.5 uppercase font-semibold">
              Time In (e.g., 8.5 for 8:30 AM):
            </label>
            <input
              type="number"
              step="0.01"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              placeholder="e.g. 8.5"
              className="w-full px-3.5 py-2.5 bg-white/60 backdrop-blur-sm border-2 border-slate-300/80 octagonee-[8] text-xs text-[#1b2430] outline-none focus:border-[#1b2430] transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full bg-[#1b2430] hover:bg-[#2d3d4f] text-white py-3.5 octagonee-[12] text-xs uppercase tracking-wider cursor-pointer transition-colors active:scale-[0.99]"
            >
              [ Check Attendance ]
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-slate-200/60 hover:bg-slate-200 text-slate-700 py-2.5 octagonee-[12] text-xs uppercase tracking-wider border border-slate-300/70 cursor-pointer transition-colors"
            >
              [ Reset ]
            </button>
          </div>
        </form>

        {/* Error Feedback */}
        {error && (
          <div className="mt-4 p-3 bg-rose-100/70 backdrop-blur-sm border-2 border-rose-300/80 text-rose-800 text-xs octagonee-[8]">
            ! {error}
          </div>
        )}

        {/* Result Card */}
        {result && (
          <div className={`mt-5 p-4 octagonee-[12] border-2 backdrop-blur-md ${result.badgeBg} ${result.textColor} space-y-1`}>
            <h3 className="text-xs font-bold uppercase mb-2 text-[#1b2430]">
              Attendance Result:
            </h3>
            <p className="text-xs text-slate-900">
              <span className="font-bold">Name:</span> {result.name}
            </p>
            <p className="text-xs text-slate-900">
              <span className="font-bold">Time In:</span> {result.time}
            </p>
            <p className="text-xs text-slate-900">
              <span className="font-bold">Status:</span> {result.status}
            </p>
            <p className="text-xs font-bold pt-1">
              {result.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}