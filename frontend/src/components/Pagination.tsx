export interface pageProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}
export default function Pagination({
  page,
  totalPages,
  onPrev,
  onNext,
}: pageProps) {
  return (
    <div className="flex gap-2 mt-4">
      <button
        disabled={page <= 1}
        onClick={onPrev}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span>
        Page {page} / {totalPages}
      </span>
      <button
        disabled={page >= totalPages}
        onClick={onNext}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
        Next
      </button>
    </div>
  );
}
