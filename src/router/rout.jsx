import React from "react";
import { Home, Edit, Create } from "../page";
import paths from "./paths";

const routed = [
  { path: paths.HOME, element: <Home /> },
  { path: paths.CREATE, element: <Create /> },
  { path: paths.EDIT, element: <Edit /> },
];

export default routed;