import React, {useContext} from 'react'
import { LevelContext } from '../contexts/LevelContext';


export default function Heading({ children }) {
    const level = useContext(LevelContext)
    switch (level) {
      case 1:
        return <h1 className='text-4xl mb-1'>{children}</h1>;
      case 2:
        return <h2 className='text-3xl mb-1'>{children}</h2>;
      case 3:
        return <h3 className='text-2xl mb-1'>{children}</h3>;
      case 4:
        return <h4 className='text-xl mb-1'>{children}</h4>;
      case 5:
        return <h5 className='text-xl mb-1'>{children}</h5>;
      case 6:
        return <h6 className=''>{children}</h6>;
      default:
        throw Error('Unknown level: ' + level);
    }
  }
  