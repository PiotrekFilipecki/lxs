import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {isMobile} from 'react-device-detect';
import Protect from "react-app-protect";
import "react-app-protect/dist/index.css";


const VideoTrigger = () => {
  if(!isMobile) {
    return <source src="https://www.datocms-assets.com/26125/1669813896-bgdesktop.mp4" type='video/mp4'/>
  } else {
    return <source src="https://www.datocms-assets.com/26125/1669814018-bgmobile.mp4" type='video/mp4'/>
    
  }
}

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>LXS Land</title>
        <meta name="description" content="LXS Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <video autoPlay playsInline loop muted className={styles.videobg}>
          <VideoTrigger />

          {!isMobile }
            
        </video>

        <div className={styles.wrapper}>
          <img className={styles.coverimage} src='https://www.datocms-assets.com/26125/1669814297-lxscover.png' />
          <a href="#">
            <img src="https://www.datocms-assets.com/26125/1669814626-orderbutton1-edited.png" />
          </a>
        </div>

    </div>
  )
}
