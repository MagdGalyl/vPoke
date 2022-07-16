import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import NavHeader from "./NavHeader";
import PokeList from "./PokeList";
import FavList from "./FavList";

function App() {
  const [favList, setFavList] = useState([]);

  let addFav = (poke) => {
    // console.log(favList);
    setFavList((fl) => [...fl, poke]);
  };

  return (
    <Container fluid>
      <BrowserRouter>
        <NavHeader favList={favList} />
        <Container>
          <Routes>
            <Route path="/" element={<PokeList addFav={addFav} />} />
            <Route path="/fav" element={<FavList favList={favList} />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Container>
  );
}

export default App;

// import React, { Component } from "react";

// export class App extends Component {
//   state = { favList: [] };

//   handleAddFav = (id, name, imgSrc) => {
//     console.log(this.state.favList);
//     const addItem = { id, name, imgSrc };
//     this.setState(addItem);
//   };

//   render() {
//     return (
//       <Container fluid>
//         <BrowserRouter>
//           <NavHeader />
//           <Container>
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <PokeList
//                   // addFav={this.handleAddFav}
//                   />
//                 }
//               />
//               <Route path="/fav" element={<FavList />} />
//             </Routes>
//           </Container>
//         </BrowserRouter>
//       </Container>
//     );
//   }
// }

// export default App;
