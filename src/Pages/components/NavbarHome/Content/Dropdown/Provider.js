import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
export const Context = React.createContext()

export default function DropdownProvider({ children }) {
  const [options, setOptions] = useState([])
  const [targetId, setTargetId] = useState(null)
  const [cachedId, setCachedId] = useState(null)

  const registerOption = useCallback(
    ({
      id,
      optionsDimensions,
      optionsCenterX,
      WrappedContent,
      backgroundHeight
    }) => {
      setOptions(items => [
        ...items,
        {
          id,
          optionsDimensions,
          optionsCenterX,
          WrappedContent,
          backgroundHeight
        }
      ])
    },
    [setOptions]
  )

  const updateOptionsProps = useCallback(
    (optiopnsId, props) => {
      setOptions(items =>
        items.map(item => {
          if (item.id === optiopnsId) {
            item = { ...item, ...props }
          }
          return item
        })
      )
    },
    [setOptions]
  )

  const getOptionById = useCallback(
    id => options.find(item => item.id === id),
    [options]
  )

  const deleteOptionById = useCallback(
    id => {
      setOptions(items => items.filter(item => item.id !== id))
    },
    [setOptions]
  )

  useEffect(() => {
    if (targetId !== null) setCachedId(targetId)
  }, [targetId])

  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionsProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cachedId,
        setCachedId
      }}
    >
      {children}
    </Context.Provider>
  )
}

DropdownProvider.propTypes = {
  children: PropTypes.any
}

DropdownProvider.defaultProps = {
  children: null
}
