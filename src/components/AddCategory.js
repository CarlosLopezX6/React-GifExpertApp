import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); //necesario poner ' ' si se quiere que el estado inicial sea vacio.

    const handdleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue( e.target.value );
    }

    const handdleSubmit = (e) => {

        e.preventDefault(); //previene que al hacer un posteo en el formulario recargue la pagina

        //console.log('Submit hecho');

        //validamos que haga el submit cuando el texto sea mayor a 2 letras
        if(inputValue.trim().length > 2){

            //Con solo mandar a llamar al setState tambien se trae el valor del estado en este caso categories.
            //Metemos el valor del input como nuevo elemento.
            //setCategories( cates => [...cates, inputValue]);
            setCategories( cates => [inputValue, ...cates]); //lo cambie para primero ver las que se van insertando
            setInputValue('');  //borra el input al presionar enter
        }

    }

    return (
        // onSubmit es al presionar enter
        <form onSubmit={ handdleSubmit }>  
            <input 
                type="text"
                value = { inputValue }
                onChange = { handdleInputChange }
            />
            <button onClick={ handdleSubmit }>Buscar Gif</button>
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired   //setCategories es una funcion.
}