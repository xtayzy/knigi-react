import style from './style.module.css';

export function MyBook({book}) {

    return <>
        <div className={style.book}>
            <div>
                <img src={book.image} alt=""/>
            </div>
            <div>
                {book.title}
            </div>
            <div>
                {book.author.name}
            </div>
            <div>
                {book.details}
            </div>
            <div>
                {book.name}
            </div>
        </div>
    </>
}