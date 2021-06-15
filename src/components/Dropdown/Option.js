import React, {useRef, useState, useContext, useEffect} from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from './Dimensions';
import { Context } from './Provider';

let lastOptionId = 0;

export function DropdownOpction({ name, content: Content, backgroundHeight }) {

  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimension] = useDimensions();
  const [registered, setReistered] = useState(false)
  const {registerOption, updateOptionProps, deleteOptionById, setTargetId, targetId } = useContext(Context);

  useEffect(() => {
    if (!registered && optionDimension) {
      const WrappedContent = () => {
        const contentRef = useRef();
        useEffect(() => {
          const contentDimensions = contentRef.current.getBoudingClientReact();
          updateOptionProps(id, {contentDimensions} );
        },[])

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        )
      }

      registerOption( {
        id,
        optionDimension,
        optionContextX : optionDimension.x + optionDimension.width / 2 ,
        WrappedContent,
        backgroundHeight,
      } );

      setReistered(true);

    } else if (registered){
      updateOptionProps(id, {
        optionContextX : optionDimension.x + optionDimension.width / 2 ,
      } );
    }
  },[
    registerOption,
    id,
    registered,
    optionDimension,
    updateOptionProps,
    deleteOptionById,
    backgroundHeight,
  ]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleTouch = () => (window.isMobile = true);
  const handleClick = (e) => {
    e.preventDefault();
    return targetId === id ? handleClose : handleOpen
  }


  return (
    <motion.button
      className="dropdown-option"
      ref= {optionHook}
      onMouseDown={handleClick}
      onHoverStart={ () => window.isMobile && handleOpen()}
      onHoverEnd={ () => window.isMobile && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {name}
    </motion.button>
  )
}
