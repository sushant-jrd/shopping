import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const ProductListing = () => {
  // using state
  const [state, setstate] = useState([]); // passing empty array for now
  const [filterValue, setFilterValue] = useState(""); // passing empty array for now

  useEffect(() => {
    fstore();
  }, []);

  const fstore = async () => {
    const fstoredata = await fetch("https://fakestoreapi.com/products");
    const datafstore = await fstoredata.json();
    setstate(datafstore);
    setFilterValue("Default");
    console.log("In FSTORE", filterValue);
  };

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const addToCart = (values) => {
    const { id, title, price, image } = values;
    cartItems.push({ id, title, price, image });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // add to redux store
  };

  const handleSelect = (e) => {
    console.log(e);
    setFilterValue(e);
  };

  return (
    <>
      <div>
        <DropdownButton
          title="Filter"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Default">Default</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="500">500 or below</Dropdown.Item>
          <Dropdown.Item eventKey="501">500+</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="wrapper">
        {state
          .filter((product) => {
            if (filterValue === "500" && product.price <= 500) {
              return product;
            } else if (filterValue === "501" && product.price > 500) {
              return product;
            } else if (filterValue === "Default") {
              return product;
            }
          })
          .map((values) => {
            return (
              <React.Fragment key={values.id}>
                <Card style={{ width: "18rem" }} className="box">
                  <Link to={`/product_detail/${values.id}`}>
                    <Card.Img variant="top" src={values.image} />{" "}
                  </Link>

                  <Card.Body>
                    <Card.Title>{values.title}</Card.Title>

                    <details>
                      <summary>{values.description.substr(0, 20)}</summary>
                      <p>{values.description}</p>
                    </details>
                    <Row>
                      <Col>
                        <Card.Text>{values.price}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>{values.category}</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button
                          variant="primary"
                          onClick={(event) => {
                            addToCart(values);
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Col>
                      <Col>
                        <Link to={`/product_detail/${values.id}`}>
                          <Button variant="primary">Details</Button>{" "}
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default ProductListing;
