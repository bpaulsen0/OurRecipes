import Head from 'next/head'
import styles from '../styles/resume.module.css'
import React, { useEffect, useState } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Ben's Resume</title>
      </Head>
      <header className={styles.header}>
        <a
          className={styles.headerURL}
          href="/"
        >
          Back to HomePage
        </a>
        <a
          className={styles.headerURL}
          href="/works"
        >
          Works
        </a>
        <a
          className={styles.headerURL}
          href="https://github.com/bpaulsen0?tab=repositories"
          target='_blank' rel='noopener noreferrer'
        >
          Repositories
        </a>
        <a
          className={styles.headerURL}
          href="/personal"
        >
          Personal
        </a>
      </header>
      <main className={styles.main}>
        <a className={styles.title}>
          Benjamin Paulsen 
        </a>
        <a  className={styles.description}
            href='https://www.linkedin.com/in/ben-paulsen-0823ba1b9'
            target='_blank' rel='noopener noreferrer'
        >
            Linkedin
        </a>
        <row className={styles.row}>
            <column className={styles.columnl}><a>1610 E 5 th. St. Apt. B</a><a>Duluth, MN 55812</a></column>
            <column className={styles.columnr}><a>(715) 292-5047</a><a>benjaminpaulsen0@gmail.com</a></column>
        </row>
        <a className={styles.downloadInst} href="/BPaulsenResume.pdf" download>click to download</a>
      </main>
      
    </div>
  )
}

{/**
"https://nextjs.org"
"https://nextjs.org/docs"
"https://nextjs.org/learn"
"https://github.com/vercel/next.js/tree/canary/examples"
"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
*/}