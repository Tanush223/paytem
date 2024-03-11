import { useState } from "react";
import BottomWarning from "../BottomWarning";
import Button from "../Button";
import Heading from "../Heading";
import Inputbox from "../Inputbox";
import Subheading from "../Subheading";
import axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading lable={"Sign In"} />
            <Subheading
              lable={"Enter your credentials to access your account"}
            />
            <Inputbox
              placeholder={"tanush@gmail"}
              lable={"Email"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Inputbox
              placeholder={"*********"}
              lable={"Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="pt-4">
              <Button
                label={"Sign in"}
                onClick={async () => {
                  await axios.post("http://localhost:3000/api/v1/user/signin", {
                    username,
                    password,
                  });
                }}
              />
            </div>
            <BottomWarning
              lable={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
