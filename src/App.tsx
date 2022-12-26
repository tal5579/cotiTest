import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {List} from "./components/List/List";
import {SideBar} from "./components/SideBar/SideBar";
import {actions} from "./redux/actions";;

function App() {
    const dispatch = useDispatch();
    const [interval, setInterval] = useState(false);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        if(!interval) {
            dispatch({type: actions.SEND_EVENT_COUNTRY_LIST});
            setInterval(true);
        }
    }, []);

    const inputHandler = (e: any) => {
        setInputText(e.target.value.toLowerCase());
    }

    return (
      <div className={"App"}>
          <SideBar setInputText={setInputText} />
          <div className={"search"}>
              <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                  onChange={inputHandler}
              />
          </div>
          {inputText &&
              <List input={inputText} />
          }
      </div>
  );
}

export default App;
