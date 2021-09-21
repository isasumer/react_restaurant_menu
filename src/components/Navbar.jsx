import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Container = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 10px;
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
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.span`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;


const Input = styled.input`
  border: none;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 15px;
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