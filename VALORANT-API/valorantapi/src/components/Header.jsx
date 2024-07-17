import { Container } from "reactstrap";
import { CiMap } from "react-icons/ci";
import { FaMagento } from "react-icons/fa6";
import { FaGun } from "react-icons/fa6";
import "../componentCSS/Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="header" style={{ display: "flex" }}>
        <div className="header-imgbox">
          <Link to="/home">
            <img
              className="header-img"
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
          <h2>Valorant Wıkı</h2>
        </div>

        <div className="header-icons">
          <Link to="/agents">
            <FaMagento title="Agents" className="icons" />
          </Link>
          <Link to="/maps">
            <CiMap title="Maps" className="icons" />
          </Link>
          <Link to="/guns">
            <FaGun title="Guns" className="icons" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
