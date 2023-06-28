import Features from "../components/Features";
import StayProductive from "../components/StayProductive";
import Landing from "../components/Landing";
import { Fragment } from "react";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";

function Home() {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted />
    </Fragment>
  );
}
export default Home;
