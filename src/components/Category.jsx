import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;
const Button = styled.button`
width: 100px;
height:50px;
margin:5px;
border-radius:10px;

`;

const Category = ({ categoryList, changeList }) => {
  return (
    <Wrapper>
      {categoryList.map((category) => (
        <Button
        onClick={()=>changeList(category)}>{category}</Button>
      ))}
    </Wrapper>
  );
};

export default Category;
