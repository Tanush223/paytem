import { useState } from "react";
import BottomWarning from "../BottomWarning";
import Button from "../Button";
import Heading from "../Heading";
import Inputbox from "../Inputbox";
import Subheading from "../Subheading";
import axios from "axios";

const Signup = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div className="h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-5 ">
            <Heading lable={"Sign up"} />
            <Subheading lable={"Enter your info to create an account"} />
            <Inputbox
              lable={"First Name"}
              placeholder={"tanush"}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <Inputbox
              lable={"Second Name"}
              placeholder={"nimmagadda"}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <Inputbox
              lable={"Email"}
              placeholder={"tanush@gmail.com"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Inputbox
              lable={"passworddddd"}
              placeholder={"********"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="pt-4">
              <Button
                label={"signup"}
                onClick={async () => {
                  try {
                    const response = await axios.post(
                      "http://localhost:3000/api/v1/user/signup",
                      {
                        username,
                        firstname,
                        lastname,
                        password,
                      }
                    );
                    localStorage.setItem("token", response.data.token);
                  } catch (error) {
                    console.error("Signup error:", error); // Handle errors (e.g., display error message)
                  }
                }}
              />
            </div>
            <BottomWarning
              to={"/signin"}
              buttonText={"sign in"}
              lable={"Alreay have an account"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
