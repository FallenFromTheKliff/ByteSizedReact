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
    let statusBg;
    let statusBorder;
    let statusTextColor;

    if (time <= 8) {
      status = 'On Time';
      message = 'Status: On Time - Good job!';
      statusBg = 'rgba(220, 252, 231, 0.4)';
      statusBorder = 'rgba(74, 222, 128, 0.5)';
      statusTextColor = '#065f46';
    } else if (time <= 9) {
      status = 'Late';
      message = 'Status: Late - Please be on time tomorrow.';
      statusBg = 'rgba(254, 243, 199, 0.4)';
      statusBorder = 'rgba(245, 158, 11, 0.5)';
      statusTextColor = '#92400e';
    } else {
      status = 'Very Late';
      message = 'Status: Very Late - Report to your supervisor.';
      statusBg = 'rgba(254, 226, 226, 0.4)';
      statusBorder = 'rgba(239, 68, 68, 0.5)';
      statusTextColor = '#991b1b';
    }

    setResult({
      name: employeeName,
      time: time,
      status: status,
      message: message,
      statusBg: statusBg,
      statusBorder: statusBorder,
      statusTextColor: statusTextColor,
    });
  };

  const handleReset = () => {
    setEmployeeName('');
    setTimeIn('');
    setResult(null);
    setError('');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'radial-gradient(circle at 10% 20%, rgb(249, 115, 22) 0%, rgb(99, 102, 241) 90.1%)',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '2.5rem',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 12px 36px 0 rgba(0, 0, 0, 0.2)',
          color: '#0f172a',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.4rem', textAlign: 'center', fontWeight: '700' }}>
          Employee Attendance Checker
        </h2>

        <form onSubmit={handleCheckAttendance}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b' }}>
              Employee Name
            </label>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="e.g. John Doe"
              style={{
                width: '100%',
                padding: '10px 14px',
                marginTop: '6px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                background: 'rgba(255, 255, 255, 0.4)',
                color: '#0f172a',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b' }}>
              Time In (e.g., 8.5 for 8:30 AM)
            </label>
            <input
              type="number"
              step="0.01"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              placeholder="e.g. 8.5"
              style={{
                width: '100%',
                padding: '10px 14px',
                marginTop: '6px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                background: 'rgba(255, 255, 255, 0.4)',
                color: '#0f172a',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem' }}>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: '11px',
                borderRadius: '10px',
                border: 'none',
                background: '#1e293b',
                color: '#ffffff',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              Check Attendance
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={{
                flex: 1,
                padding: '11px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                background: 'rgba(255, 255, 255, 0.3)',
                color: '#1e293b',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {error && (
          <div
            style={{
              marginTop: '1.25rem',
              padding: '10px 14px',
              borderRadius: '8px',
              background: 'rgba(254, 226, 226, 0.6)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#991b1b',
              fontSize: '0.9rem',
              fontWeight: '500',
            }}
          >
            {error}
          </div>
        )}

        {result && (
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              borderRadius: '12px',
              background: result.statusBg,
              border: `1px solid ${result.statusBorder}`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#0f172a' }}>Attendance Result</h3>
            <p style={{ margin: '0.25rem 0', color: '#1e293b' }}>
              <strong>Name:</strong> {result.name}
            </p>
            <p style={{ margin: '0.25rem 0', color: '#1e293b' }}>
              <strong>Time In:</strong> {result.time}
            </p>
            <p style={{ margin: '0.25rem 0', color: '#1e293b' }}>
              <strong>Status:</strong> {result.status}
            </p>
            <p style={{ margin: '0.5rem 0 0 0', fontWeight: '700', color: result.statusTextColor }}>
              {result.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}