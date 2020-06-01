import React , { useState } from 'react';

//components
import TopBar from './TopBar';
import PaymentList from './PaymentList';


 const Container = () => {

	const [ payments, setPayments ] = useState( [] ); // initialState: [{ title:'', icon:'', desc:'', date:'', amount:0, amountError:'', dateError:'' }]

	const [ editMode, setEditMode ] = useState( { editMode: false , id:'' } );

	let amountError =''; 
	let dateError =''; 


	const activateEditMode = (  id='' ) => {
		let edtMod = !editMode.editMode;
		setEditMode( { editMode:edtMod , id } );
	}

	const valiDate = () =>{
		
		 let today = new Date();
  		 today.setHours(0,0,0,0);
  		 today.setDate(today.getDate() + 7);

  		 let paymentDate  = new Date( document.getElementById("date").value ).toUTCString();

  		 return new Date( paymentDate ) >= today ;
	}

	const validate = ( payment='', name='', value='' ) =>{


		if( Math.sign(parseFloat(value)) <= 0 || Math.sign(parseFloat(value)) === -0 )  {
	
			amountError='This amount must be greater than zero.'; 
		}


		if ( valiDate() ){
			dateError='Dates must not be later than 7 days ago.'; 
		}

		if( amountError || dateError ){
			return false;
		}

		if( payment.amountError || payment.dateError ){
			return false;
		}
		
		return true;

	}


	const addPaymentsInfo = ( id, name, value, payment ) => {	
		
		if ( name === 'date' || name === 'amount' ){
			
			if ( validate(payment, name, value) ){
				updatePayments( id, 
								name, 
								name==='amount'? parseFloat(value).toFixed(2) : value , 
								payment ,   
								name==='date'? 'dateError' : 'amountError'  , '' );
			}else{
				updatePayments( id, 
								name, 
								name==='amount'? parseFloat(value).toFixed(2) : value ,  
								payment,   
								name==='date'? 'dateError' : 'amountError'  , name==='date'? dateError : amountError );
			}

		} else{
    		updatePayments( id, 
    						name, 
    						value, 
    						payment );
		}

	}


	const updatePayments = ( id, name, value, payment, nameError='', msgError='' ) =>{

		let paymentsUpdated = [...payments] ;

      	payment[nameError] = msgError;
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

		<TopBar payments={ payments }/>

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