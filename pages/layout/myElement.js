import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import { Button,Layout} from 'element-react';
      
export default function myElement() {
    return (
        <>
        <div className="container p-3">
            <button><Link href='/'><a>返回首页</a></Link></button>
            <div>
            <style jsx>{`
                .grid-content {
                    border-radius: 4px;
                    min-height: 36px;
                }
                .bg-purple-light {
                    background: #e5e9f2;
                }  
                .bg-purple {
                    background: #d3dce6;
                }                    
            `}</style>
             <Layout.Row gutter={20} style={{margin:20}}>
                <Layout.Col span="16">
                    <div >
                    <Button type="primary">Hello</Button>
                    <Button>默认按钮</Button>
                    <Button type="primary">主要按钮</Button>
                    <Button type="text">文字按钮</Button>
                    </div>
                </Layout.Col>
                <Layout.Col span="8"><div className="grid-content bg-purple"></div></Layout.Col>
            </Layout.Row>
            <Layout.Row gutter={10}>
            <Layout.Col xs="8" sm="6" md="4" lg="3"><div className="grid-content bg-purple"></div></Layout.Col>
            <Layout.Col xs="4" sm="6" md="8" lg="9"><div className="grid-content bg-purple-light"></div></Layout.Col>
            <Layout.Col xs="4" sm="6" md="8" lg="9"><div className="grid-content bg-purple"></div></Layout.Col>
            <Layout.Col xs="8" sm="6" md="4" lg="3"><div className="grid-content bg-purple-light"></div></Layout.Col>
            </Layout.Row>
            </div>
        </div>
        </>                    
    )
    
}
