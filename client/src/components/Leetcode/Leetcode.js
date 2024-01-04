import React from 'react'
import Stat1 from './Stat1'
import Stat2 from './Stat2'
import Stat3 from './Stat3'
import Header from './Header'

const Leetcode = () => {
  return (
    <>
      <div className='text-center font-bold text-5xl my-8 border-b-[1px] border-gray-200'>Stats</div>
    <div className="grid grid-cols-12 justify-center items-center col-span-12 p-8 bg-gradient-to-t from-[#2aa4cd29] to-[#ADD8E6] shadow-xl rounded-md" >
      <Header/>
      <Stat1/>
      <Stat2/>
      <Stat3/>
    </div>
    </>
  )
}

export default Leetcode