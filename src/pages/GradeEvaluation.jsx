import { useState } from "react";
import { getGradeRemarks, getGradeTheme } from "../utils/gradeUtils";

export default function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleEvaluate(event) {
    event.preventDefault();

    const trimmedName = studentName.trim();
    const numericScore = Number(score);

    if (trimmedName === "") {
      setError("Please enter student name.");
      setResult(null);
      return;
    } else if (score === "" || Number.isNaN(numericScore)) {
      setError("Please enter a valid score.");
      setResult(null);
      return;
    }

    const remarks = getGradeRemarks(numericScore);

    if (remarks === "Invalid score") {
      setError("Invalid score");
      setResult(null);
      return;
    }

    setResult({
      studentName: trimmedName,
      score: numericScore,
      remarks,
    });
    setError("");
  }

  function handleClear() {
    setStudentName("");
    setScore("");
    setResult(null);
    setError("");
  }

  const resultTheme = result ? getGradeTheme(result.remarks) : null;

  return (
    <div className="flex flex-1 w-full items-start justify-center bg-[#eef3ff] px-4 py-16">
      <section className="w-full max-w-lg overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
        <div className="bg-[#1f2b3d] px-8 py-8 text-white">
          <h1 className="font-retro text-3xl font-bold">Student Grade Evaluation</h1>
          <p className="mt-2 font-retro text-lg">Activity 2</p>
        </div>
        <form className="space-y-6 px-8 py-8" onSubmit={handleEvaluate}>
          <div>
            <label className="mb-2 block font-retro text-lg font-semibold text-[#172235]" htmlFor="studentName">
              Student Name
            </label>
            <input
              id="studentName"
              className="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg text-[#172235] outline-none focus:border-[#1f2b3d] focus:ring-2 focus:ring-gray-200"
              type="text"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
              placeholder="Enter student name"
            />
          </div>
          <div>
            <label className="mb-2 block font-retro text-lg font-semibold text-[#172235]" htmlFor="score">
              Score
            </label>
            <input
              id="score"
              className="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg text-[#172235] outline-none focus:border-[#1f2b3d] focus:ring-2 focus:ring-gray-200"
              type="number"
              value={score}
              onChange={(event) => setScore(event.target.value)}
              placeholder="Enter score (0-100)"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              className="rounded-lg bg-[#1f2b3d] px-5 py-4 font-retro text-lg font-bold text-white shadow-sm hover:bg-[#172235]"
              type="submit"
            >
              Evaluate
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
            <div className={`rounded-lg border p-5 ${resultTheme.box}`}>
              <p className={`text-lg ${resultTheme.label}`}>Student Name</p>
              <p className={`mt-2 text-xl font-bold ${resultTheme.value}`}>
                {result.studentName}
              </p>

              <p className={`mt-6 text-lg ${resultTheme.label}`}>Score</p>
              <p className={`mt-2 text-xl font-bold ${resultTheme.value}`}>
                {result.score}
              </p>

              <p className={`mt-6 text-lg ${resultTheme.label}`}>Remarks</p>
              <p className={`mt-2 text-4xl font-bold ${resultTheme.remark}`}>
                {result.remarks}
              </p>
            </div>
          )}
        </form>
      </section>
    </div>
  )
}