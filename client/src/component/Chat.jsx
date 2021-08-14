import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import '@fontsource/roboto';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Typography
} from "@material-ui/core";
import Cookies from 'js-cookie';
import Fade from "react-reveal/Fade"

const Chat = () => {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket] = useState(() => io(":8000"));
  const [loaded, setLoaded] = useState(false);
  const [currMessage, setCurrMessage] = useState("");

  const date = new Date();
  const [hour, minutes] = [date.getHours(), date.getMinutes()];
  const time = `${hour}:${minutes}`;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (currMessage === "") {
      navigate("/contact-us");
    } else {
      socket.emit("newMsgClient", { user: name, msg: currMessage, time: time});
      setMessages([...messages, { user: name, msg: currMessage, time: time }]);
      setCurrMessage("");
    }
  };

  useEffect(() => {
    console.log("Is this running?");
    const userId = Cookies.get('useID');
    axios.get(`http://localhost:8000/api/user/${userId}`)
    .then(res => {
      setName(`${res.data.user.firstname} ${res.data.user.lastname}`);
     
      
  })
    socket.on("sendMsgtoClients", (msg) => {
      console.log(msg);
      setMessages((prevMessages) => 
         [...prevMessages, msg]
      );
    });

    return () => socket.disconnect(true);
  }, []);


  return (
    <div>
      <Typography variant="h4" component="h4">
      Chat with us
      </Typography>
        <>
          <Container >
            {messages.map((message, idx) => {
              return (
                <>
                  <p>
                  {message.time}<strong> {message.user}</strong> {message.msg}
                  </p>
                </>
              );
            })}
          </Container>
          <Container>
            <form
              onSubmit={onSubmitHandler}
            >
              <Input
                type="text"
                onChange={(e) => setCurrMessage(e.target.value)}
                value={currMessage}
              />
              

              <Fade bottom>
                              <Button className="primary-btn" type="submit">
                Send
              </Button>
              </Fade>
            </form>
          </Container>
        </>
    </div>
  );
};

export default Chat;
