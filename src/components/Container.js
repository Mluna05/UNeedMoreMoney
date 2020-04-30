import React , { useState } from 'react';

//components
import TopBar from './TopBar';
import PaymentList from './PaymentList';


 const Container = () => {

const [payments, setPayments] = useState( [] );

	const [totalAmount, setTotalAmount] = useState( 0 );

	const [editMode, setEditMode] = useState( { editMode: false , id:'' } );

	const activateEditMode = (  id:'' ) => {
		let edtMod = !editMode.editMode;
		setEditMode( { editMode:edtMod , id } );
	}

	const addPaymentsInfo = ( id, name, value, payment ) => {	

		let paymentsUpdated = [...payments] ;
		payment[name] = value;
		paymentsUpdated[id] = payment;

		setPayments( paymentsUpdated );
	}

	const addNewPayments = ( payment ) => {	
		console.log(payment);
		let paymentsUpdated = [...payments, payment ] ;
		setPayments( paymentsUpdated );
	}

	const deleteItemfromList = ( id ) =>{
		let paymentsUpdated = [...payments] ;
		paymentsUpdated.splice(id, 1);
		setPayments( paymentsUpdated );
	}

	return (
	<div className="container">

		<TopBar />

		<PaymentList payments={ payments } 
					 activateEditMode={ activateEditMode }
					 editMode={ editMode }
					 addPaymentsInfo={ addPaymentsInfo }
					 addNewPayments={ addNewPayments } 
					 deleteItemfromList={ deleteItemfromList }/>

	</div>
  );
}

export default Container;