import React from 'react'
import { AdminDashbord } from './AdminDashbord'
import { AdminPanal } from './AdminPanal'

export const RandomForm = () => {
    return (
        <div>
            <AdminPanal />
            <div className='mainPanalContaine'>
                <AdminDashbord/>
            </div>

        </div>


    )
}
