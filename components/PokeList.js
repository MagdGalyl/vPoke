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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PokeCard from "./PokeCard";

function PokeList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    return props.pokes.map((poke) => {
      const { id, base, name, img } = poke;
      const { Attack: atk, Defense: def } = base;
      const pName = name.english;
      return (
        <div key={id}>
          <Col>
            <PokeCard
              poke={poke}
              id={id}
              name={pName}
              atk={atk}
              def={def}
              imgSrc={img}
              addFav={props.addFav}
            />
          </Col>
        </div>
      );
    });
  };

  return (
    <Row className="row-cols-sm-2 row-cols-md-3 g-3">
      {renderList()}
      {/* PlaceHolder */}
    </Row>
  );
}

const mapStateToProps = (state) => {
  return { pokes: state.pokes };
};

const mapDispatchToProps = { fetchPokes };

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
