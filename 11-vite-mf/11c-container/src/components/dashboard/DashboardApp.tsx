import React, {useEffect, useRef} from 'react'
import { mount } from 'dashboard/DashboardApp'

const DashboardApp: React.FC = () => {
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current) {
            mount(ref.current)
        }
    })
    return <div ref={ref} />
}

export default DashboardApp