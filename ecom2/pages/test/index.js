import React from 'react';

import { client } from '../../lib/client';

import { Product, FooterBanner, HeroBanner, Card } from '../../components';

export default function Test({ products}){

return(
<>


        <div style={{display:'flex', gap:'10rem'}}>
            {products.map((p)=>{
                return (
                <Card p={p}/>
            
                )
            })}

        </div>
    
</>

)

}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
  
    return {
      props: { products }
    }
  }