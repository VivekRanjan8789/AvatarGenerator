import React from 'react'
import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';


const Avatar = () => {
    const avatar = useMemo(() => {
        return createAvatar(croodles, {
          size: 128,
          seed: "edqwkkugjhggyufthfhfnvmbs"
          // ... other options
        }).toDataUri();
      }, []);
  return (
    <div>
      <img src={avatar} alt="Avatar" />
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Avatar
