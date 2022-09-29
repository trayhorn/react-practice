import React from 'react';
import ReactDOM from 'react-dom/client';
import foodList from './menu.json';


const data = foodList[0];

function FoodCard(props) {
  console.log(props)
  return (
    <div style={{ width: "480px" }}>
      <img src={data.image} alt={data.name} width="480px" />
      <div>
        <h2>{data.name}</h2>
        <p>{data.price} кредитов</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FoodCard />);




