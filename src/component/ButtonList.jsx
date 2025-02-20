import React from 'react'
import Button from  "./Button"

const list = ["All" , "Game" , "sports", "music", "food" , "entertainment", "PubG", "cooking","Game" , "sports", "music", "food" , "entertainment"]
const ButtonList = () => {
    return (
        <div className='flex gap-x-2 ml-8'> 
           {list.map((elem,index)=>{
// {console.log(elem)}
            return <Button name={elem} key={index} />
           })}
        </div>
    )
}

export default ButtonList
