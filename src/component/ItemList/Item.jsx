import React, { useState } from 'react';

const Item = () => {

    let obj = {
        name:"",
        image:"",
        year:"",
        category:"",
        descripton:"",
        id:"",
    }

    const [item, setItem]=useState(obj)

    function inpFunc (e){
        setItem(e.target.value)
    }
    function add () {

    }
    return (
        <div>
            <input type="text" placeholder='Name' onChange={inpFunc} value={item.name}/>
            <input type="text" placeholder='image' onChange={inpFunc} value={item.image}/>
            <input type="text" placeholder='year' onChange={inpFunc} value={item.year}/>
            <input type="text" placeholder='category' onChange={inpFunc} value={item.category}/>
            <input type="text" placeholder='description' onChange={inpFunc} value={item.descripton}/>
            <button className='btnCreate'>Add</button>
        </div>
    );
};

export default Item;