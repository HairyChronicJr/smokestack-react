import React from "react";
import {Card, CardImg, CardBody, CardText, Button} from 'reactstrap';


function RenderItem({item}) {
    return (
        <div className="col-md-5 m-1">    
            <CardImg top src={item.image} alt={item.name} />    
        </div>
    );
}

function RenderDescription({item}) {
    
    return(
        <div className="col-md-5 m-1">
            <h4>Product Description</h4>
            <Card>
                <CardBody>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
            <hr />
            {item.price}
            <br />
            <Button>Add to Cart</Button>
        </div>
    );
    
}

function ItemInfo(props) {

    if (props.item) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{props.item.name}</h2>
                        <hr />    
                    </div>
                </div>
                <div className='row'>   
                    <RenderItem item={props.item} />
                    <RenderDescription
                    item={props.item} />    
                </div>    
            </div>
        );
    }
    return <div />;
}

export default ItemInfo;