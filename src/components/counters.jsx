import react, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    const {onReset, onDelete, onIncrement, counters} = this.props
    
    return (
      <div>
        <button className="btn btn-secondary" onClick={onReset}>
          Reset
        </button>
        {counters.map((item) => (
          <Counter
            key={item.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={item}
            />
        ))}
      </div>
    );
  }
}

export default Counters;
