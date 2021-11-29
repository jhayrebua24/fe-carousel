import Head from "next/head";
import Page from "modules";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <Head>
        <title>FE exam</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </div>
  );
}
