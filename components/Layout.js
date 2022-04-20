import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
    return (
      <>
      <div className="container p-3">
        <div><Link href='/layout/myMedia'><a>0. 媒体查询</a></Link> </div>
        <div><Link href='/layout/myFlex'><a>1.Flex弹性布局</a></Link> </div>
        <div><Link href='/layout/myGrid'><a>2.Grid网络布局</a></Link> </div>
        <div><Link href='/layout/myBootstrap'><a>3.Bootstrap的栅格布局</a></Link> </div>
        <div><Link href='/layout/myElement'><a>4.Element-ui的布局系统</a></Link> </div>
        <div><Link href='/layout/myRem'><a>5.rem响应式布局</a></Link> </div>
        {/* <div><Link href='/layout/myResponsive'><a>6.混合布局</a></Link> </div> */}
    </div>
    {children}
      </>
    )
  }
  
  export default Layout