
export default function NewCardButton(props) {
  return (
          <div className="newCardBtn">
            <button className="new-card" onClick={props.showNewCard}>Új TODO hozzáadása</button>
          </div>
          
      );
}