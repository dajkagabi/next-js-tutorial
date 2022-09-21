import Link from 'next/link'


const Error = () => {

    return (
        <div className="not-found">
            <h1>Oops</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link> </p>
        </div>
      );
}
 
export default Error;
