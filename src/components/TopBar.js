import React from 'react';
import logo from '../images/uNeedMoreMoney.png';


 function TopBar() {
  return (
    <div className="TopBarContainer" >


    	<span className="LogoImg" >
	    	<img src={logo} alt="Logo" height="80%" width="auto"/>
    	</span>

    	<span className="TotalAmountContent" >
	    	<div className="TotalAmounttext" > Total Amount: $ 100.00 </div>
    	</span>

 
    </div>
  );
}

export default TopBar;