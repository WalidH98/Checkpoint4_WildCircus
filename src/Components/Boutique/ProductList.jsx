import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts, showProduct } from '../../store/action/product';
import { Row, Col, Container } from 'reactstrap';
import ProductCard from './ProductCard';
import './ProductCard.css'

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        this.props.fetchProducts();
    }


    render() {
        return (
            <div className="steuplé">
                <Container className="container">
                    <Row>
                        {
                            this.props.product.product.map((product, index) => {
                                return (
                                    <Col xs={3} key={`product-${index}`}>
                                        <ProductCard
                                            name={product.name}
                                            picture={product.picture}
                                            description={product.description}
                                            price={`${product.price}€`} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    fetchProducts,
    showProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
