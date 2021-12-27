import React from 'react';

export default function     PurchaseHistoryTab(props) {
    const data = props.data
    console.log(data.DateCreated)
    return (

        <div className="col-sm-12 mb-2">
            <div className="card text-left">
                <div className="card-header">
                    Created at: {Date(data.DateCreated)} 
                </div>
                <div className="card-body">
                    <h5 className="card-title">Amount:N{data.BuyerPayment}</h5>
                    <p className="card-text"></p>
                    <ul class="list-group mb-2">
                        <li class="list-group-item">Recipient:{data.BuyerName}</li>
                        <li class="list-group-item">Recipeint PhoneNo:{data.BuyerCell}</li>
                        <li class="list-group-item">Recipeint Email:{data.BuyerEmail}</li>
                        <li class="list-group-item">Quantity:{data.BuyerQuantity}</li>
                        {data.BuyerInstallmental &&
                            <li class="list-group-item">Valid Id:</li>
                    
                        }
                        {data.BuyerDriverLincense &&
                            <img src={data.BuyerDriverLincense} width="300px" height="300px" alt=""/>
                        }

                    </ul>
                    {data.BuyerInstallmental &&
                        <a href="#" className="btn btn-primary">Pay next installment</a>
                    }
                    {data.BuyerPayOnDelivery &&
                        <a href="#" className="btn btn-secondary">Paid on delivery</a>
                    }
                    
                </div>
            </div>
        </div>
    )
}
