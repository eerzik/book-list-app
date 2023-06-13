import React from 'react';
//props.book deyip de erişebiliyoruz.
export default function BookDetails({ book }) {
    return (

        <li>
            <div className='title' >{book.ad}</div>
            <div className='author' >{book.yazar}</div>
        </li>

    );
}