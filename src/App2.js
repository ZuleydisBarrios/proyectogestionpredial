import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Main from './components/Main';
import SobreNosotros from './components/SobreNosotros';
import ContenedorInfo from './components/ContenedorInfo';
import FormRegistro from './components/FormRegistro';


function App2() {
  return (
    <div>
      <TopBar />
      <Header />
      < main id="main" >
      <FormRegistro />
      </main >
      <Footer />
    </div >
  );
}

export default App2;