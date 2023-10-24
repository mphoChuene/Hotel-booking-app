import React from "react";

const BookedUnit = (props) => {
  const { roomDetails } = props.location.state;

  return (
    <div>
      <h2>Booked Unit</h2>
      <p>Name: {roomDetails.name}</p>
      <p>Name: {roomDetails.image}</p>
      {/* Display other room details using roomDetails */}
    </div>
  );
};

export default BookedUnit;
