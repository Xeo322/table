import React, {useState} from 'react'

export const Search = ({searchHandler,limit,limitHandler}) => {
    const [state, setState] = useState('')

    return (
        <div className='mb-3 mt-3 d-flex justify-content-between'>
            <div className='input-group '>
                <div className='input-group-prepend'>
                    <button className='btn btn-outline-secondary' type='button'
                            onClick={() => searchHandler(state.trim())}>Button
                    </button>
                </div>
                <input type='text' className='form-control shadow-none' placeholder='Search...' value={state}
                       onChange={e => setState(e.target.value)} aria-describedby='basic-addon1'/>
            </div>


            <div className='input-group col-2'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>Show</div>
                </div>
                <select className='custom-select shadow-none' value={limit} onChange={e => limitHandler(e.target.value)}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                </select>
            </div>

        </div>
    )
}