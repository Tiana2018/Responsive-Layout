import Link from 'next/link';
import React from 'react';
export default function myFlex() {
    return (
        <>
        <div  className="container p-3">
            <button className="btn btn-warning m-3"><Link href='/'><a>返回首页</a></Link></button>
            <style jsx>{`
                .main-content {
                    width: 100%;
                    height:100%;
                    background: #72f884;
                    /* 使用flex弹性布局 */
                    display: flex;
                }
                .left-content {
                    box-sizing: border-box;
                    width: 30%;
                    height: 200px;
                    background: rgb(238, 119, 34);
                }
                .middle-content {
                    box-sizing: border-box;
                    width: 40%;
                    height: 200px;
                    background: rgb(173, 40, 250);
                }
                .right-content {
                    box-sizing: border-box;
                    width: 30%;
                    height: 200px;
                    background: rgb(68, 133, 255);
                }            
            `}</style>
            <div className="main-content">
                <div className="left-content">Left</div>
                <div className="middle-content">Middle</div>
                <div className="right-content">Right</div>
            </div>
        </div>
        </>                    
    )
    
}