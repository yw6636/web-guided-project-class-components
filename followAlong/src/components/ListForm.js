import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor (){
    super();
    this.state = {
      item: 'something'
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    event.preventDefault();
    this.setState({...this.state, item: e.target.value})
  };

  // class property to submit form
  submitForm = event => {
    event.preventDefault();
    this.props.addItem(event, this.state.item);
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;

