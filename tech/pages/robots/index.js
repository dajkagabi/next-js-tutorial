import Head from "next/head";
import styles from '../../styles/Robot.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return {

        props: {robots: data}
    }
}

const Robots = ({robots}) => {
    return ( 
        <>
    <Head>
      <title>Robots List | Robots List</title>
    </Head>
        <div>
            <h1>All Robots</h1>
       
            {robots.map(robots =>(
                <Link href={'/robots/' + robots.id} key={robots.id}>
                        <a className={styles.single}>
                            <h3>{robots.name}</h3>
                        </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Robots;
