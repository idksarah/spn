
import React, { useState, useRef, useEffect } from 'react';

type DrawingProps = {
    img: string;
    alt?: string;
    caption?: string;
    date?: string;
}

export default function Drawing({ img, alt, caption, date }: DrawingProps) {
  const [shouldRotate, setShouldRotate] = useState(false);
  const [verticalPadding, setVerticalPadding] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      // Rotate if height > width and width is below threshold
      const rotate = naturalHeight < naturalWidth;
      setShouldRotate(rotate);
      
      if (rotate) {
        const rotatedVisualHeight = imgRef.current.width;
        const paddingNeeded = rotatedVisualHeight / 2;
        setVerticalPadding(paddingNeeded);
      } 
    }
  };

  return (
    <figure style={{ 
      margin: 0, 
      marginBottom: '1rem',
      breakInside: 'avoid',
      display: 'inline-block',
      width: '100%'
    }}>
      <img 
        ref={imgRef}
        src={img} 
        alt={alt || "drawing"} 
        onLoad={handleImageLoad}
        style={{ 
          width: "100%",
          maxWidth: "35em",
          height: "auto",
          transform: shouldRotate ? "rotate(90deg)" : "none",
          transformOrigin: "center center",
          paddingTop: `${verticalPadding}px`,
          paddingBottom: `${verticalPadding}px`,
          transition: "transform 0.3s ease"
        }} 
      />
      {(caption || date) && (
        <figcaption>
          {caption && <span>{caption}</span>}
          {caption && date && <span> • </span>}
          {date && <span>{date}</span>}
        </figcaption>
      )}
    </figure>
  );
}
