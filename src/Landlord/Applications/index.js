import React from 'react'

export default function Applications (props) {
  const methodData = [{
    supportedMethods: ['amex', 'visa', 'mastercard']
  }]
  const details = {
    total: {label: 'Donation', amount: {currency: 'USD', value: '55.00'}},
    displayItems: [
      {
        label: 'Laurence Can Eat It',
        amount: {currency: 'USD', value: '65.00'}
      }
    ]
  }
  const payment = new window.PaymentRequest(methodData, details)
  const handlePayment = async () => {
    try {
      const paymentResponse = await payment.show()
      console.log(paymentResponse)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div onClick={handlePayment}>applications</div>
  )
}
