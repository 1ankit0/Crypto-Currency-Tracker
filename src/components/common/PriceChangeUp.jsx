export default function PriceChangeUp({ value }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 14l6-6 6 6" />
      </svg>
      {value}
    </div>
  )
}
