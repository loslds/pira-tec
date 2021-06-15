import {useState, useCallback, useLayoutEffect} from 'react'

const getDimension = element => element.getBoudingClientRect();

export function useDimensions(responsive = true) {
const [dimension, setDimension] =useState(null)
const [element, setElement] = useState(null)

const hook = useCallback(e => setElement(e),[]);

useLayoutEffect(() => {
  if (element){
    const updateDimension = () => {
      window.requestAnimationFrame(() => {
        setDimension(getDimension(element));
      })
    };

    updateDimension();

    if(responsive){
      window.addEventListener('resize', updateDimension);
      return () => {
        window.removeEventListener('resize', updateDimension);
      };
    }
  }
}, [element, hook, responsive] );




return[hook,dimension,element]
}
