import style from './style.module.css';
import {MyBook} from "../MyBook/index.jsx";
import {MyAuthor} from "../MyAuthor/index.jsx";

export function MyAuthors({books}) {
    if (!books || !books.results || books.results.length === 0) {
        return <p>Loading...</p>
    }

    return <>
        <div className={style.books}>
            {books.results.map((book, index) => (<MyAuthor book={book} key={index}/>))}
        </div>
    </>
}