import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import mobile from "./Responsive";

const Wrapper = styled.div`
  margin-bottom: 5px;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
  ${mobile({ width: "80px", height: "40px", margin: "3px" })}
`;

const Category = (props) => {
  return (
    <Wrapper>
      {props.categoryList.map((category) => (
        <Button
          key={category}
          onClick={() => props.setSelectedCategory(category)}
        >
          {category}{" "}
        </Button>
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
