import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    //const [images, setimages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);

/*     useEffect( () => {
        getGifs( category )
            .then( imgs => setimages (imgs) setimages);
    }, [ category ]) */

    
    
    //getGifs();
    //console.log(images.length+' 2');
    return (
        <>

            <h3 className='animate__animated animate__fadeInRightBig'>{ category }</h3>
            {loading && <p className='animate__animated animate__fadeOutDown animate__delay-3s'>Loading</p>}

            <div className='card-grid'>

                {

                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                    ))

                    /*  images.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))  */ 
                }
            </div> 
        </>
    )

    

}

GifGrid.propTypes = {

}

export default GifGrid

