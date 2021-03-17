import React, { Component } from 'react';

class UpdateCard extends Component {
    state= {
        id: this.props.todoInfos.id,
        title: this.props.todoInfos.title,
        desc: this.props.todoInfos.desc
    }

    onSubmitUP = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.state.id, this.state.title, this.state.desc);
/*         this.setState({ title: "" });
        this.setState({ desc: "" }); */
    }

    titleChangeUP = (e) => this.setState( { title: e.target.value });
    descChangeUP = (e) => this.setState( { desc: e.target.value });

    render() {
    return (
        <div className="card-ct">

            <form onSubmit={this.onSubmitUP}>
            <input type="text" className="title" name="title" 
            value={this.state.title}
            onChange={this.titleChangeUP}
            /><br/>
            <input type="text" className="desc" name="desc" 
            value={this.state.desc}
            onChange={this.descChangeUP}
            /><br/>
            <input className="submitBtn" type="submit" value="Submit" />
            </form>

                </div>    
      );
    }
}

export default UpdateCard;
