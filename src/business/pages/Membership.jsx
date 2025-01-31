import React, { useState } from 'react';
import './Membership.css';

function MembershipPage() {
  const [currentMembership, setCurrentMembership] = useState('Prime B');
  const [billingFrequency, setBillingFrequency] = useState('monthly');

  const membershipPlans = [
    {
      name: 'Prime A',
      price: 49,
      annualPrice: 39,
      features: [
        'Up to 3 Active Listings',
        'Basic Analytics',
        '5% Platform Commission',
        'Standard Support',
        'Email Notifications'
      ],
      recommended: false
    },
    {
      name: 'Prime B',
      price: 99,
      annualPrice: 79,
      features: [
        'Up to 10 Active Listings',
        'Advanced Analytics',
        '3% Platform Commission',
        'Priority Support',
        'Monthly Performance Report',
        'Social Media Integration'
      ],
      recommended: true
    },
    {
      name: 'Prime C',
      price: 249,
      annualPrice: 199,
      features: [
        'Unlimited Active Listings',
        'Premium Analytics',
        '2% Platform Commission',
        'Dedicated Account Manager',
        'Custom Branding',
        'Priority Placement',
        'Quarterly Business Review'
      ],
      recommended: false
    }
  ];

  const handleUpgrade = (planName) => {
    console.log(`Upgrading to ${planName}`);
    // Implement actual upgrade logic
    setCurrentMembership(planName);
  };

  return (
    <div className="membership-page">
      
      <div className="membership-content">
        <div className="membership-header">
          <h1>Membership Plans</h1>
          <div className="billing-toggle">
            <button 
              className={billingFrequency === 'monthly' ? 'active' : ''}
              onClick={() => setBillingFrequency('monthly')}
            >
              Monthly
            </button>
            <button 
              className={billingFrequency === 'annually' ? 'active' : ''}
              onClick={() => setBillingFrequency('annually')}
            >
              Annually (Save 20%)
            </button>
          </div>
        </div>

        <div className="current-membership-banner">
          <h2>Your Current Plan: {currentMembership}</h2>
          <p>Active since January 2024</p>
        </div>

        <div className="membership-plans-grid">
          {membershipPlans.map((plan) => (
            <div 
              key={plan.name} 
              className={`membership-plan ${
                plan.name === currentMembership ? 'current-plan' : ''
              } ${plan.recommended ? 'recommended-plan' : ''}`}
            >
              {plan.recommended && (
                <div className="recommended-badge">Most Popular</div>
              )}
              
              <h3>{plan.name} Plan</h3>
              
              <div className="plan-pricing">
                <span className="price">
                  ${billingFrequency === 'monthly' 
                    ? plan.price 
                    : plan.annualPrice}
                </span>
                <span className="billing-cycle">
                  /{billingFrequency === 'monthly' ? 'month' : 'year'}
                  {billingFrequency === 'annually' && ' (Save 20%)'}
                </span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button 
                className={`upgrade-button ${
                  plan.name === currentMembership ? 'current-plan-button' : ''
                }`}
                onClick={() => handleUpgrade(plan.name)}
                disabled={plan.name === currentMembership}
              >
                {plan.name === currentMembership 
                  ? 'Current Plan' 
                  : 'Upgrade Plan'}
              </button>
            </div>
          ))}
        </div>

        <div className="membership-benefits">
          <h2>Why Upgrade Your Membership?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h3>Increased Visibility</h3>
              <p>Higher tier plans get more prominent listing placement</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Lower Commissions</h3>
              <p>Higher tiers enjoy reduced platform commission rates</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h3>Advanced Features</h3>
              <p>Access to premium analytics and support options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipPage;