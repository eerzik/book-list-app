import React,{useContext} from 'react';
import { BookContext } from '../context/BookContext';

//props.book deyip de erişebiliyoruz.
export default function BookDetails({ book }) {
    const { dispatch } = useContext(BookContext);

    return (
        <li onClick={()=>dispatch({ type: 'REMOVE_BOOK', id: book.id })} >
            <div className='title' >{book.ad}</div>
            <div className='author' >{book.yazar}</div>
        </li>

    );
}