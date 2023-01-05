// styled
import styled from "styled-components"

// router
import { Link } from "react-router-dom";

// components
import CartIcon from './CartIcon.js';

// redux
import { connect } from "react-redux";

const Nav = ({cart}) => {
  return (
    <StyledNav>
        <Link to="/" id="logo">Via Napoli</Link>
        <div className="nav-links">
            <Link id="home-link" to="/">Home</Link>
            <Link to="/order" style={{ marginLeft: cart.length < 1 ? 'auto': '0' }}>Order Online</Link>
            {
                cart.length === 0 
                ? <></>
                : <CartIcon /> 
            }
        </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    @media(max-width: 650px){
        min-height: 5vh;
    }
    #logo {
        color: red;
        font-size: 2em;
        font-family: 'Lobster', cursive;
        @media(max-width: 650px){
           font-size: 1.5em;
        }
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 220px;
        width: 100%;
        @media(max-width: 435px){
            max-width: 200px;
        }
        a {
            font-size: 1em;
            color: white;
            &:hover {
               text-decoration: underline;
               text-underline-position: under;
            }
            @media(max-width: 650px){
                font-size: 14px;
            }
        }
    }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Nav);