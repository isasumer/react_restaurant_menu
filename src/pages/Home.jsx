import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Category from "../components/Category";
import Menu from "../components/Menu";
import data from "../components/data";
import styled from "styled-components";

const Container = styled.div`
  /* height:100vh; */
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0px;
padding:0px;
`;
const categoryList = ["All", ...new Set(data.map((item) => item.category))];

const Home = () => {
  const [menuItems, setmenuItems] = useState(data);

  const changeList = (category) => {
    category === "All"
      ? setmenuItems(data)
      : setmenuItems(data.filter((item) => item.category === category));
    console.log(menuItems);
  };

  return (
    <Container>
      <Navbar />
      <Header />
      <Category categoryList={categoryList} changeList={changeList} />
      <Menu menuItems={menuItems} />
    </Container>
  );
};

export default Home;
