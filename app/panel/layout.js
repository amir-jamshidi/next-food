import TabMenusPanel from '@/components/templates/panel/TabMenusPanel/TabMenusPanel'
import React from 'react'

const Panellayout = ({ children }) => {
    return (
        <div className='flex'>
            <TabMenusPanel />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Panellayout