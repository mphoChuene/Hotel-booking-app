import {
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  diplay: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SocialIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const ContactItem = styled.div`
  cursor: pointer;
`;

const PaymentTypes = styled.div`
  width: 100%;
  height: 100px;
  background-image: url("https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Paradise Lodge</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          esse id iste explicabo placeat dolore, minus beatae eaque, sequi enim
          culpa nostrum quia ipsum accusamus rerum perferendis voluptates
          doloremque distinctio!
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Bookings</ListItem>
          <ListItem>Community forum</ListItem>
          <ListItem>Help Center</ListItem>
          <ListItem>Disability support</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Cancellation support</ListItem>
          <ListItem>Favourite</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "15px" }} />
          22 helen Joseph, South Gate, Johannesburg
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "15px" }} />
          +27 65 2433 454
        </ContactItem>
        <ContactItem style={{ marginLeft: "40px" }}>
          Developed with ❤️ by Mpho Chuene
        </ContactItem>
        <ContactItem>
          <PaymentTypes />
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
