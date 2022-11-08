import React from 'react';

const ServiceCard = () => {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam dolores sint quis at? Soluta, expedita. Rerum sunt eos obcaecati velit voluptate pariatur consequuntur, illo, id praesentium ratione nemo a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias provident fuga praesentium nesciunt tempora inventore voluptas perferendis temporibus eligendi fugiat beatae omnis hic, similique, deleniti repellendus modi impedit placeat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam dolores sint quis at? Soluta, expedita. Rerum sunt eos obcaecati velit voluptate pariatur consequuntur, illo, id praesentium ratione nemo a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias provident fuga praesentium nesciunt tempora inventore voluptas perferendis temporibus eligendi fugiat beatae omnis hic, similique, deleniti repellendus modi impedit placeat autem.';


    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">This is Product information</h2>
                    <h3 className="font-bold text-2xl text-orange-500">$500</h3>

                    <p>{text.slice(0, 100)}...</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Vew Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;