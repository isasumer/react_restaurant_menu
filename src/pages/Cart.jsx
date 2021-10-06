import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e7faff;
  margin: 0px;
  padding: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  width: 80%;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  width: 70%;
  border: 1px solid red;
  display: flex;
`;

const Product = styled.div`
  display: flex;
  flex: 2;
  padding: 5px;
  background-color: orange;
  margin: 5px;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
`;

const ProductName = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Total = styled.div`
  margin: 20px 0 0 120px;
  font-size: 30px;
  font-weight: 200;
`;

const Cart = (props) => {
  const reducer = (x, y) => x + y;
  const totalPrice = props.cart.map((item) => item.price).reduce(reducer, 0);
  console.log(totalPrice);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({props.cart.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <div>
            {props.cart.map((item) => (
              <Product key={item.key}>
                <Image alt={item.title} src={item.img} />
                <ProductName>
                  <span>
                    <b>Name:</b> {item.title}
                  </span>
                  <ProductAmountContainer>
                    <RemoveIcon />
                    <ProductAmount>1</ProductAmount>
                    <AddIcon />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {"$"}
                    {item.price}
                  </ProductPrice>
                </ProductName>
              </Product>
            ))}
          </div>
          <Total>
            <b>Total Price:</b>
            <span>
              {" "}
              {"$"}
              {totalPrice}{" "}
            </span>
          </Total>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
