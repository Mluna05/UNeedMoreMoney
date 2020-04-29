import React from 'react';

//images
import cardCardImg from '../images/payment-card.png';
import checkCardImg from '../images/payment-check.jpg';
import moneyCardImg from '../images/payment-money.jpg';
import onlineCardImg from '../images/payment-online.jpg';
import terminalCardImg from '../images/payment-terminal.png';

//icons update-delete
import { FaWindowClose, FaEdit} from "react-icons/fa";

 const PaymentItem = ( { payment, id, dispEditModeUpdate, deleteItemfromList } ) => {

 	const { title, desc, date, amount, icon} = payment;

 	const disEditMode = () =>{
 		dispEditModeUpdate( id );
 	}

 	const delItem = () =>{
 		deleteItemfromList( id );
 	}

  return (
    <div className="PaymentItem">

	    <div className="ImgType">
	    	<img src={ cardCardImg } alt={ icon } />
		</div>

		<div className="InfoContainer">

			<div className="InfoTitle">  { title }  </div>
			
			<div className="InfoControl"> 
				<span className="InfoBtnEdit" onClick={ disEditMode } > { <FaEdit /> } </span>
				<span className="InfoBtnCerrar" onClick={ delItem }> { <FaWindowClose /> } </span>
			</div>

			<div className="InfoDate">  { date }  </div>

			<div className="InfoDesc">  { desc }   </div>
			<div className="InfoMonto"> $ { amount }  </div>

		</div>
 
    </div>
  );
}

export default PaymentItem;