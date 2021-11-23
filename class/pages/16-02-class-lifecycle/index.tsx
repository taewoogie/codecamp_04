import router from "next/router";
import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";
interface IState {
  count: number;
}
export default class LifeCycle extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
  }

  componentDidUpdate() {
    console.log("수정됨");
  }

  componentWillUnmount() {
    console.log("잘가요");
  }

  onClickMove = () => {
    router.push("/");
  };

  onClickCounter = () => {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        <button onClick={this.onClickMove}>페이지 이동</button>
        {/* <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button> */}
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
