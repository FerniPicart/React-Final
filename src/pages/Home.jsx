import React from 'react';
import CardProducts from './CardProducts';

const Home = ( { data } ) => {

    return (        
        <>
            <CardProducts 
                data = {data}
            />
        </>
     );
}

 
export default Home;