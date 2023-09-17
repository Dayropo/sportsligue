"use client"

type PaginationProps = {
  itemsPerPage: number
  totalItems: number
  currentPage: number
  setCurrentPage: (val: number) => void
}

export default function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  let pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className="pagination-list">
      <button
        className={`pagination-controls`}
        disabled={currentPage === 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {pageNumbers.map((item, index) => (
        <button
          key={index}
          className={`${
            item === currentPage ? "pagination-active" : ""
          } pagination-controls`}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </button>
      ))}

      <button
        className={`pagination-controls`}
        disabled={
          currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
        }
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </ul>
  )
}
