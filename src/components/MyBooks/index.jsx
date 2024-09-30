import style from './style.module.css';
import {MyBook} from "../MyBook/index.jsx";

export function MyBooks({books}) {
    if (!books || !books.results || books.results.length === 0) {
        return <p>Loading...</p>
    }

    return <>
        <div className={style.books}>
            {books.results.map((book, index) => (<MyBook book={book} key={index}/>))}
        </div>
    </>
}