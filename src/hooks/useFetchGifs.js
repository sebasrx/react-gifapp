
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    })
                }, 3000);
                //console.log(object)
            })
    }, [category])

    return state;
    
}
