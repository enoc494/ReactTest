import React from 'react'
import Fecha from './Fecha'
import Titulo from './Titulo'

export default function FechaTituloRow() {
  return (
    <div className='dateTitle'>
      <Fecha/>
      <Titulo/>  
    </div>
  )
}
