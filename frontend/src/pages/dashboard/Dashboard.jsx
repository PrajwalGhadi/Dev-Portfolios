import React from 'react'
import { dashboardMenuItems } from '../../../constants/dashboard'
import { Link } from 'react-router-dom'

const Dashboard = () => {


  return (
    <>
        <section className='h-screen w-full bg-[#0A0E14] '>
            <aside className='h-screen w-[15%] bg-black py-20'>
                <ul>
                    {dashboardMenuItems.map(item => (
                        <Link to={item.name} key={item.id} className='text-gray-400 p-4 uppercase hover:bg-gray-800 cursor-pointer flex items-center gap-2'>
                            <span className={`icon-${item.icon}`}></span>
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </aside>
        </section>
    </>
  )
}

export default Dashboard