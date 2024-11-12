// import React, { useState } from 'react'
// import { lorelei, adventurer, bottts, icons, personas, thumbs, croodles } from '@dicebear/collection';

// const Avatarlists = ({ onArtUpdate }) => {
    
//     const [art, setArt] = useState("lorelei");

//     const handleClick = (event) => {
//         const newArt = event.target.value;
//         setArt(newArt);
//         onArtUpdate(newArt); // Pass the updated art to the parent component
//     }

//     const lists = ["lorelei", "adventurer", "bottts", "icons", "personas", "thumbs", "croodles"];

//     const list = lists.map((item, i)=>{
//         return <button className='button' onClick={handleClick} value={item} key={i}>{item}</button>
//     });

//     // console.log(list);
    
//   return (
//     <div className='buttons'>
//       {list}
//     </div>
//   )
// }

// export default Avatarlists
