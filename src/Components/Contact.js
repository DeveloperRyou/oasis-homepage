import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

export default function Contact(){
	return (
    <div className="contact">
      <Fade triggerOnce direction='up' >
        <div className="contact-bg">
          <div className="me-3 d-flex flex-column justify-content-center"><p className="mb-0">Contact Us!</p></div>
          <a href="https://twitter.com/with_OASIS" target='_black'><FontAwesomeIcon className="socialIcon" icon={faTwitter} /></a>
          <a href="https://t.me/OASISYOB" target='_black'><FontAwesomeIcon className="socialIcon" icon={faTelegram} /></a>
          <a href="https://discord.gg/6r44wVKYjb" target='_black'><FontAwesomeIcon className="socialIcon" icon={faDiscord} /></a>
        </div>
      </Fade>
    </div>
	);
}