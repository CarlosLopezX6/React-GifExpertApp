/*
-Este es un custom hook.
-Los nombres de los hooks comunmente vienen con un "use" antes del verdadero nombre.
-Perfectamente se le pueden poner effect a los custom hooks.
*/

import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {

        getGifs( category )
            .then(imgs => {

                setTimeout( () => {   //El setTimeout Como finalidad de prueba de espera...

                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 1000)

            });

    }, [category])

    return state;  //{ data:[], loading: true };

} 