type DrawingProps = {
    img: string;
    alt?: string;
    caption?: string;
    date?: string;
}

// rotate imgs if they're too tall

export default function Drawing({ img, alt, caption, date }: DrawingProps) {
  return (
    <figure>
      <img src={img} alt={alt || "drawing"} style={{ maxWidth: "100%" }} />
      {(caption || date) && (
        <figcaption style={{ marginTop: "0.5em"}}>
          {caption && <span>{caption}</span>}
          {caption && date && <span> • </span>}
          {date && <span>{date}</span>}
        </figcaption>
      )}
    </figure>
  );
}