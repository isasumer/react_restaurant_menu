import {useState} from 'react';
import Header from "./components/Header"
import Category from "./components/Category"
import Menu from "./components/Menu"
import data from "./components/data"
import styled from "styled-components";

const Container = styled.div`
height:100vh;
background-color:orange;
display:flex;
flex-direction:column;
align-items: center;
`;
const categoryList =["All", ...new Set(data.map((item)=>item.category))]



const App = () => {
  const [menuItems, setmenuItems] = useState(data)
  const [counter, setCounter] = useState(3)
  const [show, setShow] = useState(true)
  const [list, setList] = useState([])



  const changeList = (category) => {
    category === "All"
      ? setmenuItems(data)
      : setmenuItems(data.filter((item) => item.category === category));
      console.log(menuItems)
  };

  return (
    <Container>
      <p>{counter}</p>
      <button onClick={()=> setCounter(counter*2)}>-</button>
      <button onClick={()=> setShow(!show)}>Show</button>
      <button onClick={()=> setList(...list, counter)}>Ekle</button>
      <p>List:{list}</p>
      {show && <Header/> }
      <Category categoryList={categoryList} changeList={changeList}/>
      <Menu menuItems={menuItems}/>
    </Container>
  )
}

export default App
