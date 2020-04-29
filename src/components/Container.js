import React , { useState } from 'react';

//components
import TopBar from './TopBar';
import PaymentList from './PaymentList';


 const Container = () => {


	const paymentPrime = { 
						title:'', 
						desc:'', 
						amount:0,
						date:'',
						icon:''
					  };


const [payments, setPayments] = useState( [{ 
						title:'BBVA', 
						desc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.', 
						amount:100.00,
						date:'01/04/2020',
						icon:'check'
					  },{ 
						title:'Walmart', 
						desc:'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.', 
						amount:500.00,
						date:'10/03/2020',
						icon:'cash'
					  }, { 
						title:'Amazon', 
						desc:'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis o beatae vitae dicta.', 
						amount:300.00,
						date:'15/02/2020',
						icon:'online'
					  }] );

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
		let paymentsUpdated = [...payments, { payment }] ;
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