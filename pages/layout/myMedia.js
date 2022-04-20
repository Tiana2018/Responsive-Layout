import Link from 'next/link';
import React from 'react';
import style from '../../styles/Media.module.css';
export default function myMedia() {
    return (
        <>
        <div className="container p-3">
            <button><Link href='/'><a>返回首页</a></Link></button>
            <div className={style.m1}>hello </div>
        </div>
        </>                    
    )
    
}