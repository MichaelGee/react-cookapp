import React from "react";
import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>Cookit</title>
      <link
        rel='stylesheet'
        href='https://bootswatch.com/4/lux/bootstrap.min.css'
      />
    </Head>
    {props.children}
  </div>
);

export default Layout;
