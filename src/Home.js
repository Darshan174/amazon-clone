import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
              className='home__image'
              src="https://m.media-amazon.com/images/I/61QH1LQm4KL.jpg"
              alt=""
            />

            <div className='home__row'>
                <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={4}
                />

                <Product 
                id={34324232}
                title='Apple iphone 14 pro max'
                price={139000}
                image='https://http2.mlstatic.com/D_NQ_NP_770607-MLM51559385328_092022-O.jpg'
                rating={4}
                />

            </div>

            <div className='home__row'>
            <Product 
            id={6543421}
            title='Apple MacBook Pro'
            price={129000}
            image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229'
            rating={5}
            
            />
            
            <Product 
            id={233243223}
            title='Sony PlayStation 5'
            price={43000}
            image='https://m.media-amazon.com/images/I/71vWi5Iuz3L._AC_SX385_.jpg'
            rating={5}/>
            
            <Product 
            id={3333323232}
            title='Sony Wireless Noise Cancelling Headphones'
            price={29000}
            image='https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF'
            rating={4}/>
            </div>

            <div className='home__row'>
            <Product 
            id={45356543}
            title='LG OLED TV'
            price={159000}
            image='https://m.media-amazon.com/images/I/81MRU+3RJLL._SX679_.jpg'
            rating={5}/>
            </div>            
        </div>    
    </div>
  );
}

export default Home;
