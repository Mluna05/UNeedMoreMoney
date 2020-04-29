import React, { useState } from 'react';

//icons add new
import { FaWindowClose } from "react-icons/fa";

//images
import cardCardImg from '../images/payment-card.png';
import checkCardImg from '../images/payment-check.jpg';
import moneyCardImg from '../images/payment-money.jpg';
import onlineCardImg from '../images/payment-online.jpg';
import terminalCardImg from '../images/payment-terminal.png';


const EditPayment = ({ activateEditMode, payment, addPaymentsInfo, idEdit, addNewPayments }) =>  {

	const [newPayment, setNewPayment] = useState({});

 	if(!payment){
 		payment = { title:'new', icon:'', desc:'', date:'', amount:0 };
 	}
 	
 	let { title, icon, desc, date, amount } = {...payment};


 	const coseModal = () =>{
 		activateEditMode( '' );
 	}

 	const onChange = (e) => {

 		addPaymentsInfo( idEdit, e.target.name, e.target.value, payment );
 		
	}

	const chargeNewPayment = () =>{
		addNewPayments(payment);
	}

	 const displayAdd = () =>{
	 	return idEdit==='' ? <button className="btnAdd" onClick={ chargeNewPayment }> Add </button> : null;
	 }

  return (
    <div className="EditPayment">

    	<div className="editTitleScreen"> Payment Detail </div>

    	<div className="closeModal" onClick={ coseModal }> <FaWindowClose /> </div>

    	<div className="infoForm">
    		<form>
	    		<div className="infoForm-icon"> 
	    			<img src={ checkCardImg } alt={ icon } />
	    			<p>Type:</p>
	    			<select value={ icon }>
					  <option value={cardCardImg}>Card</option>
					  <option value={checkCardImg}>Check</option>
					  <option value={moneyCardImg}>Cash</option>
					  <option value={onlineCardImg}>Online</option>
					  <option value={terminalCardImg}>Point of Sale</option>
					</select>
	    		</div>

	    		<div className="infoForm-title">
					<p>Title: { title }</p>
					<input
						type='text'
						name='title'
						value={ title }
						onChange={ onChange }
					/>
				</div>

	    		<div className="infoForm-desc">
	    			<p>Description:</p>
	    			<textarea value={ desc }
	    				name='desc' 
	    				maxLength = "255"
	    				onChange={ onChange }
	    			/>
	    		</div>

	    		<div className="infoForm-date">
	    			<p>Payment Date:</p>
	    			<input 
	    				type="date" 
	    				id="date" 
	    				name='date' 
	    				required
	    			/>
	    		</div>

	    		<div className="infoForm-amount"> 
	    			<p>Amount:</p>
	    			$
					<input
						type='text'
						name='amount'
						value={ amount }
						min="0"
						step=".01"
						onChange={ onChange }
						required
					/>
	    		</div>

	    		{ displayAdd() }
    		
    		</form>
    	</div> 
    </div>
  );
}

export default EditPayment;





