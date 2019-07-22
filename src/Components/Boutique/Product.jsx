import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';



const Product = (props) => {
  return (
    <div className="container">
      <Card>
        <CardImg top width="100%" src="https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/793505" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mask</CardTitle>
          <CardSubtitle>30$</CardSubtitle>
          <Button>Add to cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
