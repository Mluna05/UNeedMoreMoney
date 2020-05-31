import React , { useState } from 'react';

//components
import TopBar from './TopBar';
import PaymentList from './PaymentList';


 const Container = () => {

	const [ payments, setPayments ] = useState( [] ); // initialState: [{ title:'', icon:'', desc:'', date:'', amount:0, amountError:'', dateError:'' }]

	const [ totalAmount, setTotalAmount ] = useState( 0 );

	const [ editMode, setEditMode ] = useState( { editMode: false , id:'' } );

	let amountError =''; 
	let dateError =''; 


	const activateEditMode = (  id:'' ) => {
		let edtMod = !editMode.editMode;
		setEditMode( { editMode:edtMod , id } );
	}

	const valiDate = () =>{
		
		 let today = new Date();
  		 today.setHours(0,0,0,0);
  		 today.setDate(today.getDate() + 7);

  		 let paymentDate  = new Date( document.getElementById("date").value ).toUTCString();

  		 return new Date( paymentDate ) <= today ;
	}

	const validate = ( payment ) =>{

		if( Math.sign(parseFloat(payment.amount)) <= 0 ){
			amountError='This amount must be greater than zero.'; 
		}

		if ( valiDate() ){
			dateError='Dates must not be later than 7 days ago.'; 
		}

		if( amountError || dateError ){
			return false;
		}

		return true;

	}


	const addPaymentsInfo = ( id, name, value, payment ) => {	
		
		if ( name === 'date' || name === 'amount'){
			
			if ( validate(payment) ){
				updatePayments( id, name, value, payment );
			}else{
				updatePayments( id, name==='date'? 'dateError' : 'amountError' , name==='date'? dateError : amountError, payment );
			}

		} else{
			updatePayments( id, name, value, payment );
		}

	}

	const updatePayments = ( id, name, value, payment ) =>{
		let paymentsUpdated = [...payments] ;
		payment[name] = value;
		paymentsUpdated[id] = payment;
		setPayments( paymentsUpdated );
	}

	const addNewPayments = ( payment ) => {	

		if ( validate(payment) ){
			let paymentsUpdated = [...payments, payment ] ;
			setPayments( paymentsUpdated );
		}
	
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