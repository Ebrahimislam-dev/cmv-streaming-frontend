import Head from "next/head";
import HomePage from "./start";


export default function Home() {
  return (
    <div >
      <Head>
        <title>CMV</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <div>
          <HomePage />
         
        </div>
      </main>
 
    </div>
  );
}