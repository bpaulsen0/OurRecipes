import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Ben's Website</title>
        {/* <link rel="icon" href="/oie_png.png" /> */}
      </Head>
      {/* <img className={styles.decl} src="/CornerDecoration.png"></img> */}
      {/* <img className={styles.decr} src="/CornerDecoration.png"></img> */}
      <main className={styles.main}>
        {/* <div className={styles.background}></div> */}
        {/* <div className={styles.masonry}>
          <img className={styles.item} src="/DSC_9221.jpg"></img>
          <img className={styles.item} src="/DSC_9254.jpg"></img>
          <img className={styles.item} src="/DSC_8818.jpg"></img>
          <img className={styles.item} src="/DSC_8876.jpg"></img>
          <img className={styles.item} src="/DSC_9099.jpg"></img>
          <img className={styles.item} src="/DSC_9178.jpg"></img>
        </div> */}

        <h1 className={styles.title}>
          Welcome to my Website!
        </h1>
        {/* <div className={styles.timer}>
          <h1>{days} days {hours} hours {minutes} minutes and {seconds} seconds until the big day!</h1>
        </div> */}
        <p className={styles.description}>
          Thank you for checking out my website! Please poke around to get to know me.
        </p>
        {/* <div className={styles.grid}>
          <a
            href="https://forms.gle/WxpvjU3EmtbboS7A6"
            className={styles.card}
          >
            <h2>RSVP! &raquo;</h2>
            <p>Tell us that you're going to show by filling out a quick survey on your phone.</p>
          </a>
          <a
            href="schedule"
            className={styles.card}
          >
            <h2>Schedule &raquo;</h2>
            <p>
              Be prepared by knowing when everything is happening!
            </p>
          </a>
          <a
            href="party"
            className={styles.card}
          >
            <h2>Meet the Party &raquo;</h2>
            <p>
              Meet who we chose to stand with us on our special day!
            </p>
          </a>
          <a
            href="tour"
            className={styles.card}
          >
            <h2>Take the Tour &raquo;</h2>
            <p>
              Try out a few of our favorite spots where we shared our first few dates.
            </p>
          </a>
          <a href="lodging" className={styles.card}>
            <h2>Where to Stay &raquo;</h2>
            <p>We've blocked off a few rooms for your convenience at the AmericInn</p>
          </a>
          <a href="food" className={styles.card}>
            <h2>Where to Eat &raquo;</h2>
            <p>Try some of our favorite places around town to eat.</p>
          </a>
        </div> */}
        
      </main>
      <header className={styles.header}>
        <a
          className={styles.headerURL}
          href="/resume"
        >
          Resume
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