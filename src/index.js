import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { FormGroup, TextField, Typography } from "@material-ui/core";

function App() {
  let nameRef = useRef();
  let telRef = useRef();
  let [beOk, setBeok] = useState(false);
  return (
    <FormGroup style={{ visibility: beOk ? "hidden" : 1 }}>
      <TextField inputRef={nameRef} label="姓名" variant="outlined" />
      <TextField inputRef={telRef} label="電話" variant="outlined" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          let name = nameRef.current.value;
          let tel = telRef.current.value;
          fetch(`/pushData?name=${name}&tel=${tel}`).then((r) => {
            console.log(r);
            setBeok(true);
            alert(`成功了`);
          });
          console.log(name + tel);
        }}
      >
        送出
      </Button>
      <Typography variant="h6" gutterBottom>
        Q.A.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        建議你 可以多運動
      </Typography>
      <Typography variant="body1" gutterBottom>
        Typography
      </Typography>
    </FormGroup>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
