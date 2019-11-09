import React, { useEffect } from "react";
import ReactSwipe from "react-swipe";
import { connect } from "react-redux";
import { fetchFlightDestination } from "../redux/modules/destination/action";

function Home(props) {
  const { general } = props;
  useEffect(() => {
    props.fetchFlightDestination();
  }, [general]);
  let reactSwipeEl;

  return (
    <div className="home container">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
}

export default connect(
  store => {
    return {
      general: store.general
    };
  },
  {
    fetchFlightDestination
  }
)(Home);
