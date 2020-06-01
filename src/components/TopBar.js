import React from 'react';
import logo from '../images/uNeedMoreMoney.png';


 const TopBar = ( { payments } ) =>  {

  const calcTotal = () =>{

    let dataPayments = payments.reduce( ( total, payment ) =>  total  +  parseFloat( payment.amount ), 0 );
    


    if( dataPayments ){
      return dataPayments.toFixed(2);
    }
    
    return 0;
  }

  return (
    <div className="TopBarContainer" >


    	<span className="LogoImg" >
	    	<img src={logo} alt="Logo" height="80%" width="auto"/>
    	</span>

    	<span className="TotalAmountContent" >
	    	<div className="TotalAmounttext" > Total Amount: $ { calcTotal() } </div>
    	</span>

 
    </div>
  );
}

export default TopBar;