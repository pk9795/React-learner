import React, { Component } from 'react';

class ChangeName extends Component{

state = {
  name:'prashant'
}

changeName = (newName) =>{
  this.setState({
    name:newName
  })
}

changeNameFromInput = (event) =>{
  this.setState({
    name:event.target.value
  })
}

	render(){
		return(

      <div className = "app">
        <br/><br/>
        <button onClick={() => this.changeName('awesome name')}>Change State</button>
        <button onClick={this.changeName.bind(this,'awesome prince ')}>Change State using bind</button>
        <br/><br/>
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
        <div>{this.state.name}</div>

      </div>
		
			)
	}
}

export default ChangeName;