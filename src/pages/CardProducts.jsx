import React from 'react';
import Products from '../components/Products';


const CardProducts = ( { data, setItem } ) => {

    return (
        <div className="flex">                
            <div className="home">
                {data.results.map( dat => (
                    <div className="home-content">
                        <div className="home-cards">
                            <Products 
                                key={dat.id}
                                data={dat}
                            />
                        </div>
                    </div>
                ))
                }   
            </div>
        </div>
     );
}
 
export default CardProducts;