import { useEffect } from 'react';
import axios from '../utils/axios';

const Home = () => {
  const getproduct = async() => {
    try {
      
      const response = await axios.get("/products")
      console.log(response.data);

    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(() => {
    console.log("Home.jsx mounted");
    getproduct();

    return () => {
      console.log("Home.jsx unmount");
    };
  });

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>Get Product</button>
      
    </div>
  )
}

export default Home