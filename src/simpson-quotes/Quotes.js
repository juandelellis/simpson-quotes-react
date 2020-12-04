import React from 'react';
import style from './quotes.module.css';

const Quotes = ({quote, character,image,characterDirection}) => {
    return (
        <div className={style.quotes}>
            <h3>{quote}</h3>
            <h1>{character}</h1>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Quotes;
