import { useState } from 'react';

export default function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState('');
  const [timeIn, setTimeIn] = useState('');

  return (
    <div>
      <h2>Employee Attendance Checker</h2>
      <form>
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