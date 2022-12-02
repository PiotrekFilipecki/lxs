import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {isMobile} from 'react-device-detect';


const VideoTrigger = () => {
  if(!isMobile) {
    return <source src="https://blossom-is.online/bgdesktop.mp4" type='video/mp4'/>
  } else {
    return <source src="https://blossom-is.online/bgmobile.mp4" type='video/mp4'/>
    
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LXS Land</title>
        <meta name="description" content="LXS Land" />
        <meta property="og:title" content="LXS Land" />
<meta property="og:site_name" content="LXS Land" />
<meta property="og:url" content="lxs.land" />
<meta property="og:description" content="LXS Land" />
<meta property="og:type" content="" />
<meta property="og:image" content="https://blossom-is.online/lxscover.png"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <video autoPlay playsInline loop muted className={styles.videobg}>
          <VideoTrigger />


            
        </video>

        <div className={styles.wrapper}>

          <img className={styles.coverimage} src="https://blossom-is.online/lxscover.png" />
          <a href="https://muzyka.sklep.pl/lxs" target="_blank" rel="noreferrer">
            <img src="https://blossom-is.online/orderbutton1.png" />
          </a>
        </div>

    </div>
  )
}
