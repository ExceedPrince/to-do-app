// import './Dashboard.css';
import Card from './Card';
import styled from 'styled-components'

const defaultColors = () => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

const DashNameCt = styled.div`
  background-color: ${props => (props.primary ? defaultColors : 'none')};
  text-align: center;
`;

function Dashboard() {
  return (
    <div className="dashboard-ct">
      <div className="dashboard">
        < DashNameCt primary>
          <input type="text" className="board-names" defaultValue="Untilted dashboard"></input>
        </ DashNameCt >
        <div className="cards-ct">
            <button className="new-card">+ Create card</button>
          < Card /> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
