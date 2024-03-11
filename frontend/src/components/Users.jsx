import { useEffect, useState } from "react";
import Button from "./Button"; // Assuming you have a Button component
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + search)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [search]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-2 border rounded border-slate-200 my-3"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>{" "}
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between bg-slate-300 rounded-md px-3 py-2">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 ">
          <div className="flex flex-col justify-center h-full text-xl ">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <div className="pt-2 px-2">
          <Button
            onClick={(e) => {
              nav("/send?id" + user._id + "&name" + user.firstname);
            }}
            label={"Send Money"}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;