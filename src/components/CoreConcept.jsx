import "./CoreConcept.css";

import { CORE_CONCEPTS } from "../data";

export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt="Stylized atom" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
