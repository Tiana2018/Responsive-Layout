import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'element-react';
import 'element-theme-default';
import Head from 'next/head'
export default function myRem() {
    return (
        <>
        <style jsx>{`   
            .btn {
                width: 8rem;
                height: 3rem;
                line-height: 3rem;
                font-size: 1.2rem;
                display: inline-block;
                background: #06c;
                color: #fff;
                border-radius: .5rem;
                text-decoration: none;
                text-align: center;    
            }  
            .btn a{
                color: #fff;
            }  
            .hello{
                font-size: 2rem;
            }
            .square{
                width: 8rem;
                height: 3rem;
                background: grey;
            }
        `}</style>
        <Head>
            <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
            />
        </Head>
        <div className="container p-3">
            <Button className="btn"><Link href='/'><a>返回首页</a></Link></Button>
            <div className="hello">hello world hello world hello world hello world hello world hello world hello world hello world </div>
            <div className="square">

            </div>
        </div>
        </>                    
    )
    
}