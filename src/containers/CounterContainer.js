import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsyc } from "../modules/counter";
import Counter from "../components/Counter";

// 컨테이너 컴포넌트
const CounterContainer = ({ number, increaseAsync, decreaseAsyc }) => {
  return (
    <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsyc} />
  );
};

export default connect(
  state => ({
    number: state.counter
  }),
  { increaseAsync, decreaseAsyc }
)(CounterContainer);
