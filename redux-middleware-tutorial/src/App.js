import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counterActions from "./modules/counter";
import * as postActions from "./modules/post";

class App extends Component {

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
      if(this.props.number !== prevProps.number){
          this.loadData()
      }
  }

  loadData = () => {
    const { PostActions, number } = this.props;
    PostActions.getPost(number);
  };

  render() {
    const { CounterActions, number, post, error, loading } = this.props;
    
    return (
      <div>
        <h1>{number}</h1>
        {loading ? (
          <h2>로딩중^^</h2>
        ) : error ? (
          <h2>오류발생^^</h2>
        ) : (
          <div>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
          </div>
        )}

        <button onClick={CounterActions.increment} > +</button>
        <button onClick={CounterActions.decrement}>-</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    number: state.counter,
    post: state.post.data,
    loading: state.post.pending,
    error: state.post.error
  }),
  dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(App);
