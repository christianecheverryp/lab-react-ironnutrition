import React, { useState } from 'react'

function AddFood(props) {

    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        

        props.addNewFood({name, calories, image})
        setName('');
        setCalories(0);
        setImage('');
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value)
    }

    const handleImgChange = (event) => {
        setImage(event.target.value)
    }

  return (
    <div>

    <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label htmlFor="calories">Calorias:</label>
        <input type="number" value={calories} onChange={handleCaloriesChange}/>

        <label htmlFor="img">Imagen</label>
        <input type="text" value={image} onChange={handleImgChange}/>

        <button type='submit'>Add Product</button>

    </form>



    </div>
  )
}

export default AddFood