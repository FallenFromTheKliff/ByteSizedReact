export default function ElectricCondition({ handleClick, handleBack }) {
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