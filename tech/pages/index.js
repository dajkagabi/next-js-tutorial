import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
 
  <>
    <Head>
      <title>Robots List | Home</title>
    </Head>
    <div>
    <h1>Homepage</h1>
    <p>Consequat aliquip sunt Lorem eiusmod cillum qui esse ex officia ut do. Lorem commodo enim aliquip ea Lorem amet exercitation labore tempor. Lorem pariatur labore incididunt duis enim.</p>

    <p>Esse aliqua exercitation amet dolore do ex aliquip voluptate reprehenderit nisi eiusmod aliqua. Nostrud veniam culpa nostrud minim ex ut do enim et. Aliqua enim minim cillum et aliquip exercitation cillum mollit ex velit dolore ut commodo nisi. Mollit consectetur ut est voluptate commodo sit consectetur nisi ad eu elit consectetur reprehenderit sit. Occaecat elit consectetur veniam ad pariatur dolor in aliqua exercitation mollit esse nulla Lorem minim.</p>

    <p>Voluptate do nostrud do fugiat cillum. Anim minim pariatur excepteur pariatur. Aute id officia occaecat tempor cupidatat dolore in ipsum. Cillum cupidatat ut qui labore esse incididunt irure ea. Laboris consectetur occaecat ex consectetur laboris. Lorem dolore Lorem adipisicing sint cupidatat elit elit labore. Ut laborum dolore commodo nulla cillum Lorem duis laboris incididunt irure.</p>
    <Link href="/robots">
      <a  className={styles.btn}>See Robots Listing</a>
    </Link>
  </div>
  </>
  )
}
