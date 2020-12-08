import React from 'react'

import { InfoSec } from '../../components'

import {homeData} from './Data'

const Home = () => {
    return (
        <>
            <InfoSec { ...homeData } />
        </>
    )
}

export default Home
