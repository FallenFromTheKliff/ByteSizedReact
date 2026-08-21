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

    if (time <= 8) {
      status = 'On Time';
      message = 'Status: On Time - Good job!';
    } else if (time <= 9) {
      status = 'Late';
      message = 'Status: Late - Please be on time tomorrow.';
    } else {
      status = 'Very Late';
      message = 'Status: Very Late - Report to your supervisor.';
    }

    setResult({
      name: employeeName,
      time: time,
      status: status,
      message: message,
    });
  };

  return (
    <div>
      <h2>Employee Attendance Checker</h2>
      <form onSubmit={handleCheckAttendance}>
        <div>
          <label>Employee Name</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter employee name"
          />
        </div>
        <div>
          <label>Time In</label>
          <input
            type="number"
            step="0.01"
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
            placeholder="e.g. 8.5"
          />
        </div>
        <button type="submit">Check Attendance</button>
      </form>
    </div>
  );
}