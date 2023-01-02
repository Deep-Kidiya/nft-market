import React from 'react'

import { Card } from '../../components'

const Trendingsection = () => {
  return (
    <div className='trending-section'>
      <div className='container'>
        <div className='trending-container'>
            <h2 className='section-title'>Trending Collection</h2>
            <p className='section-pera'>Checkout our weekly updated trending collection.</p>
            <div className='cards'>
                <Card />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Trendingsection
