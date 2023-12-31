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
import { useNavigate } from "react-router-dom";

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
const Room = (unit) => {
  const navigate = useNavigate();

  const viewUnit = () => {
    navigate(`/viewroom/${unit.unitId}`);

    console.log(unit.unitId);
  };
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
          image={unit.Img}
          style={{
            objectFit: "contain",
            alignSelf: "center",
            justifySelf: "center",
            left: "-10vw",
          }}
        />
        <Wrapper>
          <SubContainer>
            <Heading>{unit.name}</Heading>
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
            R{unit.price} ZAR night
          </Price>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <button onClick={viewUnit}>View</button>
          </CardActions>
        </Wrapper>
      </Container>
    </Card>
  );
};

export default Room;
