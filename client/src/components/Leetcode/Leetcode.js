import React from 'react'
import Stat1 from './Stat1'
import Stat2 from './Stat2'
import Stat3 from './Stat3'
import Header from './Header'

const Leetcode = () => {
  return (
    <div className="grid grid-cols-12 justify-center items-center col-span-12 p-8 m-8 bg-gradient-to-b from-[#378eec53] to-[#378eec8f] shadow-xl rounded-md" >
      <Header/>
      <Stat1/>
      <Stat2/>
      <Stat3/>
    </div>
  )
}

export default Leetcode