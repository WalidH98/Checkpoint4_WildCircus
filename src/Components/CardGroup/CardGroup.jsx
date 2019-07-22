import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
    import './CardGroup.css'
   
   const TrioPicture = (props) => {
     return (
       <CardGroup>
         <Card className="cardcolor">
           <CardImg top width="100%"  height='800px' src="http://images.fineartamerica.com/images-medium-large-5/evil-clown-david-bollt.jpg" alt="Card image cap" />
           <CardBody>
             <CardTitle><h1>Kill</h1></CardTitle>
           </CardBody>
         </Card>
         <Card className="cardcolor">
           <CardImg top width="100%"  height='800px'  src="https://images.fineartamerica.com/images-medium-large-5/jester-god-david-bollt.jpg" alt="Card image cap" />
           <CardBody>
             <CardTitle><h1>Scare</h1></CardTitle>
           </CardBody>
         </Card>
       </CardGroup>
     );
   };
   
   export default TrioPicture;