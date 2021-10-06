import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mobile from "./Responsive";

const Container = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 15px;
  padding-left: 10px;
  ${mobile({ paddingLeft: "0px" })};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  ${mobile({ display: "none" })};
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;

const Input = styled.input``;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 15px;
  ${mobile({ fontSize: "1rem", marginRight: "5px" })};
`;

const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Right>
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <MenuItem>Call Us</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem> Sign In </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={props.cart.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
