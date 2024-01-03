import React, { useState } from "react";
import {
  Rating,
  Card,
  CardMedia,
  CardActions,
  Button,
  Skeleton,
} from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  padding: 16px;
`;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensure the image doesn't overflow */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled(CardMedia)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0px;
  transition: transform 0.3s ease-in-out;

  ${Wrapper}:hover & {
    transform: scale(1.2);
  }
`;

const Heading = styled.h2`
  font-size: 23px;
  margin-bottom: 8px;
`;

const Text = styled.li`
  margin-top: 4px;
  list-style-type: none;
`;

const Price = styled.h4`
  font-size: 18px;
  margin-top: 15px;
`;

const ActionButton = styled(Button)`
  && {
    background-color: transparent;
    color: dodgerblue;
    border: 1px solid dodgerblue;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: dodgerblue;
      color: #fff;
    }
  }
`;

const Room = (unit) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const viewUnit = () => {
    navigate(`/viewroom/${unit.unitId}`);
    console.log(unit.unitId);
  };

  const [rating, setRating] = useState(4);
  // const roomDate = new Date(unit.Date.toDate());

  return (
    <Card
      sx={{
        maxWidth: 320,
        alignItems: "center",
        margin: 10,
        justifyContent: "center",
        // backgroundColor: "blue",
        // display: "flex",
        // flexDirection: "column",
      }}>
      <Container>
        {loading ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Skeleton
              variant="rectangular"
              width={345}
              height={200}
              sx={{ marginTop: 1 }}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={245}
              height={20}
              sx={{ marginTop: 2, marginLeft: 1 }}
              animation="pulse"
            />
            <Skeleton
              variant="rectangular"
              width={245}
              height={20}
              sx={{ marginTop: 1, marginLeft: 1 }}
            />

            <Skeleton
              variant="rectangular"
              width={330}
              height={40}
              sx={{
                marginTop: 1,
                marginLeft: 1,
                // alignSelf: "center",
                // justifySelf: "center",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            />
          </div>
        ) : null}

        <Wrapper>
          <Image
            component="img"
            src={unit.Img}
            alt={unit.name}
            onLoad={() => setLoading(false)}
          />
        </Wrapper>

        {!loading && (
          <SubContainer>
            <Heading>{unit.name}</Heading>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              readOnly
              // sx={{ marginLeft: "10px" }}
            />
            <Text>beach and garden views</Text>
            {/* <Text>{roomDate.getFullYear()}</Text> */}

            <Price style={{ textAlign: "left", marginTop: "8px" }}>
              R{unit.price} ZAR night
            </Price>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "16px",
              }}>
              <ActionButton onClick={viewUnit}>View</ActionButton>
            </CardActions>
          </SubContainer>
        )}
      </Container>
    </Card>
  );
};

export default Room;
