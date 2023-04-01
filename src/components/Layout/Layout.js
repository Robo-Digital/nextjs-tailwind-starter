import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next.js Tailwind Starter</title>
    </Head>
    <main>{children}</main>
  </>
);

export default Layout;
