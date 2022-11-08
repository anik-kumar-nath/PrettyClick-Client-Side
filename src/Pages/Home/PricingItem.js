import React from 'react';

const PricingItem = ({ item }) => {
    const { title, coverage, cost } = item;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p><strong>Coverage:</strong> {coverage}</p>
                    <p><strong><i>{cost}</i> </strong></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingItem;