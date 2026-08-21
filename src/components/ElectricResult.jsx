export default function ElectricResult({
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