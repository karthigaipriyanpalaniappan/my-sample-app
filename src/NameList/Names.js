import React from 'react';
import AddNames from './AddNames.js';
import NameList from './NameList.js';


export default class Names extends React.Component{
    constructor(props){
      super(props);
      this.addName = this.addName.bind(this);
      this.state = {
        names: []
      }
    }

    addName(member) {
          this.setState((prevState) => ({ names: prevState.names.concat([member]) }))
        }

  render() {
    return (
      <div>
        <AddNames addName={this.addName} />
        <NameList
              names={this.state.names}
            />}

        
      </div>
    );
  }
}