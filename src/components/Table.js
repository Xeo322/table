import React from 'react'

export const Table = ({sort,sortField,data,sortHandler}) => {
    return (
        <table className='table'>
            <thead>
            <tr>
                <th onClick={() => sortHandler('id')}>
                    ID{sortField === 'id' ? <small>{sort}</small> : null}
                </th>
                <th onClick={() => sortHandler('name')}>
                    Name{sortField === 'name' ? <small>{sort}</small> : null}
                </th>
                <th onClick={() => sortHandler('email')}>
                    Email{sortField === 'email' ? <small>{sort}</small> : null}
                </th>
                <th onClick={() => sortHandler('body')}>
                    Body{sortField === 'body' ? <small>{sort}</small> : null}
                </th>
            </tr>
            </thead>
            <tbody>
            {data.length === 0 ? <tr><td>Sorry, no result</td></tr> : data.map(el => {
                return (
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.body}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}