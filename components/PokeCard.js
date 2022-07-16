import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const PokeCard = ({ id, name, atk, def, imgSrc, addFav, poke }) => {
  // console.log(props);

  return (
    <Card className="shadow-sm">
      {/* <Card.Img
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        src={imgSrc}
      /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="d-flex justify-content-center">
          <Button variant="btn btn-outline-primary" disabled>
            Attack: {atk}
          </Button>
          <Button variant="btn btn-outline-danger" disabled>
            Defense: {def}
          </Button>
        </div>

        <Button
          className="mega-btn"
          variant="primary"
          onClick={() => addFav(poke)}
        >
          ADD TO FAVORITES
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
