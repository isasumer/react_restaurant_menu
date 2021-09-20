import {useState} from 'react';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Category from "./components/Category"
import Menu from "./components/Menu"
import Cart from "./pages/Cart"
import data from "./components/data"
import styled from "styled-components";

const Container = styled.div`
/* height:100vh; */
background-color:orange;
display:flex;
flex-direction:column;
align-items: center;
`;
const categoryList =["All", ...new Set(data.map((item)=>item.category))]

const App = () => {
  const [menuItems, setmenuItems] = useState(data)

  const changeList = (category) => {
    category === "All"
      ? setmenuItems(data)
      : setmenuItems(data.filter((item) => item.category === category));
      console.log(menuItems)
  };

  return (
    <Container>
      <Navbar/>
      <Header/>
      <Category categoryList={categoryList} changeList={changeList}/>
      <Menu menuItems={menuItems}/>
      <Cart />
    </Container>
  )
}

export default App
