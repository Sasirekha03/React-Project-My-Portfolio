import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
 
} from "./FooterStyles";
import s1 from './sm1.png';
import s2 from './sm2.jpg';
import s3 from './sm3.png';

function Footer() {
  return (
    
    <Box>
      <Container>
        <Row> <Column>
          </Column>
          <Column>
          <FooterLink href="#"> <a
           href="https://www.linkedin.com/in/sasirekha-r"
           target="_blank"
           rel="noreferrer"
            >
              <img
                src={s1}
                style={{width:"30px"}}
                alt="email"
              />
            </a></FooterLink>
          </Column>
          <Column>
          <FooterLink href="#"><a
              href="mailto:727721euec134@skcet.ac.in"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={s2}
                style={{width:"30px"}}
                alt="email"
              />
            </a></FooterLink>
          </Column>
          <Column>
          <FooterLink href="#"><a
              href="https://github.com/Sasirekha03"
               target="_blank"
               rel="noreferrer"
            >
              <img
                src={s3}
                style={{width:"30px"}}
                alt="email"
              />
            </a></FooterLink>
          </Column>
          </Row>
      </Container>
    </Box>
  
  
     
  );
 

}

export default Footer;