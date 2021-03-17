import React from 'react';
import Card from './Card';
import NewCard from './NewCard';
import UpdateCard from './UpdateCard';
import NewCardButton from './NewCardButton';
import DashName from './DashName';
import styled from 'styled-components';



function Dashboard(props) {

  const DashNameCt = styled.div`
    text-align: center;
    background: ${props.defaultColors};
  `

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.target.appendChild(card);
  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
   
    <div className="dashboard-ct">


      <div className="dashboard" >

          <DashNameCt primary>
            <DashName actualDashName={props.actualDashName} setDashName={props.setDashName} />        
          </DashNameCt>

        <div className="cards-ct"> 
        {props.newCardDiv ? <NewCard addTodo={props.addTodo} /> : <NewCardButton showNewCard={props.showNewCard} />}
        <br />
        <div className="inner-cards-ct" onDrop={drop} onDragOver={dragOver} id={props.id}>
          {props.info.map( (x, y) =>
           x.editable === false ? <Card id={props.id} key={y} todoInfos={x} deleteCard={props.deleteCard} duplicateCard={props.duplicateCard} createEditable={props.createEditable}/> : <UpdateCard key={y} todoInfos={x} deleteCard={props.deleteCard} updateTodo={props.updateTodo}/>
          )}
        </div>
        



        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
