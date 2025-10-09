import errorImg from "../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center flex-col gap-4 items-center h-screen">
      <div className="flex flex-col gap-4">
        <img src={errorImg} alt="error image" />
        <h2 className="text-3xl font-semibold text-center">
          Oops, page not found!
        </h2>
        <p className="text-center font-semibold text-gray-500">
          The page you are looking for is not available
        </p>
      </div>
      <button onClick={() => navigate(-1)} className="btn-primary ">
        Go Back!
      </button>
    </section>
  );
};
export default AppErrorPage;
