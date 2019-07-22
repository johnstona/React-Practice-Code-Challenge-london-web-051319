import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({addSushis, sushis, eatSushi, eatenSushis }) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi sushi={sushi} eat={eatSushi} eaten={eatenSushis}/>)
        }
        <MoreButton addSushis={addSushis} sushis={sushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer