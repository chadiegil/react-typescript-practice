import React from "react"
import "./App.css"
import Header from "./components/Header"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Heading from "./components/Heading"
import InnerComponent from "./components/InnerComponent"
import Button from "./components/Button"
import Input from "./components/Input"
import Container from "./components/Container"

function App() {
  const personName = {
    first: "Chad",
    last: "Software Engr.",
  }

  const nameList = [
    {
      first: "Chad",
      last: "Software Engr.",
    },
    {
      first: "Ike",
      last: "Software Engr.",
    },
    {
      first: "Adrian",
      last: "Tech support",
    },
  ]

  return (
    <React.Fragment>
      <Container
        styles={{ border: "1px solid black", padding: "1rem", color: "blue" }}
      />
    </React.Fragment>
  )
}

export default App
