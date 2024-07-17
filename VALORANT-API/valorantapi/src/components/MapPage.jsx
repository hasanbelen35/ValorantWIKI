import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMaps } from "../redux/mapSlice";
import MapList from "../components/MapList.jsx";

export default function MapPage() {
  const dispatch = useDispatch();
  const { maps } = useSelector((state) => state.maps);

  useEffect(() => {
    dispatch(getAllMaps());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {maps && maps.map((map) => <MapList map={map} key={map.uuid} />)}
    </div>
  );
}
