export default function ElectricInput({
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