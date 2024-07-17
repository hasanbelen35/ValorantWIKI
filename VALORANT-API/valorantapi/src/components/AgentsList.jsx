import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../redux/valorantSlice.jsx";
import { Container } from "reactstrap";
import AgenstPage from "../components/AgenstPage.jsx";

export default function Agents() {
  const dispatch = useDispatch();
  const { agents } = useSelector((state) => state.agents);
  useEffect(() => {
    dispatch(getAllAgents());
  }, [dispatch]);

  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <h4 style={{ width: "100%", textAlign: "center", color: "red" }}>
        Agent's Names
      </h4>
      {agents &&
        agents.map((agent) => <AgenstPage agent={agent} key={agent.uuid} />)}
    </Container>
  );
}
