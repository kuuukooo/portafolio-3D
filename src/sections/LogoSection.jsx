import React from 'react'
import logoIconsList from '../constants/index.js'

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge'></div>
      <div className='gradient-edge'></div>

      <div className='marquee h-52'>
        <div className='marquee-box md:gap-12 gap-5'>
          {logoIconsList}
        </div>
      </div>

    </div>
  )
}

export default LogoSection