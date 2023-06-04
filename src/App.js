// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import SearchInput from "./components/SearchInput";
import './styles/styled.css';

// const api = "https://teste.tugare.com.br/wp-json/wp/v2/pages/59?acf_format=standard";

function App() {
  // const [info, setInfo] = useState({});
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   if (text) {
  //     fetch(`${api}anime?filter[text]=${text}&page[limit]=10`)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         setInfo(response);
  //       });
  //   }
  // }, [text]);

  return (
    <div>
      <Navbar />

      <div>
        BLOCO 1

      </div>
    
    
      <Footer />
    </div>
    // <div>
    //   <h5>Nutrição Perental Total</h5>
    // </div>
    // <div>
    //   <h5>Nutrição Perental Domiciliar</h5>
    // </div>
    // <div>
    //   <h5>Nutrição Perental Total</h5>
    // </div>
    // <div>
    //   Pré Rodapé
    // </div>
    
  );
}

export default App;