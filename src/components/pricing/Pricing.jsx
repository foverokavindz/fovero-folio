import React from 'react';
import './Pricing.css';
import Image1 from '../../assets/price-1.svg';
import Image2 from '../../assets/price-2.svg';
import Image3 from '../../assets/price-3.svg';

const pricingData = [
  {
    id: 1,
    image: Image1,
    plan: 'Basic',
    title: 'A Simple option but powerful to manage your business',
    support: 'Email Support',
    price: 29,
  },
  {
    id: 2,
    image: Image2,
    plan: 'Premium',
    title: 'Unlimited product including app integration and more features',
    support: 'Mon-Fri support',
    price: 59,
  },
  {
    id: 3,
    image: Image3,
    plan: 'Ultimate',
    title: 'A wise option for large companies and individuals',
    support: '24/7 support',
    price: 99,
  },
];

const Pricing = () => {
  return (
    <section className="pricing container section" id="price">
      <h2 className="section__title">Pricing Plans</h2>
      <div className="pricing__container grid">
        {pricingData.map((item) => {
          return (
            <div
              className={`pricing__item ${
                item.plan === 'Premium' ? 'best' : null
              }`}
              key={item.id}
            >
              {item.plan === 'Premium' ? (
                <span className="badge">Recommended</span>
              ) : null}
              <img src={item.image} alt="" className="pricing__img" />
              <h3 className="pricing__plan">{item.plan}</h3>
              <p className="pricing__title">{item.title}</p>
              <p className="pricing__support">{item.support}</p>
              <h3 className="price">
                <em>$</em> {item.price} <span>month</span>
              </h3>
              <a href="" className="btn">
                Get Started
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
