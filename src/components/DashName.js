import React, { Component } from 'react';

class DashName extends Component {
    state= {
        actualDashName: this.props.actualDashName,
    }

    setDashNameNow() {
        this.props.setDashName(this.state.actualDashName);
    }

    setLocalDashName = (e) => {
        this.setState({ actualDashName: e.target.value });
        e.target.parentElement.lastElementChild.style.opacity = 1;
    }

    render (){
  return (
        <div className="dashName">

            <input type="text" id="nameInput" className="board-names"
                                onChange={this.setLocalDashName}
                                value={this.state.actualDashName}
                                placeholder="dasboard name" />
            <button className="saveButton" onClick={this.setDashNameNow.bind(this, this.props.setDashName)}>Save</button>
      
        </div>
          
      );
  }
}

export default DashName;
