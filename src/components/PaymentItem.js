import React from 'react';

//images
import card from '../images/payment-card.png';
import check from '../images/payment-check.jpg';
import money from '../images/payment-money.jpg';
import online from '../images/payment-online.jpg';
import terminal from '../images/payment-terminal.png';

//icons update-delete
import { FaWindowClose, FaEdit} from "react-icons/fa";

 const PaymentItem = ( { payment, id, dispEditModeUpdate, deleteItemfromList } ) => {

 	const { title, desc, date, amount, icon } = payment;

 	const iconPayment = { card, check , money,  online, terminal };

 	const disEditMode = () =>{
 		dispEditModeUpdate( id );
 	}

 	const delItem = () =>{
 		deleteItemfromList( id );
 	}

 	const displayImg = ( icon ) =>{
	 	return iconPayment[ icon || 'card' ];
	 }

  return (
    <div className="PaymentItem">

	    <div className="ImgType">
	    	<img src={ displayImg( icon ) } alt={ icon } />
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