import React from "react";
import Logo from "../../images/logo.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./style.css";

import { useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";

function Home() {
  const history = useHistory();
  let location = "";

  return (
    <Container fluid="lg" className="animate__animated animate__fadeIn">
      <Card className=" text-center bg-ivory mx-auto p-5 m-5" id="card">
        <img
          style={{ height: "12rem", width: "12rem" }}
          src={Logo}
          alt="LemonLimeThyme logo"
          className="mx-auto drop-shadow-light"
        ></img>
           <h2 className="text-center text-white mt-4 mb-0 mx-auto">
           Welcome to LemonLimeThyme Recipes! 
        </h2>
        <h5 className="text-center text-white mt-4 mb-2 mx-auto" style={{lineHeight: "1.6"}}>
        The best online resource for creating, storing and searching for those family recipes that you don't already have or that always seem to get misplaced right around the holidays! To get started simply give your recipe collection a name below and click the Create a Collection button. If you know the name of your collection and want to add to it, enter the collection name and click Find a Collection, otherwise click the My Collections link in the NavBar to view all of your collections. I hope you enjoy this as much as I do! So grab your whisk and let's do this!
        </h5>
        <br></br>
        <Row style={{justifyContent: "center"}}>
         <Input
          id='input'
          style={{width: "600px"}}
          placeholder='Collection Name'
          inputProps = {{ 'aria-label': 'Message Field',}}
          autoFocus = {true}
        />
            <Button
              id="button" 
              className="btn w-100 h-75 my-2 btn-#A9BA9D"
              onClick={() => {
                history.push({
                  pathname: "/search-flights",
                  state: { location: location },
                });
              }}>
              Create a Collection
              </Button>
              </Row>
              <Row style={{justifyContent: "center"}}>
            <Input
              id="input"
              style={{width: "600px"}}
              placeholder='Collection Name'
           />
              <Button 
              id="button" 
              className="btn w-100 h-75 my-2 btn-warning"
              onClick={() => {
                history.push({
                  pathname: "/search-flights",
                  state: { location: location },
                });
              }}>
              Find a Collection
              </Button>
          
        </Row>
     
      </Card>
    </Container>
  );
}

export default Home;
