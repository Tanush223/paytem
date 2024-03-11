import AppBar from "../AppBar";
import Balance from "../Balance";
import Users from "../Users";

const Dashboard = () => {
  return (
    <div className="h-screen bg-slate-200">
      <div className="pt-10 px-4 md:px-20 ">
        <AppBar />
        <div className="m-4 md:m-8 pt-10 md:pt-20">
          <Balance value={"10,000"} />
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
