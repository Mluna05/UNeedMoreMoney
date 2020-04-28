import React from 'react';

//components
import EditPayment from './EditPayment';
import PaymentItem from './PaymentItem';

 function PaymentList() {
  return (
    <div className="PaymentList">

    	<EditPayment />

    	<PaymentItem />
    	<PaymentItem />
    	<PaymentItem />
 
    </div>
  );
}

export default PaymentList;