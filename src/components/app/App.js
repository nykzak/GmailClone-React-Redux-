import React, { useEffect } from 'react';
import './App.css';
import Header from '../header/Header';
import Sidebar from '../sideBar/Sidebar';
import Mail from '../mail/Mail'
import EmailList from '../emailList/EmailList';
import SendMail from '../sendMail/SendMail';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { auth } from "../api/firebase";
import Login from '../login/Login';
import { login } from "../../features/userSlice";

function App() {
  const  sendMessageIsOpen = useSelector(state => state.mail.sendMessageIsOpen);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
    })
    //eslint-disable-next-line
  }, []);

  return (
    <Router>

    {!user ? (<Login/>): (
      <div className='app'>
      <Header />
      <div className="app__body">
      <Sidebar />
      
      <Routes>
      <Route path="/" element={<EmailList/>} />
      <Route path="/mail" element={<Mail/>} />
      </Routes>

      </div>

      {sendMessageIsOpen && <SendMail />}
    </div>
    )}
    </Router>
  );
}

export default App;
