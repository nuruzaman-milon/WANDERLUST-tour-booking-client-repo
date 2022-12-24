import { Footer } from 'flowbite-react';
import React from 'react';

const Footers = () => {
    return (
        <div>
            <Footer  container={true}>
                <div className='w-full flex justify-center'>
                    <Footer.Copyright 
                        by="Wanderlust™ - the tour guide"
                        year={2022}
                    />
                </div>
            </Footer>
        </div>
    );
};

export default Footers;