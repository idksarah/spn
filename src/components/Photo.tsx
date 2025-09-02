import { useState } from "react";

type PhotoProps = {
  img: string;
  alt?: string;
  caption?: string;
  date?: string;
};

export default function Photo({ img, alt, caption, date }: PhotoProps) {
  const [zoomed, setZoomed] = useState(false);

  function toggleZoom(e: React.MouseEvent) {
    e.stopPropagation();
    setZoomed(true);
  }

  function closeZoom() {
    setZoomed(false);
  }

  return (
    <>
      <figure className="photo-figure">
        <img
          src={img}
          alt={alt || "photo"}
          className="photo"
          onClick={toggleZoom}
        />
        {(caption || date) && (
          <figcaption>
            {caption && <span>{caption}</span>}
            {caption && date && <span> • </span>}
            {date && <span>{date}</span>}
          </figcaption>
        )}
      </figure>

      {zoomed && (
        <div className="overlay" onClick={closeZoom}>
          <div className="overlay-content">
            <img src={img} alt={alt || "photo"} className="overlay-img" />
            {(caption || date) && (
              <h2>
                {caption}
                {caption && date && " • "}
                {date}
              </h2>
            )}
          </div>
        </div>
      )}
    </>
  );
}
