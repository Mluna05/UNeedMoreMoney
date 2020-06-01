import React from 'react';

//icons add new
import { FaWindowClose } from "react-icons/fa";

//images
import card from '../images/payment-card.png';
import check from '../images/payment-check.jpg';
import money from '../images/payment-money.jpg';
import online from '../images/payment-online.jpg';
import terminal from '../images/payment-terminal.png';


const EditPayment = ({ activateEditMode, payment, addPaymentsInfo, idEdit, addNewPayments }) =>  {

	const iconPayment = { card, check , money,  online, terminal };

 	if(!payment){
 		payment = { title:'', icon:'', desc:'', date:'', amount:0, amountError:'', dateError:'' };
 	}
 	
 	let { title, icon, desc, date, amount, amountError, dateError } = {...payment};


 	const coseModal = () =>{

 		if( !(payment.amountError || payment.dateError) ){

 			activateEditMode( '' );
 		}
 		
 	}

 	const onChange = (e) => {
	  	addPaymentsInfo( idEdit, e.target.name, e.target.value, payment );
 	}

	const chargeNewPayment = () =>{
  		 	addNewPayments(payment);
	}

	 const displayAdd = () =>{
	 	return idEdit==='' ? <div className="btnAdd" onClick={ chargeNewPayment }> Add </div> : null;
	 }

	 const displayImg = ( icon ) =>{
	 	return iconPayment[ icon || 'card' ];
	 }

  return (
    <div className="EditPayment">

    	<div className="editTitleScreen"> Payment Detail </div>

    	<div className="closeModal" onClick={ coseModal }> <FaWindowClose /> </div>

    	<div className="infoForm">
    		<form>
	    		<div className="infoForm-icon"> 
	    			<img src={ displayImg( icon ) } alt={ icon } />
	    			<p>Type:</p>
	    			<select value={ icon }
	    					name='icon'
	    					onChange={ onChange }>
					  <option value={ 'card' }>Card</option>
					  <option value={ 'check' }>Check</option>
					  <option value={ 'money' }>Cash</option>
					  <option value={ 'online' } >Online</option>
					  <option value={ 'terminal' }>Point of Sale</option>
					</select>
	    		</div>

	    		<div className="infoForm-title">
					<p>Title: </p>
					<input
						type='text'
						name='title'
						placeholder='Title'
						value={ title }
						onChange={ onChange }
					/>
				</div>

	    		<div className="infoForm-desc">
	    			<p>Description:</p>
	    			<textarea value={ desc }
	    				name='desc'
	    				placeholder='Enter a description...'
	    				className='textAreaDesc' 
	    				maxLength = '255'
	    				onChange={ onChange }
	    			/>
	    		</div>

	    		<div className="infoForm-date">
	    			<p>Payment Date:</p>
	    			<input 
	    				type='date'
	    				id='date' 
	    				name='date'
	    				value={ date }
	    				onChange={ onChange }
	    				required
	    			/>
	    		</div>
	    		<div className='infoForm-baseErrorMsg infoForm-dateErrorMsg' > { dateError } </div>

	    		<div className="infoForm-amount"> 
	    			<p>Amount:</p>
	    			<span> $ </span>
					<input
						type='number'
						id='amount' 
						name='amount'
						value={ amount }
						min='0'
						step='.01'
						onChange={ onChange }
						required
					/>
	    		</div>
	    		<div className='infoForm-baseErrorMsg infoForm-amountErrorMsg' > { amountError } </div>

	    		{ displayAdd() }
    		

    		</form>
    	</div> 
    </div>
  );
}

export default EditPayment;





