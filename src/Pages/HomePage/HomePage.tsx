import { Card } from "primereact/card";
import Layout from "../../Layout/Layout";
import "./HomePage.scss";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="custom-scrollbar w-full h-full p-2 md:p-3 lg:p-4 flex flex-col gap-y-4 sm:pa-y-6 md:gap-y-10 overflow-y-auto">
        <h1 className="text-2xl xs:text-3xl mdl:text-4xl text-color5 font-heading select-none">
          Project blackcurrant
        </h1>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full sm:w-[75%] md:w-[560px] lg:w-[640px] aspect-square grid grid-cols-2 gap-4">
            {[
              { title: "Play with Strings", link: "/play-with-strings" },
              { title: "Play with Numbers", link: "/play-with-numbers" },
              // { title: "Play with JS Dates", link: "/play-with-dates" },
              { title: "Web APIs", link: "/web-apis" },
            ]?.map((value, key) => (
              <Card
                key={key}
                onClick={() => startTransition(() => navigate(value?.link))}
                className="bg-color2 flex justify-center items-center cursor-pointer"
              >
                <h2 className="font-subHeading text-center text-color5 text-xl xs:text-2xl mdl:text-3xl">
                  {value?.title}
                </h2>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
