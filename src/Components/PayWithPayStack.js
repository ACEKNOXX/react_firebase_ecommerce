import React from 'react';
  import { PaystackButton } from 'react-paystack';
  
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_7317e010f981c9020888da3208020c144a69fb7f',
  };
  
  function PayPaystack() {
    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Pay With Paystack',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
      <div className="PayPaystack">
        <PaystackButton className="btn btn-primary btn-md col-sm-12" {...componentProps} />
      </div>
    );
  }
  
  export default PayPaystack