import React, { useRef } from 'react';
import useWindowSize from './useWindowSize';

const Canvas = () => {
  const nameRef = useRef(null); //ссылается на элемент в DOM дереве (svg)
  const [width, height] = useWindowSize();
  console.log(width, height);
  return <svg ref={nameRef} width={width} height={height}></svg>;
};

export default Canvas;
