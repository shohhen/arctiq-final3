import React from 'react';
import './loader.css'; // Import your loader styles

const Loader = ({ visible }) => {
    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
       const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/))
  return (
    <div className={`loader-container ${visible ? 'visible' : 'hidden'}`}>
        <div className='d-flex align-items-center justify-content-center flex-column loader_block'>
            <div className="loader">
                <img src={images['Loader1.svg']} alt="" />
                <img src={images['Loader2.svg']} alt="" />
            </div>
      </div>
      
    </div>
  );
};

export default Loader;