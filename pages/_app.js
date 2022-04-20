import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout"
// import "lib-flexible"
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // const setRem = async ()=>{
  //   await require('lib-flexible')
  // }
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    // setRem()
    // window.addEventListener('resize',setRem)
  }, []);

  return <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp;