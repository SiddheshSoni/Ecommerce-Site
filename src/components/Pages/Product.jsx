import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import productsArr from '../../assets/data.js';
import reviews from '../../assets/reviews.js';

const ProductDetail = () => {
  const { productID } = useParams();

  const productIdNumber = parseInt(productID, 10);

  const product = productsArr.find(p => p.id === productIdNumber);

  const productReviewsData = reviews.find(r => r.id === productIdNumber);

 
  if (!product) {
    return (
      <Container className="my-5 text-center">
        <h2>Product not found!</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image src={product.title_image} alt={product.title} fluid rounded />
          <Row className="mt-3">
            {product.spare_images.map((img, index) => (
              <Col key={index} xs={4} className="mb-3">
                <Image src={img} alt={`${product.title} spare ${index + 1}`} fluid thumbnail />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <h1>{product.title}</h1>
          <h2 className="text-muted">${product.price.toFixed(2)}</h2>
          <p>
            This is a placeholder description for the {product.title}. It's a fantastic product that you're sure to love. It has all the features you're looking for and comes with our quality guarantee.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Customer Reviews</h3>
          {productReviewsData && productReviewsData.reviews.length > 0 ? (
            productReviewsData.reviews.map((review, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>{review.reviewer_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Rating: {review.rating} / 5</Card.Subtitle>
                  <Card.Text>"{review.comment}"</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No reviews for this product yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;