import { useState } from "react";
import LOCAL_STORAGE_AUTH_KEY, {
  BASE_URL
} from "../constants/LocalStorageKeys";
import axios from "axios";

type LoginProps = {
  handleSuccess: () => void;
};

function Login(props: LoginProps) {
  const { handleSuccess } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(true);

  const handleSubmit = async () => {
    try {        
        const credentials = {
            username,
            password
        }
        const response = await axios.post(BASE_URL, credentials);   
        window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, response.data);
        setHasError(false);
        handleSuccess();
        console.log(response);
        }
     catch (err) {
      //Do Something
      console.log(err);
      setHasError(true);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      {hasError && <div> Incorrect username and/or password </div>}
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default Login;
