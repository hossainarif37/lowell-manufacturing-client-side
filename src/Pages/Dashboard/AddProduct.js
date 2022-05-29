import React from 'react';

const AddProduct = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const product = {
            name: event.target.name.value,
            description: event.target.description.value,
            img: event.target.img.value,
            minOrder: parseInt(event.target.minOrder.value),
            qty: parseInt(event.target.qty.value),
            price: parseInt(event.target.price.value),
        }

        fetch('https://damp-sands-17118.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    };

    return (
        <div>
            <h2 className="text-center text-semibold text-primary text-xl">Add Product</h2>

            <div className="hero min-h-screen bg-base-200 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">

                                {/* Inputs */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required type="text" placeholder="Product Name" name='name' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required type="text" placeholder="Description" name='description' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Image <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required type="text" placeholder="Product Image Link" name='img' className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Price <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required name='price' type="number" placeholder="Single Product Price" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Minimum Order <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required name='minOrder' type="number" placeholder="Minimum Order Quantity" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required name='qty' type="number" placeholder="How much product have?" className="input input-bordered" />
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Product!</h1>
                        <p className="py-6">Add a product for Buyers! Make sure you have described your product information is correct!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;