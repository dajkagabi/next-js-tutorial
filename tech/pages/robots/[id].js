export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
 
    const paths = data.map(robots => {
      return {
        params: { id: robots.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }

export const getStaticProps = async (context) =>{
        const id = context.params.id;
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const data = await res.json();

        return{
            props: {robot: data}
        }
}



const Details = ({robot}) => {
    return ( 
        <div>
            <h1>{robot.name}</h1>
            <p>Username: {robot.username}</p>
            <p>Email: {robot.email}</p>
            <p>Address: {robot.address.city}</p>
        
        </div>
     );
}
 
export default Details;
