import React from 'react'
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (

   <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
  
  
  
}
