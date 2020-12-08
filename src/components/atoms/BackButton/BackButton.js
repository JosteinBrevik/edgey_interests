import "./BackButton.css";
import BackArrowSVG from "../../../assets/back-arrow.svg";
import { Link } from "react-router-dom";

const BackButton = ({ BackPage }) => (
  <Link className="BackButton" to={"/" + BackPage}>
    <svg
      id="back-arrow"
      width="200"
      height="100"
      viewBox="0 0 524 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M503 97.9615C498.242 68.149 482.769 52.704 457.277 43.3082C435.147 35.152 420.154 37.8078 406.261 57.9371C394.16 75.4697 388.399 96.1927 378.108 114.814C367.247 134.465 336.601 137.707 318.202 137.986C297.564 138.299 270.492 133.594 260.095 110.601C253.332 95.6442 248.236 84.8945 243.977 69.0002C240.872 57.4142 242.74 35.2256 251.5 31.5C257.637 28.89 285.123 30.108 290 35.5004C293.052 38.8751 304.283 74.064 302.5 78.5002C300.174 84.2879 275.723 86.1293 271.269 88.5002C261.62 93.6374 248.949 93.8567 238.186 95.3868C228.82 96.7183 218.178 96.5708 208.762 95.7379C194.835 94.506 166.849 75.8427 166.849 75.8427C166.849 75.8427 145.094 62.2264 129.593 62.1502C117.243 62.0894 109.544 61.6037 99.1107 70.5764C88.5033 79.6987 69.2946 85.5094 55.5 88.5002"
        stroke="#D3DEF2"
        stroke-width="20"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M80 20.5C76.5637 24.0905 23.1042 81.251 21 86"
        stroke="#D3DEF2"
        stroke-width="20"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.5 86.5C30.3967 90.7122 53.4914 101.468 61.5 106.5C63.5716 107.802 101.818 141 99.5 141"
        stroke="#D3DEF2"
        stroke-width="20"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </Link>
);

export default BackButton;
