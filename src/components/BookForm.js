import React, { useContext, useState } from 'react';

import { BookContext } from '../context/BookContext';

export default function BookForm() {

    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title, author);
        addBook(title,author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Kitap Adı' value={title} onChange={(e)=>setTitle(e.target.value)} required  ></input>
            <input type='text' placeholder='Yazar Adı' value={author} onChange={(e)=>setAuthor(e.target.value)} required ></input>
            <input type='submit' value="Kitap ekle" />
        </form>
    )
}
