import React from 'react'

const MoreButton = ({addSushis, sushis}) => {
    return <button onClick={() => addSushis(sushis)}>
            More sushi!
          </button>
}

export default MoreButton