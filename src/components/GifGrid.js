//import React, { useState, useEffect } from 'react' SE PASO A CUSTOM HOOK useFetchGifs
//import { getGifs } from '../helpers/getGifs';  SE PASO A CUSTOM HOOK useFetchGifs

import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

//Direccion de busquedas de gif de la api: api.giphy.com/v1/gifs/search
//api_key = 22IlRUJTXvpODpFVBS09ho5yQcyvv6mm
//parametro para la busqueda: q

//Referencia: https://developers.giphy.com/docs/api/endpoint#search
//Nota: se probo en postman.

/*
-useEffect ejecuta codigo de manera condicional, ya que si este no se pone, al hacer algun cambio o poner otra accion
React al detectar ese cambio vuelve a ejecutar el codigo y en este caso vuelve a mandar la peticion sin que nosotros queramos,
React detecta cambio y ejecuta todo el codigo de nuevo.
*/

export const GifGrid = ({ category }) => {

    /*
    -Solo ejecutar la instruccion de adentro cuando el componente es renderizado por primera vez.
    -Lo de adentro del arreglo son las dependencias, al poner una le estamos diciendo que el codigo se volvera a ejecutar
    cuando la dependencia que esta adentro del arreglo sufra un cambio.
    -Si el arreglo esta vacio solo ejecutara el codigo o la funcion por primera vez cuando se ejecute el programa.
    -useEffect es muy importante poner ya que si no se pone el codigo cada que haga cambios se volvera a renderizar todo y habra
    ocasiones que no queramos eso.
    -Se hizo la prueba con un boton que solo al presionarlo aumentaba en 1 a un contador X y el codigo mandaba de nuevo 
    la peticion fetch cada que se presionaba el boton.
    -Despues puse "category" dentro del arreglo de useEffect por que salio un warning que decia que posiblemente category
    pueda cambiar en el futuro, obviamente como tenemos la logica no cambiara si no que crearemos el componente con otra categoria
    nueva pero aun asi se la ponemos para evitar el warning.
    */



    /* CODIGO COMENTADO POR USO DE CUSTOM HOOKS

     const [images, setImages] = useState([]);

    useEffect( () => {
        /////getGifs();

        //Primera forma:
        // getGifs(category)
        //     .then(imgs => setImages(imgs));

        //Segunda Forma:
        getGifs( category )
            .then( setImages );

    }, [ category ]);

    CODIGO COMENTADO POR USO DE CUSTOM HOOKS */ 



    const {data: images, loading} = useFetchGifs( category );
    

    //TODO ESTE CODIGO LO PASE A HELPERS
    //
    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=22IlRUJTXvpODpFVBS09ho5yQcyvv6mm`
    //     const respuesta = await fetch( url );
    //     const { data } = await respuesta.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);
    //     setImages( gifs );        
    // }
    //TODO ESTE CODIGO LO PASE A HELPERS



    return (
        <>
            <h3 className='animate__animated animate__backInDown'>{ category }</h3>
            <div className='card-grid'>

                {/* { loading ? 'Cargando...' : 'Data Cargada' } */}

                { loading && <p className='animate__animated animate__flash animate__slow'>Loading...</p> }

                {/* <ol> */}

                    {/* {
                        images.map( i => 
                            ( <li key={ i.id }> { i.title } </li> )
                        )
                    } */}

                    {/* {
                        images.map( ({id, title}) => 
                            ( <li key={ id }> { title } </li> )
                        )
                    } */}

                    {/* En la forma de abajo hacemos una copia del objeto img para pasarlo como parametro
                    al componente y ya dentro del componente usamos desestructurizacion  */}

                    {               
                        images.map( img => (
                            <GifGridItem
                                key={ img.id }
                                { ...img } 
                            />
                        ))
                    }

                {/* </ol> */}
            </div>
        </>
    )
}

