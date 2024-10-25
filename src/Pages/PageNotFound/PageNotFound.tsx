import { Button } from "primereact/button";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-7">
        <h1 className="text-2xl xs:text-3xl mdl:text-4xl text-color5 font-heading select-none">
          Page Not Found
        </h1>
        <Button
          title="go to home page"
          icon="pi pi-home"
          rounded
          className="bg-color2 text-color5 animate-bounce"
          onClick={() => startTransition(() => navigate("/home"))}
        />
      </div>
    </Layout>
  );
};

export default PageNotFound;
