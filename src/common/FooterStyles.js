import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 5px 10px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height:35px;
  
   
  //@media (max-width: 1000px) {
   // padding: 70px 30px;
  //}
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: none;
   
  //&:hover {
     // color: green;
      //transition: 200ms ease-in;
 // }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  
`;
