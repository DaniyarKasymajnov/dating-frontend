import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {FooterCSS, StyledLink, H2} from './Styled'

class Footer extends Component {
  render() {
    return (
      <FooterCSS>
        <H2>For more details</H2>
        <StyledLink to="/termofservices">Term of Services </StyledLink> 
        <StyledLink to="/termofservices">Term of Services </StyledLink>
        <StyledLink to="/termofservices">Term of Services </StyledLink>
      </FooterCSS>
    );
  }
}

export default Footer;
