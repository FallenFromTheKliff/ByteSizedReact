import { useState } from "react"
import ElectricInput from "../components/ElectricInput"
import ElectricCondition from "../components/ElectricCondition"
import ElectricResult from "../components/ElectricResult"

export default function ElectricityBill() {
  const [pageState, setPageState] = useState("input_page")
  const [customerName, setCustomerName] = useState("")
  const [consumption, setConsumption] = useState("")
  const [rateApplied, setRateApplied] = useState(null)
  const [totalBill, setTotalBill] = useState(null)
  const [usageStatus, setUsageStatus] = useState(null)

  function handleSubmit(value) {
    const bill = calculateValue(Number(value))

    setTotalBill(bill)
    setUsageStatus(findUsageStatus(bill))
    setPageState("condition_page")
  }

  function handleClear() {
    setCustomerName("")
    setConsumption("")
    setRateApplied(null)
    setTotalBill(null)
    setUsageStatus(null)
  }

  function calculateValue(value) {
    if (value <= 100) {
      setRateApplied(10)
      return value * 10
    }

    if (value <= 200) {
      setRateApplied(12)
      return value * 12
    }

    if (value <= 300) {
      setRateApplied(15)
      return value * 15
    }

    setRateApplied(18)
    return value * 18
  }

  function findUsageStatus(bill) {
    if (bill >= 5000) {
      return "High Electricity Usage"
    }
    else {
      return "Normal Electricity Usage"
    }
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-5 py-10">
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-white/9 blur-[100px]"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/[0.07] blur-[110px]"></div>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/3 blur-[90px]"></div>
      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="mb-9 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Electricity Bill Calculator
        </h1>
        {pageState === "input_page" && (
          <ElectricInput
            handleSubmit={handleSubmit}
            handleClear={handleClear}
            customerName={customerName}
            setCustomerName={setCustomerName}
            consumption={consumption}
            setConsumption={setConsumption}
          />
        )}
        {pageState === "condition_page" && (
          <ElectricCondition
            handleClick={setPageState}
            handleBack={setPageState}
          />
        )}
        {pageState === "result_page" && (
          <ElectricResult
            customerName={customerName}
            consumption={consumption}
            rateApplied={rateApplied}
            totalBill={totalBill}
            usageStatus={usageStatus}
            handleBack={setPageState}
          />
        )}
      </div>
    </div>
  )
}