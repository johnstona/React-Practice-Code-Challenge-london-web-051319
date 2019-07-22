import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import AddMoney from '../components/AddMoney'

const SushiContainer = ({addSushis, sushis, eatSushi, eatenSushis, addMoney }) => {
  return (
    <Fragment>
      <AddMoney addMoney={addMoney} />
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