import React from 'react'

export const Pagination = (props) => {
    const pages = []
    const pagesCount = Math.ceil(props.totalCount / props.limit)

    const createPages = (pagesCount, currentPage) => {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
        return pages.map(el => {
            return <li className="page-item " onClick={() => props.pageHandler(el)} key={el}><span className="page-link">{el}</span></li>
        })
    }

    const prevPage = () => {
        if (props.currentPage > 1) {
            props.pageHandler(props.currentPage - 1)
        }
    }

    const nextPage = () => {
        if (props.currentPage < pagesCount) {
            props.pageHandler(props.currentPage + 1)
        }
    }

    return (
        <div className='d-flex justify-content-around'>
            <ul className="pagination">
                <li className="page-item" onClick={() => prevPage()}><span className="page-link">{'<'}</span></li>
                {createPages(pagesCount, props.currentPage)}
                <li className="page-item" onClick={() => nextPage()}><span className="page-link">{'>'}</span></li>
            </ul>
        </div>
    )
}