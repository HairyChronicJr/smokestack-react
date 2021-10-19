import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function RenderStoreItem({storeItem}) {
    return(
        <Card>
            <Link to={`/store/${storeItem.id}`}>
                <CardImg width='100%' src={storeItem.image} alt={storeItem.name} />
                <CardImgOverlay>
                    <CardTitle>{storeItem.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}


function Store(props) {

    const storeItem = props.storeItems.STOREITEMS.map(storeItem => {
        return(
            <div key={storeItem.id} className='col-md-5 m-1'>
                <RenderStoreItem storeItem={storeItem} />
            </div>
        );
    });

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Store</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                {storeItem}
            </div>
        </div>
    );
}

export default Store;