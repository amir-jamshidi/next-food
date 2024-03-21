import TabMenusPanel from '@/components/templates/panel/TabMenusPanel/TabMenusPanel'
import React from 'react'

const Panellayout = ({ children }) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <TabMenusPanel />
            <div className='dark:bg-gray-800 bg-white p-4 rounded-2xl'>
                {children}
            </div>
        </div>
    )
}

export default Panellayout