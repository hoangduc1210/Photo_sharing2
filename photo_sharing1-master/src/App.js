import './App.css';

import React, { useContext, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserInformation";
import UserList from "./components/ListofUsers";
import UserPhotos from "./components/Photo";
import Login from './components/Login/Login';
import SignUp from './components/Login/Signup';
import Home from './components/Home/Home';
import { MyContext } from './components/Appp/context';
import Photo from './components/Photo/Photo';

const App = () => {
  const {user} = useContext(MyContext)
  return (
      <Router>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <div className="main-topbar-buffer" />
            <Grid item sm={3}>
              <Paper className="main-grid-item">
                {user ?
                  <UserList /> :
                  
                  <h4>Log in to see user list</h4>
                }
              </Paper>
            </Grid>
            <Grid item sm={9}>
              <Paper className="main-grid-item">
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route 
                      path='/login'
                      element = {<Login />}
                  />
                  <Route path='/signup' element={<SignUp />}></Route>
                  {user ? (
                  <>
                    <Route path="/users/:userId" element={<UserDetail />} />
                    <Route path="/photos/:userId" element={<UserPhotos />} />
                    <Route path='/photo/:photoId' element={<Photo />} />
                    <Route path="/users" element={<UserList />} />
                  </>
                ) : (
                  <Route path="*" element={<Navigate to="/login" />} />
                )}
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Router>
  );
}

export default App;
