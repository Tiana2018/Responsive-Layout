import Link from 'next/link';
import React from 'react';
import style from '../../styles/Grid.module.css';
export default function myGrid() {
    return (
        <>
        <div className="container p-3">
        <div className={style.gridContainer}>
            <div className={style.header}>
                <button className="btn btn-warning m-3"><Link href='/'><a>返回首页</a></Link></button>
            </div>
            <div className={style.left}></div>
            <div className={style.content}>
                <div className={style.gridItem}>
                    <div className={`${style.item} ${style.item1}`}>1</div>
                    <div className={`${style.item} ${style.item2}`}>2</div>
                    <div className={`${style.item} ${style.item3}`}>3</div>
                    <div className={`${style.item} ${style.item4}`}>4</div>
                    <div className={`${style.item} ${style.item5}`}>5</div>
                    <div className={`${style.item} ${style.item6}`}>6</div>
                    <div className={`${style.item} ${style.item7}`}>7</div>
                    <div className={`${style.item} ${style.item8}`}>8</div>
                    <div className={`${style.item} ${style.item9}`}>9</div>
                </div>
            </div>
            <div className={style.right}></div>
            <div className={style.footer}></div>
        </div>
        </div>
        </>                    
    )
    
}