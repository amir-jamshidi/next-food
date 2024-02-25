import TabMenusPanel from '@/components/templates/panel/TabMenusPanel/TabMenusPanel'
import React from 'react'

const Panellayout = ({ children }) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <TabMenusPanel />
            <div className='bg-gray-800 p-4 rounded-2xl'>
                {children}
            </div>
        </div>
    )
}

export default Panellayout