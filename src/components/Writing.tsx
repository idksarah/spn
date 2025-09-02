
type WritingProps = {
    title? : string;
    content: string;
    genre?: string;
    date?: string;
};

export default function Writing({title, content, genre, date}: WritingProps) {
    return(
        <div className='writing'>
            <h2>{title}</h2>
            <p>{genre}</p>
            <p>{date}</p>
            <div
            dangerouslySetInnerHTML={{__html: content}}
            />
        </div>
    )
}