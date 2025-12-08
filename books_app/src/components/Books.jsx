import React from 'react';
import '../css/Books.css';

function books({ book }) {
    const { title, author, img, year } = book
    console.log(book);
    return (
        <div className='book'>

            <img src={img} alt={title} width={250} />
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h5>{year}</h5>



        </div>
    )
}

export default books