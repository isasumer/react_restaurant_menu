import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addChart } from "../actions/action";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  /* border:1px solid blue; */
  width: 30%;
`;
const Image = styled.img`
  width: 30%;
  height: 175px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
`;
const Content = styled.div`
  position: relative;
  padding-left: 10px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid gray;
`;
const Subtitle = styled.p``;
const Price = styled.p``;
const Desc = styled.div`
  padding-top: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 150px;
  left: 55px;
  background-color: #d2f6ff;
  border-radius: 20px;
  height: 26px;
  cursor: pointer;
  :hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
}
`;

const Menu = (props) => {
  return (
    <Container>
      {props.menuList.map((item) => {
        return (
          <Wrapper key={item.id}>
            <Image src={item.img}></Image>
            <Content>
              <Title>
                <Subtitle>{item.title}</Subtitle>
                <Price>{item.price}</Price>
              </Title>
              <Desc>{item.desc}</Desc>
              <Button
                onClick={() => {
                  props.addChart(item);
                }}
              >
                Add to Cart
              </Button>
            </Content>
          </Wrapper>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state, props) => {
  return {
    menuList:
      props.selectedCategory === "All"
        ? state.menuList
        : state.menuList.filter(
            (item) => item.category === props.selectedCategory
          ),
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addChart })(Menu);
