import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
          <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css" />
          <style jsx>{`  
          html { 
            font-size:6.25%;
            }
            
            @media screen and (max-width: 768px) {
                html{
                    font-size:3.25%;
                    background: green;
                }
            }
            @media screen and (min-width: 768px) {html{font-size:5.25%; background: blue;}}
            @media screen and (min-width: 992px) {html{font-size:6.25%; background: purple;}}
            @media screen and (min-width: 1200px) {html{font-size:7.0%; background: red;}}
            `}</style>
        </Head>
       
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
