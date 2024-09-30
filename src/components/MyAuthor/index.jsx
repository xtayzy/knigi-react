import style from './style.module.css';

export function MyAuthor({book}) {

    return <>
        <div className={style.book}>
            <div>
                <img src={book.image} alt=""/>
            </div>
            <div>
                {book.name}
            </div>
        </div>
    </>
}