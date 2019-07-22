import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './ProductCard.css'
import { Col, Row } from 'reactstrap'
function ProductCard({ name, price, description, picture }) {
  return (

    <div className="product-container">
          <Card>
            <CardImg top width="100%" src={picture} alt="Card image cap" />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>{`${price}`}</CardSubtitle>
              <CardText>{description}</CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>     
    </div>
      );
    };
    
    export default ProductCard;
    
    
    
