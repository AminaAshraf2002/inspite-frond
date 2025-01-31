import React, { useState } from 'react';
import { 
    FaCreditCard, 
    FaPaypal, 
    FaStripe, 
    FaLock,
    FaShieldAlt 
} from 'react-icons/fa';
import './PaymentGateway.css'

const PaymentGateway = () => {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: ''
    });

    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const processPayment = () => {
        console.log('Processing Payment', cardDetails);
    };

    return (
        <div className="payment-gateway-container">
            <div className="payment-header">
                <div className="header-content">
                    <h1>Complete Your Purchase</h1>
                    <div className="secure-transaction">
                        <FaShieldAlt className="shield-icon" />
                        <span>Secure & Encrypted Payment</span>
                    </div>
                </div>
            </div>

            <div className="payment-content">
                <div className="payment-methods-section">
                    <h2>Select Payment Method</h2>
                    <div className="payment-methods">
                        {[
                            { 
                                method: 'credit', 
                                icon: <FaCreditCard />, 
                                name: 'Credit Card' 
                            },
                            { 
                                method: 'paypal', 
                                icon: <FaPaypal />, 
                                name: 'PayPal' 
                            },
                            { 
                                method: 'stripe', 
                                icon: <FaStripe />, 
                                name: 'Stripe' 
                            }
                        ].map((item) => (
                            <div 
                                key={item.method}
                                className={`payment-method ${paymentMethod === item.method ? 'selected' : ''}`}
                                onClick={() => handlePaymentMethodSelect(item.method)}
                            >
                                <div className="payment-method-icon">{item.icon}</div>
                                <span className="payment-method-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {paymentMethod === 'credit' && (
                    <div className="credit-card-form">
                        <h2>Credit Card Details</h2>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Card Number</label>
                                <div className="input-wrapper">
                                    <FaCreditCard className="input-icon" />
                                    <input 
                                        type="text" 
                                        name="cardNumber"
                                        placeholder="1234 5678 9012 3456"
                                        value={cardDetails.cardNumber}
                                        onChange={handleCardDetailsChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Cardholder Name</label>
                                <div className="input-wrapper">
                                    <input 
                                        type="text" 
                                        name="cardHolder"
                                        placeholder="John Doe"
                                        value={cardDetails.cardHolder}
                                        onChange={handleCardDetailsChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Expiry Date</label>
                                <div className="input-wrapper">
                                    <input 
                                        type="text" 
                                        name="expiryDate"
                                        placeholder="MM/YY"
                                        value={cardDetails.expiryDate}
                                        onChange={handleCardDetailsChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>CVV</label>
                                <div className="input-wrapper">
                                    <input 
                                        type="text" 
                                        name="cvv"
                                        placeholder="123"
                                        value={cardDetails.cvv}
                                        onChange={handleCardDetailsChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="payment-summary">
                    <div className="summary-item">
                        <span>Subtotal</span>
                        <span>$4,999.50</span>
                    </div>
                    <div className="summary-item">
                        <span>Tax</span>
                        <span>$250.00</span>
                    </div>
                    <div className="summary-item total">
                        <span>Total</span>
                        <span>$5,249.50</span>
                    </div>
                </div>

                <button 
                    className="complete-payment-btn"
                    onClick={processPayment}
                    disabled={!paymentMethod}
                >
                    Complete Payment
                </button>
            </div>

            <div className="payment-footer">
                <FaLock className="lock-icon" />
                <p>Your payment is secured with bank-level encryption</p>
            </div>
        </div>
    );
};

export default PaymentGateway;