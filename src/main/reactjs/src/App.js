// import React from 'react';
import AppRouter from './component/route/RouterComponent';
import NavBar from "./component/route/NavBar";
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Container from '@material-ui/core/Container';

function App() {

  const [message, setMessage] = useState([]);
  useEffect(() => {
      fetch("/hello").then((response) => {
          return response.json();
      }).then(function (data) {
          setMessage(data);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;