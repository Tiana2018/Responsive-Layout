import Link from 'next/link';
import React from 'react';

export default function myBootstrap() {
    return (
        <>
        <div>
             <div className="container p-3">
                <button className="btn btn-warning m-3"><Link href='/'><a>返回首页</a></Link></button>
                <div className="container">
                    <h2 class="mt-4">Five grid tiers</h2>
                    <p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>
                    </div>
                <style jsx>{`
                    .themed-grid-col {
                        padding-top: 15px;
                        padding-bottom: 15px;
                        background-color: rgba(86, 61, 124, .15);
                        border: 1px solid rgba(86, 61, 124, .2);
                      }                      
                `}</style>
                <div className="row mb-3">
                    <div className="col-4 themed-grid-col">.col-4</div>
                    <div className="col-4 themed-grid-col">.col-4</div>
                    <div className="col-4 themed-grid-col">.col-4</div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-4 themed-grid-col">.col-sm-4</div>
                    <div className="col-sm-4 themed-grid-col">.col-sm-4</div>
                    <div className="col-sm-4 themed-grid-col">.col-sm-4</div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4 themed-grid-col">.col-md-4</div>
                    <div className="col-md-4 themed-grid-col">.col-md-4</div>
                    <div className="col-md-4 themed-grid-col">.col-md-4</div>
                </div>

                <div className="row mb-3">
                    <div className="col-lg-4 themed-grid-col">.col-lg-4</div>
                    <div className="col-lg-4 themed-grid-col">.col-lg-4</div>
                    <div className="col-lg-4 themed-grid-col">.col-lg-4</div>
                </div>

                <div className="row mb-3">
                    <div className="col-xl-4 themed-grid-col">.col-xl-4</div>
                    <div className="col-xl-4 themed-grid-col">.col-xl-4</div>
                    <div className="col-xl-4 themed-grid-col">.col-xl-4</div>
                </div>
            </div>
      </div>
        </>                    
    )
    
}