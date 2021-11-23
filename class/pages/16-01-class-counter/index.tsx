import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";
interface IState {
  count: number;
}
export default class MyCounterPage extends Component {
  state = {
    count: 0,
  };

  //   onClickCounter() {
  //     //  onclick이 실행 될 때 새로운 환경에서 시작 되므로 지금의 this 는 window를 가리킨다.
  //     //  그렇기 때문에 아래 버튼에 바인드 시켜준다.
  //     console.log(this.state.count);
  //   }

  //   화살표 함수에서는(기능이 보완되어) 바인딩이 즉각 되지만 클래스 함수에서는 바인드 시켜줘야함
  onClickCounter = () => {
    //  onclick이 실행 될 때 새로운 환경에서 시작 되므로 지금의 this 는 window를 가리킨다.
    //  그렇기 때문에 아래 버튼에 바인드 시켜준다.
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        {/* <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button> */}
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
