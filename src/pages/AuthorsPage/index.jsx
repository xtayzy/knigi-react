import style from './style.module.css';
import {useEffect, useState} from "react";
import {MyBookHeader} from "../../components/MyBookHeader/index.jsx";
import {MyBooks} from "../../components/MyBooks/index.jsx";
import {MyAuthors} from "../../components/MyAuthors/index.jsx";

export function AuthorsPage() {
    const [books, setBooks] = useState([])
    const [url, setUrl] = useState({
        url: 'http://127.0.0.1:8000/api/v1/authors/',
        vopr: '?',
        page: 'page=1',
        amper: '&',
        order_by: 'order_by=nurik'
    })

    useEffect(() => {
        const getBooks = async () => {

            const res = await fetch(`${url.url}${url.vopr}${url.order_by}${url.amper}${url.page}`);
            const response = await res.json();
            console.log(`${url.url}${url.vopr}${url.page}${url.amper}${url.order_by}`)
            console.log(response);
            setBooks(response);

        };

        getBooks();

    }, [url]);


    return (
        <>
            <div className={style.books_page} id="books">
                {/*<MyBookHeader books={books} setBooks={setBooks} setUrl={setUrl} url={url}/>*/}
                <MyAuthors books={books}/>
            </div>
        </>
    )
}