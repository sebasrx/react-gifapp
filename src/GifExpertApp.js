import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One punch']);

/*     const handleAdd = () => {

        //setcategories([...categories, 'Hunter X']);
        setcategories(cate =>[...categories, 'Hunter X']);
    }
 */


    return (
        <>
            

            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setcategories }/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        
                         <GifGrid 
                         category={category}
                         key={category}
                         />
                    ))
                }
            </ol>
        </>
    )
};

GifExpertApp.propTypes = {

};

export default GifExpertApp;



