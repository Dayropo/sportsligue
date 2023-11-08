"use client"

import { useState } from "react"

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
  const pageNumberLimit = 5
  const [maxPageLimit, setMaxPageLimit] = useState<number>(5)
  const [minPageLimit, setMinPageLimit] = useState<number>(0)

  let pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const decrementPageLimit = () => {
    setMaxPageLimit(maxPageLimit - pageNumberLimit)
    setMinPageLimit(minPageLimit - pageNumberLimit)
  }

  const incrementPageLimit = () => {
    setMaxPageLimit(maxPageLimit + pageNumberLimit)
    setMinPageLimit(minPageLimit + pageNumberLimit)
  }

  const handlePrev = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit)
      setMinPageLimit(minPageLimit - pageNumberLimit)
    }
    setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit)
      setMinPageLimit(minPageLimit + pageNumberLimit)
    }
    setCurrentPage(currentPage + 1)
  }

  return (
    <ul className="pagination-list">
      <button
        className={`pagination-controls`}
        disabled={currentPage === 1 ? true : false}
        //onClick={() => setCurrentPage(currentPage - 1)}
        onClick={handlePrev}
      >
        Prev
      </button>

      {minPageLimit >= 1 && (
        <button className="pagination-controls" onClick={decrementPageLimit}>
          &hellip;
        </button>
      )}

      {pageNumbers.map((item, index) => {
        if (item <= maxPageLimit && item > minPageLimit) {
          return (
            <button
              key={index}
              className={`${item === currentPage ? "pagination-active" : ""} pagination-controls`}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </button>
          )
        } else {
          return null
        }
      })}

      {pageNumbers.length > maxPageLimit && (
        <button className="pagination-controls" onClick={incrementPageLimit}>
          &hellip;
        </button>
      )}

      <button
        className={`pagination-controls`}
        disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
        //onClick={() => setCurrentPage(currentPage + 1)}
        onClick={handleNext}
      >
        Next
      </button>
    </ul>
  )
}
