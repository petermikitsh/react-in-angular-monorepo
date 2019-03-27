import { connect } from 'react-redux';
import React from 'react';
import { Helmet } from 'react-helmet';
import Styles from './Home.css';
import * as CounterActions from '../actions/counter';

interface HomeProps {
  count: Number;
  increment: Function;
  incrementAsync: Function;
}

const Home = ({ count, increment, incrementAsync }: HomeProps) => {
  const onIncrement = (e: React.MouseEvent) => {
    increment();
  };

  const onIncrementAsync = (e: React.MouseEvent) => {
    incrementAsync();
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={Styles.title}>Home</h1>
      <p>Count: { count }</p>
      <button onClick={onIncrement}>+ Increment</button>
      <button onClick={onIncrementAsync}>+ Increment in 1 sec</button>
    </React.Fragment>
  );
};

function mapStateToProps(state: any) {
  return { count: state.counter };
}

function mapActionsToProps() {
  return CounterActions;
}

export default connect(mapStateToProps, mapActionsToProps())(Home);
