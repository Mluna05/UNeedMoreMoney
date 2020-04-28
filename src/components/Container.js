import React from 'react';

//components
import TopBar from './TopBar';
import PaymentList from './PaymentList';


 function Container() {
  return (
    <div className="container">

    	<TopBar />

    	<PaymentList />

 
    </div>
  );
}

export default Container;