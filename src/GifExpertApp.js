import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One piece']);

    // const handleAdd = () => {                
    //     // setcategories([...categories, 'New Hero']);
    //     setcategories( cats => ['New Hero' ,...cats ]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <AddCategory setcategories={setcategories}></AddCategory> */}
            <AddCategory setCategories={setcategories}></AddCategory>   
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    // <li>One Punch</li>
                    // <li>Samurai X</li>
                    // categories.map((category, i) => {
                    //     return <li key={category}> {category} </li>
                    // })
                    //Video #73
                    categories.map(category => 
                        <GifGrid 
                        key={category} 
                        category={category}></GifGrid>
                    )
                }
            </ol>

        </>
    )

};

export default GifExpertApp;