import React,{useContext} from 'react';
import { BookContext } from '../context/BookContext';

export default function  Navbar () {

    const {books}=useContext(BookContext);
    return (
        <div className='navbar' >
           <h1>AOS Kitap Listesi</h1>
           <p>Şuan {books.length} adet kitap bulunuyor.</p>
        </div>
    );
};

