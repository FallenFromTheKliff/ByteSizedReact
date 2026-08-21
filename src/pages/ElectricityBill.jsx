import { useState } from "react"

function InputPage({
  setCustomerName,
  customerName,
  consumption,
  setConsumption,
  handleSubmit,
  handleClear
}) {
  return (
    <div className="w-full max-w-md rounded-[28px] border border-white/20 bg-white/8 p-7 shadow-2xl backdrop-blur-2xl">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(consumption)
        }}
        className="flex flex-col gap-5"
      >
        <div>
          <div className="mb-2 text-sm font-medium text-white/70">
            Customer Name
          </div>

          <input
            type="text"
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value)
            }}
            placeholder="Enter customer name"
            required
            className="w-full rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white outline-none backdrop-blur-xl placeholder:text-white/30 transition focus:border-white/40 focus:bg-white/10"
          />
        </div>

        <div>
          <div className="mb-2 text-sm font-medium text-white/70">
            Consumption
          </div>

          <input
            type="number"
            value={consumption}
            onChange={(e) => {
              setConsumption(e.target.value)
            }}
            placeholder="Enter kWh"
            min="0"
            required
            className="w-full rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white outline-none backdrop-blur-xl placeholder:text-white/30 transition focus:border-white/40 focus:bg-white/10"
          />
        </div>

        <div className="mt-2 flex gap-3">
          <button
            type="submit"
            className="flex-1 rounded-2xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-white/85"
          >
            Calculate Bill
          </button>

          <button
            type="button"
            onClick={(e) => {
              handleClear()
            }}
            className="rounded-2xl border border-white/20 bg-white/8 px-5 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

function Condition({ handleClick, handleBack }) {
  return (
    <div className="w-full max-w-md rounded-[28px] border border-white/20 bg-white/8 p-7 shadow-2xl backdrop-blur-2xl">
      <div className="mb-5 text-xl font-semibold text-white">
        Conditions
      </div>

      <div className="flex flex-col gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
          <span className="font-semibold text-white">0 - 100 kWh</span>
          {" "}→ ₱10 per kWh
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
          <span className="font-semibold text-white">101 - 200 kWh</span>
          {" "}→ ₱12 per kWh
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
          <span className="font-semibold text-white">201 - 300 kWh</span>
          {" "}→ ₱15 per kWh
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
          <span className="font-semibold text-white">Above 300 kWh</span>
          {" "}→ ₱18 per kWh
        </div>

        <div className="my-1 h-px bg-white/10"></div>

        <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
          Bill ≥ ₱5,000
          <span className="text-white"> → High Electricity Usage</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
          Bill &lt; ₱5,000
          <span className="text-white"> → Normal Electricity Usage</span>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={(e) => {
            handleClick("result_page")
          }}
          className="flex-1 rounded-2xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-white/85"
        >
          Result Page
        </button>

        <button
          type="button"
          onClick={(e) => {
            handleBack("input_page")
          }}
          className="rounded-2xl border border-white/20 bg-white/8 px-5 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
        >
          Back
        </button>
      </div>
    </div>
  )
}

function ResultPage({
  customerName,
  consumption,
  rateApplied,
  totalBill,
  usageStatus,
  handleBack
}) {
  return (
    <div className="w-full max-w-md rounded-[28px] border border-white/20 bg-white/8 p-7 shadow-2xl backdrop-blur-2xl">
      <div className="mb-5 text-xl font-semibold text-white">
        Bill Result
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="text-sm text-white/45">
            Customer Name
          </div>

          <div className="font-medium text-white">
            {customerName}
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="text-sm text-white/45">
            Consumption
          </div>

          <div className="font-medium text-white">
            {consumption} kWh
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="text-sm text-white/45">
            Rate Applied
          </div>

          <div className="font-medium text-white">
            ₱{rateApplied} / kWh
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="text-sm text-white/45">
            Total Bill
          </div>

          <div className="text-lg font-semibold text-white">
            ₱{totalBill}
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="mb-1 text-sm text-white/45">
            Usage Status
          </div>

          <div className="font-semibold text-white">
            {usageStatus}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          handleBack("condition_page")
        }}
        className="mt-6 w-full rounded-2xl border border-white/20 bg-white/8 px-4 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
      >
        Back
      </button>
    </div>
  )
}

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
          <InputPage
            handleSubmit={handleSubmit}
            handleClear={handleClear}
            customerName={customerName}
            setCustomerName={setCustomerName}
            consumption={consumption}
            setConsumption={setConsumption}
          />
        )}

        {pageState === "condition_page" && (
          <Condition
            handleClick={setPageState}
            handleBack={setPageState}
          />
        )}

        {pageState === "result_page" && (
          <ResultPage
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