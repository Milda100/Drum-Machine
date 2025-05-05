  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";


function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://github.com/milda100" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/milda-satkute-a31235166/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.freecodecamp.org/Milda100" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" />
            </a>
        </div>
    )
};

export default SocialIcons;