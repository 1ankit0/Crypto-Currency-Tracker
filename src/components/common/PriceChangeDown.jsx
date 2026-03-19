export default function PriceChangeDown({ value }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 10l6 6 6-6" />
      </svg>
      {value}
    </div>
  )
}
