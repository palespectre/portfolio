import Head from 'next/head';
import Image from 'next/image';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Works from '@/components/Works';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pierre Cormier - portfolio</title>
        <meta name="description" content="Hey, welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <Hero />
        <About />
        <Works />
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=typescript-nextjs-starter" target="_blank" rel="noopener noreferrer">
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
