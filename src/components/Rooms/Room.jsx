import React, { useState } from "react";
import {
  Rating,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: "flex";
  flex-direction: "row";
  align-itmes: "center";
  justify-content: "center";
`;
const SubContainer = styled.div`
  display: "flex";
  flex-direction: "row";
  max-width: "720px";
`;
const Image = styled.img``;
const Wrapper = styled.div``;
const Heading = styled.h2`
  font-size: 23px;
  margin-left: 10px;
`;
const Text = styled.li`
  margin-left: 10px;
  margin-top: 0px;
  padding: 0px;
  list-style-type: none;
`;
const Price = styled.h4`
  font-size: 18px;
  margin-top: 15px;
`;

const Room = ({ unit }) => {
  const [rating, setRating] = useState(4);
  return (
    <Card
      sx={{
        maxWidth: 345,
        alignItems: "center",
        margin: 10,
        justifyContent: "center",
      }}>
      <Container>
        <CardMedia
          component="img"
          image="https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
          style={{
            objectFit: "contain",
            alignSelf: "center",
            justifySelf: "center",
            left: "-10vw",
          }}
        />
        <Wrapper>
          <SubContainer>
            {/* <Heading>{unit.name}</Heading> */}
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              readOnly
              sx={{ marginLeft: "10px" }}
            />
          </SubContainer>
          <Text>beach and garden views</Text>
          <Text>feb 11 -16</Text>
          <Price style={{ textAlign: "left", marginLeft: "10px" }}>
            R2500 ZAR night
          </Price>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <button>View</button>
          </CardActions>
        </Wrapper>
      </Container>
    </Card>
  );
};

export default Room;
