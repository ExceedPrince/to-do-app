import React from 'react';
import icon1 from '../icons/trash.svg';
import icon2 from '../icons/clone.svg';

function Card(props) {

  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('card_id', target.id);

    setTimeout(()=> {
      target.style.display = "none"
    }, 0);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  
  const showDesc = (e) => {
    if (e.target.nodeName === "DIV") {
          e.target.parentElement.classList.toggle("showCard");
        } else {
    }
  }

  return (
    <div id={ props.id + "cont-card" + props.todoInfos.id} className="card-ct" draggable="true" onDragStart={dragStart} onDragOver={dragOver}>

      <div className="omg" onClick={showDesc}>
          <div className="cardButtons">
            <img src={icon1} style={{cursor: "pointer"}} alt="trash" width="30" height="30" onClick={props.deleteCard.bind(this, props.todoInfos.id)}></img>
            {/* <button className="del-card" onClick={props.deleteCard.bind(this, props.todoInfos.id)}>Delete</button> */}
            <img src={icon2} style={{cursor: "pointer"}} alt="clone" width="30" height="30" onClick={props.duplicateCard.bind(this, props.todoInfos.id)}></img>
            {/* <button className="doubleBtn" onClick={props.duplicateCard.bind(this, props.todoInfos.id)}>Duplicate</button> */}
          </div>

          <div className="cardTitle">
            <button className="todoTitle" onClick={props.createEditable.bind(this, props.todoInfos.id)}>
              {props.todoInfos.title}
            </button>
          </div>
          <div className="cardDesc">
              {props.todoInfos.desc}
          </div>
      </div>
    </div>
  )
}

export default Card;
