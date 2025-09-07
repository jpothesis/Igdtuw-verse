import { useParams } from "react-router-dom";
import CseSubjects from "./CseSubjects.jsx";
import ItSubjects from "./ItSubjects.jsx";
import EceSubjects from "./EceSubjects.jsx";
// 👉 Import more branch subject files if you have them

export default function SubjectsWrapper() {
  const { branch, semester } = useParams();

  if (branch === "cse") return <CseSubjects semester={semester} />;
  if (branch === "it") return <ItSubjects semester={semester} />;
  if (branch === "ece") return <EceSubjects semester={semester} />;

  return <h1>No subjects found for {branch}</h1>;
}
