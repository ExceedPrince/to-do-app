import React, { Component } from 'react';

class NewCard extends Component {
    state= {
        title: "",
        desc: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === "") {
            console.log("kellene egy látható hibaüzenet");
        } else {
            this.props.addTodo(this.state.title, this.state.desc);
        }
    }

    titleChange = (e) => this.setState( { title: e.target.value });
    descChange = (e) => this.setState( { desc: e.target.value });

    render() {
    return (
        <div className="card-ct">

            <form onSubmit={this.onSubmit}>
            <input type="text" className="title" name="title" 
            value={this.state.title}
            onChange={this.titleChange}
            /><br/>
            <input type="text" className="desc" name="desc" 
            value={this.state.desc}
            onChange={this.descChange}
            /><br/>
            <input className="submitBtn" type="submit" value="Submit" />
            </form>


                {/*             <button onClick={props.deleteCard.bind(this, props.todoInfos.id)}>törlés</button>*/}            
            </div>

          
      );
    }
}

export default NewCard;
