import React, { useState, useMemo, useEffect } from 'react';
import { createAvatar } from '@dicebear/core';
import { toPng } from '@dicebear/converter';
import Randomstring from 'randomstring';
import './App.css';

import { lorelei, adventurer, bottts, icons, personas, thumbs, croodles } from '@dicebear/collection';

const App = () => {
  const [selectedArt, setSelectedArt] = useState(0);
  const [seed, setSeed] = useState('A');
  const [dataUri, setDataUri] = useState(null);

  const lists = [lorelei, adventurer, bottts, icons, personas, thumbs, croodles];
  const listName = ["lorelei", "adventurer", "bottts", "icons", "personas", "thumbs", "croodles"];


  const handleArtUpdate = (i) => {
    setSelectedArt(i); // art is updated here
    console.log("Updated art in App:", i); // Now you can use this value in App
  };
  console.log(selectedArt);


  const handleAvatarType = () => {
    const str = Randomstring.generate();
    console.log(str);

    setSeed(str);

  }



  const avatar = useMemo(() => {
    console.log("hello from memo");

    return createAvatar(lists[selectedArt], {
      size: 300,
      seed: seed,
      // ... other options
    }).toDataUri();
  }, [selectedArt, seed]);



  const handleClick = async () => {
    const link = document.createElement('a');
    link.href = avatar;
    link.download = 'downloaded-image.svg'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 


  }

  // const svgTojpg = async () => {
  //   const png = toPng(avatar, {
  //     // ... options
  //   });

  //   const dataUri = await png.toDataUri();
  //   setDataUri(dataUri);
  //   console.log("heloo", dataUri);

  // }







  return (
    <div className="outer-container">
    <div className='App'>
      <div className='heading'>Random Avatar Generator</div>
      <div className="Art">
        {listName.map((item, i) => {
          return <button className='artBtn' onClick={() => { handleArtUpdate(i) }} value={item} key={i}>{item}</button>
        })}
      </div>
      <div className='avatar'><img src={avatar} alt="Avatar" /></div>
      {/* <img src={dataUri} alt='ds'></img> */}

      <div className="buttons">
        <button className="next" onClick={handleAvatarType}>Next</button>
        <button className='download' onClick={handleClick}>Download</button>
      </div>

    </div>
    </div>
  );
}

export default App;

