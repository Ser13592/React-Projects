import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { client } from '../lib/client';


const inter = Inter({ subsets: ['latin'] })

interface Person {
  name: string;
}

interface Props {
  people: Person[];
}


export default function Home({ people }: Props) {
  return (
    <>
    {people.map(p=>{
      return(

      <div>
       <p>{p.name}</p>
       <hr/>
     </div> 
      )
    })}
    </>
  );
}


export const getServerSideProps = async () => {
  const query = '*[_type == "people"]';
  const people = await client.fetch(query);


  return {
    props: { people }
  }
}