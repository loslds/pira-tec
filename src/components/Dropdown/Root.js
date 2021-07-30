import React, { useContext } from 'react'
// import { motion } from 'framer-motion'
import { Context } from './Provider'
import { DropdownSection } from './Section'

export default function DropdownRoot () {
  const { options } = useContext(Context)
  return (
    <div className="dropdown-Root">
      <div>
        <div className="dropdown-container">
        {options.map((item) => (
          <DropdownSection key = {item.id} option={item} />
        ))}
        </div>
      </div>
    </div>
  )
}
