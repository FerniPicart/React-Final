import React from 'react';
import CardProducts from './CardProducts';

const Home = ( { data } ) => {
    // Presenta la info de CardProducts en primera pag
    return (        
        <>
            <CardProducts 
                data = {data}
            />
        </>
     );
}

 
export default Home;