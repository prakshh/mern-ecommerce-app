import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { UserGroupIcon } from '@heroicons/react/solid';
import { LogoutIcon } from '@heroicons/react/outline';
import { useCallback, useState } from 'react';
import { logout } from '../redux/userRedux';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "14px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOPPERS STOP.</Logo>
        </Center>
        <Right>
          {!user && (
            <>
              <Link to="/register" style={{ textDecoration: 'none' }}><MenuItem>REGISTER</MenuItem></Link>
              <Link to="/login" style={{ textDecoration: 'none' }}><MenuItem>SIGN IN</MenuItem></Link>
            </>
          )}
          
          {user && (
            <>
            {/* <LogoutIcon className="h-6 w-6 text-gray-600 mr-2 " /> */}
            <div onClick={handleLogout}>
              <MenuItem>LOG OUT</MenuItem>
            </div>
              {/* <div
                onClick={() => setShowPopup((prev) => !prev)}
                className="relative cursor-pointer ml-[10px] border  space-x-3 rounded p-2 flex justify-between items-center "
              >
                <UserGroupIcon className="w-6 h-6 " />
                <div className="text-[12px] sm:text-[14px] tracking-wide ">
                  {user?.username.toUpperCase()}
                </div>
                <div
                  onClick={handleLogout}
                  className={`bg-white shadow-lg absolute bottom-[-70px] ${
                    !showPopup && 'opacity-0'
                  } z-[3] p-4 rounded-md flex items-center
                  transition duration-300 ease-in-out `}
                >
                  <LogoutIcon className="h-6 w-6 text-gray-600 mr-2 " />
                  <button className="text-[12px] sm:text-[14px] ">
                    LOGOUT
                  </button>
                </div>
              </div> */}
            </>
          )}


          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
