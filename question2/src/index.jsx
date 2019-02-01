import React from 'react'
import ReactDOM from 'react-dom'

import Filter from './Filter'
import ItemList from './ItemList'

ReactDOM.render(
  <div className='app'>
    <Filter
      data={['foo', 'bar']}
      onFilter={(filtered) => console.log(filtered)}/>
    <ItemList items={['foo', 'bar']}/>
  </div>,
  document.getElementById('root')
)
