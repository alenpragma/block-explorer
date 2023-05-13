import axios from 'axios';

//const API_KEY = 'coinrankingd047dc230e2b59332b8cc15e37bb477497cc41230fb7cd5c';
//const API_URL = 'https://api.coinranking.com/v2/coin/htA2C2yTr/price';

//let mindCoinPrice = null;

//async function fetchMindCoinPrice() {
// try {
 //   const response = await axios.get(API_URL, {
  //    headers: {
   //     'x-access-token': API_KEY
  //    }
  //  });
 //   mindCoinPrice = response.data.data.price;
 // } catch (error) {
  //  console.log(error);
//}
//}


//fetchMindCoinPrice();


//setInterval(fetchMindCoinPrice, 10000);

//export { mindCoinPrice };

//import axios from 'axios';

const API_KEY = 'coinrankingd047dc230e2b59332b8cc15e37bb477497cc41230fb7cd5c';
const API_URL = 'https://api.coinranking.com/v2/coin/htA2C2yTr/price';

let mindCoinPrice = localStorage.getItem('mindCoinPrice') || null;

async function fetchMindCoinPrice() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-access-token': API_KEY
      }
    });
    const newPrice = response.data.data.price;
    if (newPrice !== mindCoinPrice) {
      mindCoinPrice = newPrice;
      localStorage.setItem('mindCoinPrice', mindCoinPrice);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchMindCoinPrice();
setInterval(fetchMindCoinPrice, 10000);

export { mindCoinPrice };


