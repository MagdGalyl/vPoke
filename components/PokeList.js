// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchPokes } from "../actions";

// class PokeList extends Component {
//   componentDidMount() {
//     this.props.fetchPokes();
//   }

//   renderList() {
//     return <div>lol</div>;
//   }

//   render() {
//     return <div className="ui relaxed divided list">{this.renderList()}</div>;
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state.pokes);
//   return { pokes: state.pokes };
// };

// const mapDispatchToProps = { fetchPokes };

// export default connect(mapStateToProps, mapDispatchToProps)(PokeList);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokes } from "../actions";
import { useDispatch } from "react-redux";

import PokeCard from "./PokeCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PokeList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    return props.pokes.map(({ id, base, name, img }) => {
      const { Attack: atk, Defense: def } = base;
      const pName = name.english;
      return (
        <div key={id}>
          <Col>
            <PokeCard id={id} name={pName} atk={atk} def={def} imgSrc={img} />
          </Col>
        </div>
      );
    });
  };

  return (
    <Container>
      <Row className="row-cols-sm-2 row-cols-md-3 g-3">{renderList()}</Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { pokes: state.pokes };
};

const mapDispatchToProps = { fetchPokes };

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
