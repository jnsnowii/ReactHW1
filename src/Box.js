import React, { Component } from 'react';
import './css1.css';
import './css2.css';

export class Box extends Component {
  
  state = {
    getValue: ''
  }

  changeValueToInt = (event) => {
    this.setState({getValue:event.target.value});
  }

  render() {

  	var setSubBox = [];

    for (var i = 1 ; i <= this.state.getValue ; i++)
    {
        setSubBox.push(
        	<p className="w3-animate-zoom w3-padding-large w3-border w3-wide w3-text-light-grey w3-center" />
       	);
    }

    return (
		<div className="w3-animate-zoom">
			<p className="w3-padding-large w3-border w3-wide w3-text-light-grey w3-center">
				<a className="w3-small">SubBox   </a>
				<select onChange={this.changeValueToInt} value={this.state.getValue}>
		            <option>-</option>   
		            <option>1</option>
		            <option>2</option>
		            <option>3</option>
		            <option>4</option>
		            <option>5</option>
	          	</select>
	          	{setSubBox}
	        </p>
		</div>
    );
  }
}