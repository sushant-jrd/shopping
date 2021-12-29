import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { connect } from "react-redux";

const ProductDetails = (props) => {

  const params = useParams();
  console.log(params.product_id);
  const [state, setstate] = useState([]); // passing empty array for now

  useEffect(() => {
    fstore();
  }, []);

 

  const fstore = async () => {
    const fstoredata = await fetch(
      `https://fakestoreapi.com/products/${params.product_id}`
    );
    const datafstore = await fstoredata.json();
    console.log("dataFstore", datafstore);
    setstate(datafstore);
  };

  return (<>
    <h1 className="container">Product Details Fragment</h1>

    <div className="wrapper">
      <React.Fragment key={state.id}>
        <Card style={{ width: "18rem" }} className="box">
          <Card.Img variant="top" src={state.image} />{" "}
          <Card.Body>
            <Card.Title>{state.title}</Card.Title>

            <details>
              <p>{state.description}</p>
            </details>
            <Row>
              <Col>
                <Card.Text>{state.price}</Card.Text>
              </Col>
              <Col>
                <Card.Text>{state.category}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={`/`}>
                  <Button variant="primary">Back to Listing</Button>{" "}
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </React.Fragment>
    </div></>
  );
};

// export default connect()(ProductDetails);
export default ProductDetails;
