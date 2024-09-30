import style from './style.module.css';

export function MyBookHeader({url, setUrl, books, setBooks, setOrderBy}) {
    function nextPage(){
        console.log(books.next)

        if (books.next !== null) {
            const new_page = books.next.split('&')[1]
            setUrl({...url, page: new_page})

        }
    }

    function prevPage(){
        if (books.previous !== null) {
            const new_page = books.previous.split('&')[1]
            setUrl({...url, page: new_page})
        }
    }

    function selectChange(event){
        setUrl({...url, order_by: 'order_by='+event.target.value})
        console.log(1)
        console.log(url)
        console.log(books)
    }


    return <>
        <div className={style.book_header}>
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
            <select name="order_by" id="order_by" onChange={selectChange}>
                <option value="nurik">not order</option>
                <option value="title">title</option>
                <option value="details">details</option>
            </select>
        </div>
    </>
}