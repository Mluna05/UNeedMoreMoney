import React from 'react';

//components
import EditPayment from './EditPayment';
import PaymentItem from './PaymentItem';

//icons add new
import { FaAddressCard } from "react-icons/fa";


const PaymentList = ( { payments , activateEditMode, editMode, addPaymentsInfo, deleteItemfromList, addNewPayments } ) =>  {

	const modalSatus = editMode.editMode;
	const idEdit = editMode.id;

	const generateItems = () =>{

		let dataPayments = payments;

		return dataPayments.map((payment, index) => {
		  return (
		    <PaymentItem 
		        payment={ payment } 
		        id={ index }
		        key={ 'pmNum_' + index }
		        dispEditModeUpdate={ dispEditModeUpdate }
		        deleteItemfromList={ deleteItemfromList }/>
		  );
		});

	}

	const displayPayments = () =>{
		return payments.lenght === 0 ? ''  : generateItems();
	}

	const dispEditModeUpdate = ( id ) =>{
		activateEditMode( id );
	}

	const dispEditMode = () =>{
		activateEditMode( '' );
	}
	
	return (
		<div className="PaymentList">

			<div className="addPaymentIcon" onClick={ dispEditMode } > <FaAddressCard /> Add New </div>

			{ modalSatus ? <EditPayment activateEditMode= { activateEditMode } 
										payment={ payments[idEdit] } 
										addPaymentsInfo={ addPaymentsInfo } 
										idEdit= { idEdit } 
										addNewPayments={ addNewPayments }/> 
						 : null 
			}

		    { displayPayments() } 

		</div>
	);
}

export default PaymentList;