import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then( (res) => res.json() )
    .then( (json) => {
      console.log(json);
      setCoins(json);
      setLoading(false);
    })
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>The Coins ! { loading ? null : `(Total Coins : ${coins.length})` }</h1>
        {loading ? <div className={styles.loading}>Loading ...</div> :
          <ul>
            {coins.map((coin)=> (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
