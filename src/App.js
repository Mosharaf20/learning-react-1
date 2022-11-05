import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 1 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalItems={this.totalItemCount()} />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }

  totalItemCount(){
    return this.state.counters.filter((item) => item.value !== 0).length;
  }

  handleIncrement = (item) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(item);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    let counters = this.state.counters.filter((item) => item.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });

    this.setState({ counters });
  };
}

export default App;
