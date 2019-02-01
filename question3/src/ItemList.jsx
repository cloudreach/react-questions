import React from 'react'

import './ItemList.css'

export function ItemList(props) {
  return (
    <div className='panel'>
      {
        props.items.map((item, i) => (
          <div key={i}>
            {item}
          </div>
        ))
      }
    </div>
  )
}

export default ItemList
