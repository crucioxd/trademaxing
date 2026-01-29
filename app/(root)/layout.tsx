import Header from '@/components/Header'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className='min-h-screen text-gray-400'>
        {/* header -> will be in every single page inside the root folder */}
        <Header/>
        <div className='container py-10'></div>
           {children}
        </main>
  )
}

export default layout