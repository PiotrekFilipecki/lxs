import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {isMobile} from 'react-device-detect';


const VideoTrigger = () => {
  if(!isMobile) {
    return <source src="https://blossom-assets.s3.eu-central-1.amazonaws.com/bgdesktop.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQCqDaGuiWtEl53h%2FjGxLIU%2BekaD2UYkSKgkehQXLJmvEAIhAJgkSJAegx7hph42iclPteHU45yRmKHENwVyfQqM3E5MKu0CCKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAxoMODkwNzc2NTM2NDUwIgyOjBig00HCbMhmMMMqwQImwMkpxWjZqehc0B1kK4fTY0H%2BI3Vwc2L6Kle5%2FDUDSWBSGpfT1ILRe472LSU9UNmDqmqR9y2WBxnaG27A40jcQtVOzBw7N6Re9YAlPV5ZYXtbhoLId6WVGgmZOUYMCfcCfomNUfzs7h%2BZ2uG7sxj1DERkvRs5dfOsMJL%2BU%2FuYdP5Hx9ovXAHNACB3UvoSPe7NudkLhSZGmqy7qSkWmdGycLPxubiXK80nmCCofbdKp4j%2F8aq1fPfp3Z62VhLQtZ7RRN4ySlIgUZabePbJuohL8RynMQVlwqhwIOBNV1vPvls52%2FKkbF7XxQL8lB87qoMIW8uJUBqgByiy%2Fmd1UMsg0yV%2B9G0idwJy%2FpHQRLZ7Fg3gUxFzLhSO%2BfS0a8IYGplCyBiJLbZaClw1wjsCkbOMlIyV1xkyUg96l9wFbwpWjdcw7%2FymnAY6sgLjMT%2BhiQl8IvDKv2mDS0NQTGfDQNjswaFNLMtzjGc%2B%2BUH7FjaSd1Il2pExVn9kshb%2BG9Vyre2A%2F8dDLQBhecOYAQip5g6k%2F00FVs3PVJDkpB6uOtfNuK2zDZOioQzV4NQFI7B33BnQ1nUvmJqVqvLuA0AIQAhQVX1HWe%2BL5jPzdLLCh7imWbOoNaG%2F1pwqJo%2F%2F2FHiuKyDaBfsLiy%2FASQG5qZqd3FkRhOGgdrzZOz0OwSH9fn%2FoLnIxdASVTvwOgrMysHaBGKs%2FY6wudTXkLU9t%2BKChsIIzyqYMLpIGU%2BiNfKfTwnW4YxvvJks6DBcOec7xGIVeRqXipuQQuy%2B%2Fs3%2FnsxOVOjgX%2BjAAVySqGhJN4JR3TIE7V7Gx1HjmxTYUt9a1j4Rpq1FxC8FIhYB1q4FSPA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221202T090353Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA46ZTLIWBNJACJEZX%2F20221202%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=dd754d88f11e466f8c1c37434ad31860dc687c797d14d583785043f4d133ceb5" type='video/mp4'/>
  } else {
    return <source src="https://blossom-assets.s3.eu-central-1.amazonaws.com/bgmobile.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQCqDaGuiWtEl53h%2FjGxLIU%2BekaD2UYkSKgkehQXLJmvEAIhAJgkSJAegx7hph42iclPteHU45yRmKHENwVyfQqM3E5MKu0CCKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAxoMODkwNzc2NTM2NDUwIgyOjBig00HCbMhmMMMqwQImwMkpxWjZqehc0B1kK4fTY0H%2BI3Vwc2L6Kle5%2FDUDSWBSGpfT1ILRe472LSU9UNmDqmqR9y2WBxnaG27A40jcQtVOzBw7N6Re9YAlPV5ZYXtbhoLId6WVGgmZOUYMCfcCfomNUfzs7h%2BZ2uG7sxj1DERkvRs5dfOsMJL%2BU%2FuYdP5Hx9ovXAHNACB3UvoSPe7NudkLhSZGmqy7qSkWmdGycLPxubiXK80nmCCofbdKp4j%2F8aq1fPfp3Z62VhLQtZ7RRN4ySlIgUZabePbJuohL8RynMQVlwqhwIOBNV1vPvls52%2FKkbF7XxQL8lB87qoMIW8uJUBqgByiy%2Fmd1UMsg0yV%2B9G0idwJy%2FpHQRLZ7Fg3gUxFzLhSO%2BfS0a8IYGplCyBiJLbZaClw1wjsCkbOMlIyV1xkyUg96l9wFbwpWjdcw7%2FymnAY6sgLjMT%2BhiQl8IvDKv2mDS0NQTGfDQNjswaFNLMtzjGc%2B%2BUH7FjaSd1Il2pExVn9kshb%2BG9Vyre2A%2F8dDLQBhecOYAQip5g6k%2F00FVs3PVJDkpB6uOtfNuK2zDZOioQzV4NQFI7B33BnQ1nUvmJqVqvLuA0AIQAhQVX1HWe%2BL5jPzdLLCh7imWbOoNaG%2F1pwqJo%2F%2F2FHiuKyDaBfsLiy%2FASQG5qZqd3FkRhOGgdrzZOz0OwSH9fn%2FoLnIxdASVTvwOgrMysHaBGKs%2FY6wudTXkLU9t%2BKChsIIzyqYMLpIGU%2BiNfKfTwnW4YxvvJks6DBcOec7xGIVeRqXipuQQuy%2B%2Fs3%2FnsxOVOjgX%2BjAAVySqGhJN4JR3TIE7V7Gx1HjmxTYUt9a1j4Rpq1FxC8FIhYB1q4FSPA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221202T090546Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA46ZTLIWBNJACJEZX%2F20221202%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=739136135cf4bc7dd4e651109ced16010d30bbbb6bcf8f42557a90fab259a04a" type='video/mp4'/>
    
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
<meta property="og:image" content="https://blossom-assets.s3.eu-central-1.amazonaws.com/lxscover.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQCqDaGuiWtEl53h%2FjGxLIU%2BekaD2UYkSKgkehQXLJmvEAIhAJgkSJAegx7hph42iclPteHU45yRmKHENwVyfQqM3E5MKu0CCKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAxoMODkwNzc2NTM2NDUwIgyOjBig00HCbMhmMMMqwQImwMkpxWjZqehc0B1kK4fTY0H%2BI3Vwc2L6Kle5%2FDUDSWBSGpfT1ILRe472LSU9UNmDqmqR9y2WBxnaG27A40jcQtVOzBw7N6Re9YAlPV5ZYXtbhoLId6WVGgmZOUYMCfcCfomNUfzs7h%2BZ2uG7sxj1DERkvRs5dfOsMJL%2BU%2FuYdP5Hx9ovXAHNACB3UvoSPe7NudkLhSZGmqy7qSkWmdGycLPxubiXK80nmCCofbdKp4j%2F8aq1fPfp3Z62VhLQtZ7RRN4ySlIgUZabePbJuohL8RynMQVlwqhwIOBNV1vPvls52%2FKkbF7XxQL8lB87qoMIW8uJUBqgByiy%2Fmd1UMsg0yV%2B9G0idwJy%2FpHQRLZ7Fg3gUxFzLhSO%2BfS0a8IYGplCyBiJLbZaClw1wjsCkbOMlIyV1xkyUg96l9wFbwpWjdcw7%2FymnAY6sgLjMT%2BhiQl8IvDKv2mDS0NQTGfDQNjswaFNLMtzjGc%2B%2BUH7FjaSd1Il2pExVn9kshb%2BG9Vyre2A%2F8dDLQBhecOYAQip5g6k%2F00FVs3PVJDkpB6uOtfNuK2zDZOioQzV4NQFI7B33BnQ1nUvmJqVqvLuA0AIQAhQVX1HWe%2BL5jPzdLLCh7imWbOoNaG%2F1pwqJo%2F%2F2FHiuKyDaBfsLiy%2FASQG5qZqd3FkRhOGgdrzZOz0OwSH9fn%2FoLnIxdASVTvwOgrMysHaBGKs%2FY6wudTXkLU9t%2BKChsIIzyqYMLpIGU%2BiNfKfTwnW4YxvvJks6DBcOec7xGIVeRqXipuQQuy%2B%2Fs3%2FnsxOVOjgX%2BjAAVySqGhJN4JR3TIE7V7Gx1HjmxTYUt9a1j4Rpq1FxC8FIhYB1q4FSPA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221202T090604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA46ZTLIWBNJACJEZX%2F20221202%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=acd0c525be3091492b67a3cd65e1573fbf3835a0bae3aac3cb267d87e706eae3"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <video autoPlay playsInline loop muted className={styles.videobg}>
          <VideoTrigger />


            
        </video>

        <div className={styles.wrapper}>
          <img className={styles.coverimage} src='https://blossom-assets.s3.eu-central-1.amazonaws.com/lxscover.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQCqDaGuiWtEl53h%2FjGxLIU%2BekaD2UYkSKgkehQXLJmvEAIhAJgkSJAegx7hph42iclPteHU45yRmKHENwVyfQqM3E5MKu0CCKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAxoMODkwNzc2NTM2NDUwIgyOjBig00HCbMhmMMMqwQImwMkpxWjZqehc0B1kK4fTY0H%2BI3Vwc2L6Kle5%2FDUDSWBSGpfT1ILRe472LSU9UNmDqmqR9y2WBxnaG27A40jcQtVOzBw7N6Re9YAlPV5ZYXtbhoLId6WVGgmZOUYMCfcCfomNUfzs7h%2BZ2uG7sxj1DERkvRs5dfOsMJL%2BU%2FuYdP5Hx9ovXAHNACB3UvoSPe7NudkLhSZGmqy7qSkWmdGycLPxubiXK80nmCCofbdKp4j%2F8aq1fPfp3Z62VhLQtZ7RRN4ySlIgUZabePbJuohL8RynMQVlwqhwIOBNV1vPvls52%2FKkbF7XxQL8lB87qoMIW8uJUBqgByiy%2Fmd1UMsg0yV%2B9G0idwJy%2FpHQRLZ7Fg3gUxFzLhSO%2BfS0a8IYGplCyBiJLbZaClw1wjsCkbOMlIyV1xkyUg96l9wFbwpWjdcw7%2FymnAY6sgLjMT%2BhiQl8IvDKv2mDS0NQTGfDQNjswaFNLMtzjGc%2B%2BUH7FjaSd1Il2pExVn9kshb%2BG9Vyre2A%2F8dDLQBhecOYAQip5g6k%2F00FVs3PVJDkpB6uOtfNuK2zDZOioQzV4NQFI7B33BnQ1nUvmJqVqvLuA0AIQAhQVX1HWe%2BL5jPzdLLCh7imWbOoNaG%2F1pwqJo%2F%2F2FHiuKyDaBfsLiy%2FASQG5qZqd3FkRhOGgdrzZOz0OwSH9fn%2FoLnIxdASVTvwOgrMysHaBGKs%2FY6wudTXkLU9t%2BKChsIIzyqYMLpIGU%2BiNfKfTwnW4YxvvJks6DBcOec7xGIVeRqXipuQQuy%2B%2Fs3%2FnsxOVOjgX%2BjAAVySqGhJN4JR3TIE7V7Gx1HjmxTYUt9a1j4Rpq1FxC8FIhYB1q4FSPA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221202T090604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA46ZTLIWBNJACJEZX%2F20221202%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=acd0c525be3091492b67a3cd65e1573fbf3835a0bae3aac3cb267d87e706eae3' />
          <a href="https://muzyka.sklep.pl/lxs" target="_blank" rel="noreferrer">
            <img src="https://blossom-assets.s3.eu-central-1.amazonaws.com/orderbutton1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQCqDaGuiWtEl53h%2FjGxLIU%2BekaD2UYkSKgkehQXLJmvEAIhAJgkSJAegx7hph42iclPteHU45yRmKHENwVyfQqM3E5MKu0CCKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAxoMODkwNzc2NTM2NDUwIgyOjBig00HCbMhmMMMqwQImwMkpxWjZqehc0B1kK4fTY0H%2BI3Vwc2L6Kle5%2FDUDSWBSGpfT1ILRe472LSU9UNmDqmqR9y2WBxnaG27A40jcQtVOzBw7N6Re9YAlPV5ZYXtbhoLId6WVGgmZOUYMCfcCfomNUfzs7h%2BZ2uG7sxj1DERkvRs5dfOsMJL%2BU%2FuYdP5Hx9ovXAHNACB3UvoSPe7NudkLhSZGmqy7qSkWmdGycLPxubiXK80nmCCofbdKp4j%2F8aq1fPfp3Z62VhLQtZ7RRN4ySlIgUZabePbJuohL8RynMQVlwqhwIOBNV1vPvls52%2FKkbF7XxQL8lB87qoMIW8uJUBqgByiy%2Fmd1UMsg0yV%2B9G0idwJy%2FpHQRLZ7Fg3gUxFzLhSO%2BfS0a8IYGplCyBiJLbZaClw1wjsCkbOMlIyV1xkyUg96l9wFbwpWjdcw7%2FymnAY6sgLjMT%2BhiQl8IvDKv2mDS0NQTGfDQNjswaFNLMtzjGc%2B%2BUH7FjaSd1Il2pExVn9kshb%2BG9Vyre2A%2F8dDLQBhecOYAQip5g6k%2F00FVs3PVJDkpB6uOtfNuK2zDZOioQzV4NQFI7B33BnQ1nUvmJqVqvLuA0AIQAhQVX1HWe%2BL5jPzdLLCh7imWbOoNaG%2F1pwqJo%2F%2F2FHiuKyDaBfsLiy%2FASQG5qZqd3FkRhOGgdrzZOz0OwSH9fn%2FoLnIxdASVTvwOgrMysHaBGKs%2FY6wudTXkLU9t%2BKChsIIzyqYMLpIGU%2BiNfKfTwnW4YxvvJks6DBcOec7xGIVeRqXipuQQuy%2B%2Fs3%2FnsxOVOjgX%2BjAAVySqGhJN4JR3TIE7V7Gx1HjmxTYUt9a1j4Rpq1FxC8FIhYB1q4FSPA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221202T090630Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA46ZTLIWBNJACJEZX%2F20221202%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=559764b72a2df8af6fe7495a2ff0eb3d13884d9ccd2b0e3ce48d5d94fec39e12" />
          </a>
        </div>

    </div>
  )
}
