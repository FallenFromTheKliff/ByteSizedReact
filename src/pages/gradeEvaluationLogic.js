export function getGradeRemarks(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  } else if (score >= 90) {
    return "Excellent";
  } else if (score >= 85) {
    return "Very Good";
  } else if (score >= 80) {
    return "Good";
  } else if (score >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

export function getGradeTheme(remarks) {
  if (remarks === "Failed") {
    return {
      tone: "red",
      box: "border-red-300 bg-red-50",
      label: "text-red-500",
      value: "text-red-700",
      remark: "text-red-700",
    };
  } else if (remarks === "Passed") {
    return {
      tone: "yellow",
      box: "border-amber-300 bg-amber-50",
      label: "text-amber-600",
      value: "text-amber-700",
      remark: "text-amber-700",
    };
  } else if (remarks === "Good") {
    return {
      tone: "blue",
      box: "border-blue-300 bg-blue-50",
      label: "text-blue-600",
      value: "text-blue-700",
      remark: "text-blue-700",
    };
  } else {
    return {
      tone: "green",
      box: "border-green-300 bg-green-50",
      label: "text-emerald-600",
      value: "text-emerald-700",
      remark: "text-emerald-700",
    };
  }
}
