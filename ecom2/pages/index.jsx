
// import { Inter } from 'next/font/google'
// import {client} from '../lib/client'


// const inter = Inter({ subsets: ['latin'] })

// interface Product {
//   slug: string;
//   // add more properties as needed
// }

// interface Person {
//   slug: string;
//   name: string;
//   family:string;
//   email:string
//   // add more properties as needed
// }

// interface HomeProps<T> {
//   products: Product[];
//   people: Person[];
// }


// export default function Home<T>({products,people}:HomeProps<T>) {
//   console.log(products)
//   return (
//     <>
//       {people.map(p=>(
//         <div style={{  display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
//         alignItems: 'center', // vertically center span elements
//         color: 'blue',
//         border: '1px solid black',
//             padding: '10px'
//             }} key={p.slug}>
//           <span>{p.name}</span>
//           <span>{p.family}</span>
//           <span>{p.email}</span>
//          </div>
        
//         ))}
//     </>
//   )
  
// }

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const query2= '*[_type == "people"]';
//   const people = await client.fetch(query2);


//   return {
//     props: { products,people }
//   }
// }

import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  console.log(products)
  return(
    <>
      <div>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
        <div className='products-heading'>
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
        </div>
        <div className='products-container'>
        {['product1', 'product1'].map((product)=>product)}
        </div>

      </div>
    </>

  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;