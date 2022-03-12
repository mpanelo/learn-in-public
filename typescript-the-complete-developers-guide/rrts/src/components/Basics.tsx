import React, { useState } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

/* Functional Component */

const App = (props: AppProps): JSX.Element => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>onDecrement</button>
      <div>{counter}</div>
    </div>
  );
};

/* Class Component */

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Inc</button>
//         <button onClick={this.onDecrement}>Dec</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDOM.render(<App color="red" />, document.getElementById("root"));
