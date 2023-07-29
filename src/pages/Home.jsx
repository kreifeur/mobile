import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[90%] flex items-center justify-around flex-col">
      <Link className="bg-blue-500 w-[70%] h-[10%] flex items-center justify-center" to={'/etat'}>الشاحنة</Link>
      <Link className="bg-blue-500 w-[70%] h-[10%] flex items-center justify-center" to={'/sell'}>البيع</Link>
      <Link className="bg-blue-500 w-[70%] h-[10%] flex items-center justify-center" to={'/add'}>اضافة زبون</Link>
    </div>
  );
};

export default Home;
