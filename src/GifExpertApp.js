import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch Man', 'Samurai X', 'Shaman King'];
    //const [estado actual, cambiar estado o alterarlo] = useState(valor inicial)
    const [categories, setCategories] = useState(['Mega Man']);

    /*
    const handdleAdd = () => {
        //cuando utilizamos el setState estamos modificando el estado

        //Primera opcion para agregar un elemento
        //setCategories([...categories, 'Dragon Ball'])

        //Segunda
        //setCategories( valor del estado anterior => regresa [nuevo arreglo con el estado anterior mas lo agregado])
        setCategories( cates => [...cates, 'Dragon Ball'])
    }
    */

    return (
        <>  
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            
            <ol>
                
                {/* Primera forma {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>
                    })
                } */}

                {/* Segunda forma {
                    categories.map( category => 
                        ( <li key={ category }> { category } </li> )
                    )
                } */}

                {               
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
                
            </ol>
        </>
    );

}
