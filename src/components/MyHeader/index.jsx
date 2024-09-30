import style from './style.module.css';

export function MyHeader() {

    return <>
        <div className={style.header}>
            <a href="http://localhost:5173/authors">
                authors
            </a>
            <a href="http://localhost:5173/books">
                books
            </a>
        </div>
    </>
}