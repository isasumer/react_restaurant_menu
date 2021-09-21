import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div``;
const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
`;

const Category = (props) => {
  return (
    <Wrapper>
      {props.categoryList.map((category) => (
        <Button key={category} onClick= {()=> props.setSelectedCategory(category)}>{category} </Button> //onClick={()=>changeList(category)}
      ))}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryList: state.categoryList,
  };
};

export default connect(mapStateToProps)(Category);
