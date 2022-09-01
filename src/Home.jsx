import './style/css/style.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
/* import ItemDetailContainer from './containers/ItemDetailContainer' */

const Home = () => {
  return(
    <>
    <div className='app'>
      <Navbar />
      <h1>Productos:</h1>
      <div className='productos-container'>
      <ItemListContainer/>
      </div> 
      {/* <ItemDetailContainer/> */}


    </div>
    </>
 );
}


export default Home;