import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foodArr from './foods.json';
import FodBox from './components/FodBox';
import Search from './components/Search';
import AddFood from './components/AddFood';

function App() {

  const [food, setFood] = useState(foodArr)


  const addNewFood = (newFood) => {
    setFood([newFood, ...food])
  }


  return (
    <div className="App">

    <AddFood  addNewFood={addNewFood}/>

    {foodArr.map((eachFood, index) => {

      return(
        <FodBox   key={index + eachFood} name={eachFood.name} calories={eachFood.calories} image={eachFood.image} quantity={eachFood.quantity}/>
      )
    })}

    

    <Search />


    

    </div>
  );
}

export default App;
