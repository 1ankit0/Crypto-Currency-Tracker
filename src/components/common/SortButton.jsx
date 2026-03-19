export default function SortButton() {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
      <span>Sort</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M8 6l-3 3-3-3" />
        <path d="M5 9V3" />
        <path d="M16 18l3-3 3 3" />
        <path d="M19 15v6" />
      </svg>
    </button>
  )
}
