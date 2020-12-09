import React from 'react'

import { Info } from '../../components'

import { 
    homeData1, 
    homeData2, 
    homeData3, 
    homeData4, 
    homeData5, 
    homeData6
} from './Data'

const Home = () => {
    return (
        <>
            <Info {...homeData1} />
            <Info {...homeData2} />
            <Info {...homeData3} />
            <Info {...homeData4} />
            <Info {...homeData5} />
            <Info {...homeData6} />
        </>
    )
}

export default Home
