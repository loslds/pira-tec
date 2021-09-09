import React, { useRef, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { motion } from 'framer-motion'
import { useDimensions } from './Dimensions'
import { Context } from './Provider'

let lastOptionId = 0

export default function DropdownOpction({
  name,
  content: Content,
  backgroundHeight
}) {
  const idRef = useRef(++lastOptionId)
  const id = idRef.current

  const [optionHook, optionDimensions] = useDimensions()
  const [registered, setRegistered] = useState(false)
  const {
    registerOption,
    updateOptionsProps,
    deleteOptionById,
    setTargetId,
    targetId
  } = useContext(Context)

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef()

        useEffect(() => {
          if (contentRef.current) {
            const contentDimensions = contentRef.current.getBoundingClientRect()
            updateOptionsProps(id, { contentDimensions })
          }
        }, [])

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        )
      }

      registerOption({
        id,
        optionDimensions,
        optionContextX: optionDimensions.x + optionDimensions.width / 2,
        WrappedContent,
        backgroundHeight
      })

      setRegistered(true)
    } else if (registered && optionDimensions) {
      updateOptionsProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2
      })
    }
  }, [
    registerOption,
    id,
    registered,
    optionDimensions,
    updateOptionsProps,
    deleteOptionById,
    backgroundHeight
  ])

  useEffect(() => deleteOptionById(id), [deleteOptionById, id])

  const handleOpen = () => setTargetId(id)
  const handleClose = () => setTargetId(null)
  const handleTouch = () => (window.isMobile = true)

  const handleClick = e => {
    e.preventDefault()

    return targetId === id ? handleClose() : handleOpen()
  }

  return (
    <motion.button
      className="dropdown-option"
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => window.isMobile && handleOpen()}
      onHoverEnd={() => window.isMobile && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {name}
    </motion.button>
  )
}
DropdownOpction.propTypes = {
  name: PropTypes.string,
  content: PropTypes.any,
  backgroundHeight: PropTypes.string
}

DropdownOpction.defaultProps = {
  name: null,
  content: null,
  backgroundHeight: null
}
