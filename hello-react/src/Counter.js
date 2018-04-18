import React, { Component } from 'react';

const Prob = () => {
    throw (new Error('버그가 나타났다!'));
    return(
        <div></div>
    )
}


class Counter extends Component {
  state = {
    number: 0,
    error : false
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentDidCatch(error, info){
      this.setState({
          error : true
      })
  }
  

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    if(this.state.error === true) return( <div>에러발생!</div>)
    return (
      <div>
        <h4>카운터</h4>
        <div>값: {this.state.number}</div>
        {this.state.number ===4 && <Prob/>}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;