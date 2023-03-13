
import { Inter } from 'next/font/google'
import {client} from '../lib/client'


const inter = Inter({ subsets: ['latin'] })

interface HomeProps<T> {
  products: T[];
}


export default function Home<T>({products}:HomeProps<T>) {
  return (
    <>
      hi
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