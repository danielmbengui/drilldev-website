import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomeComponent from '../components/Home/HomeComponent';

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      
      {
 "Apprenez à créer de belles images, quelle que soit votre expérience en matière de conception artistique."     
}</>
<HomeComponent />
    </>
  )
}
