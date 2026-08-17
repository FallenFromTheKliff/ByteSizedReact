import Login from '../pages/Login';
import GradeEvaluation from '../pages/GradeEvaluation';
import PasswordChecker from '../pages/PasswordChecker';
import ElectricityBill from '../pages/ElectricityBill';
import AttendanceChecker from '../pages/AttendanceChecker';

export const One = {
  id: 1,
  title: "Login Authentication",
  description: "Validate a username and password against sample credentials by managing the login/logout state!",
  path: "/act1-login",
  file: <Login />
}

export const Two = {
  id: 2,
  title: "Student Grade Evaluation",
  description: "Enter a student's score and get an automatic remark based on grade ranges!",
  path: "/act2-grade-evaluation",
  file: <GradeEvaluation />
}

export const Three = {
  id: 3,
  title: "Password Strength Checker",
  description: "Check the password length and receive LIVE feedback on how strong it is!",
  path: "/act3-password-checker",
  file: <PasswordChecker />
}

export const Four = {
  id: 4,
  title: "Electricity Bill Calculator",
  description: "Calculate a customer's electricity bill based on kWh consumption and tiered rates!",
  path: "/act4-electricity-bill",
  file: <ElectricityBill />
}

export const Five = {
  id: 5,
  title: "Employee Attendance Checker",
  description: "Check an employee's time-in and determine whether they are on time, late arrival, or VERY late!",
  path: "/act5-attendance-checker",
  file: <AttendanceChecker />
}