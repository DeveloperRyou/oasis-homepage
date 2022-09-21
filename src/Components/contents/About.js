import AboutOasis from "./AboutOasis";
import AboutOasisBot from "./AboutOasisBot";
import AboutAdvantage from "./AboutAdvantage";
import AboutSupport from "./AboutSupport";
import MookupImages from "./MookupImages";
import { Fade } from "react-awesome-reveal";

function About() {
	return (
    <div>
      <Fade triggerOnce direction='up'>
        <AboutOasis />
      </Fade>
      <Fade triggerOnce direction='up'>
        <AboutOasisBot />
      </Fade>
      <Fade triggerOnce direction='up'>
        <MookupImages />
      </Fade>
      <Fade triggerOnce direction='up'>
        <AboutAdvantage />
      </Fade>
      <Fade triggerOnce direction='up'>
        <AboutSupport />
      </Fade>
    </div>
	); 
}
export default About;