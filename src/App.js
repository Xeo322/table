import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import {Loader} from './components/Loader'
import {Search} from './components/Search'
import {Table} from './components/Table'
import {Pagination} from './components/Pagination'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
    const [state, setState] = useState({
        data: [],
        totalCount: 0,
        sort: 'asc',
        search: '',
        sortField: 'id',
        loading: true
    })
    const [requestProps, setRequestProps] = useState({
        limit: 25,
        page: 1,
    })

    useEffect(() => {
        setState({...state, loading: true})
        const fetchData = async () => {
            const result = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${requestProps.page}&_limit=${requestProps.limit}`)
            const data = await result.json()
            setTimeout(() => {
                setState({
                    ...state,
                    data,
                    totalCount: result.headers.get('x-total-count'),
                    loading: false
                })
            }, 500)
        }
        fetchData()

    }, [requestProps])

    const pageHandler = (page) => {
        setRequestProps({...requestProps, page})
    }

    const filteredData = () => {
        const {data, search} = state
        if (!search) {
            return data
        }
        return data.filter(el => {
            return el['name'].toLowerCase().includes(search.toLowerCase()) ||
                el['email'].toLowerCase().includes(search.toLowerCase()) ||
                el['body'].toLowerCase().includes(search.toLowerCase())
        })
    }

    const sortHandler = (sortField) => {
        const clonedData = state.data.concat()
        const sortType = state.sort === 'asc' ? 'desc' : 'asc'
        const orderedData = _.orderBy(clonedData, sortField, sortType)
        setState({...state, data: orderedData, sort: sortType, sortField})
    }

    const searchHandler = (search) => {
        setState({...state, search})
    }

    const limitHandler = (limit) => {
        setRequestProps({...requestProps, limit})
    }


    return (
        <div>
            <header className='header d-flex justify-content-around align-items-center'>
                <h1>Table</h1>
            </header>
            <main className="container">
                <Search searchHandler={searchHandler} limit={requestProps.limit} limitHandler={limitHandler}/>
                {state.loading ? <Loader/> : <>
                    <Table sort={state.sort} sortField={state.sortField} data={filteredData()} sortHandler={sortHandler}/>
                    <Pagination limit={requestProps.limit} totalCount={state.totalCount} pageHandler={pageHandler}
                                currentPage={requestProps.page}/>
                </>}
            </main>
        </div>
    )
}

