import React from 'react';
import paymentCardImg from '../images/payment-card.png';

 function PaymentItem() {
  return (
    <div className="PaymentItem">

	    <div className="ImgType">
	    	<img src={ paymentCardImg } alt="payment-card" />
		</div>

		<div className="InfoContainer">

			<div className="InfoTitle">  TITLE SIEEE  </div>
			
			<div className="InfoControl"> 
				<span className="InfoBtnEdit"> Edit </span>
				<span className="InfoBtnCerrar"> X </span>
			</div>

			<div className="InfoDate">  Date SIEEE  </div>

			<div className="InfoDesc">  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.   </div>
			<div className="InfoMonto"> $ 100.00  </div>

		</div>
 
    </div>
  );
}

export default PaymentItem;