import { Inter } from 'next/font/google'
import Footer from '@/Components/common/Footer'
import Hero from '@/Components/common/Hero';
import Navbar from "@/Components/common/Navbar"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Footer></Footer>
    <Hero></Hero>
    <Navbar></Navbar>
    </>
    
  )
}

