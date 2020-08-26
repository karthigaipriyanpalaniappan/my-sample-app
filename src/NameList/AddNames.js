import React from 'react';


export default class AddNames extends React.Component{
    constructor(props){
      super(props);
      this.addName = this.addName.bind(this);
      this.state={
        error: undefined
      }
    }
  addName(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addName(option);

    e.target.elements.option.value = "";
    this.setState(()=>({error}))
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addName}>
          <input autoComplete='Off' type='text' name='option' placeholder='Enter Name'/>
          <button >Add Name</button>
        </form>
      </div>
    );
  }
}