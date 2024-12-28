import React from "react";
import brz from './img/car.jpg'

const Module = () => (
  <>
    <img src={brz} alt="brz" style={{maxWidth: '100%',height: 'auto',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', objectFit: 'cover', borderRadius: '8px'}}/>
    <h1>Hello, React!!!!!</h1>
  </>
);

export default Module;
