import React from 'react';

const Items = (props) => {
    const {items, del} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <><button onClick={()=>props.add(item)}>+</button><p style={{textAlign:"center"}}>{item.quantity} </p><button onClick={()=>props.sub(item)}>-</button></>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
 
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Edit</p>
 
            </div>
            {ListItem}
        </div>
    )
}

export default Items