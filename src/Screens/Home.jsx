import React, { useState } from 'react'
import Cards from '../components/Cards';
import { Fab } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import FloatingActionButton from '../components/FloatingActionButton';

const Home = ({ user }) => {
    const [doubts, setDoubts] = useState([]);


    return (
        <div className=' flex flex-col justify-center align-middle'>
            {/* <iframe src="https://drive.google.com/file/d/1PzH__T7cPTomg7DG9d-TWZ12EpdTDDbD/preview" height={"500px"} width={"500px"} /> */}
            <Cards user={user} />
            <FloatingActionButton />


        </div>
    )
}

export default Home;