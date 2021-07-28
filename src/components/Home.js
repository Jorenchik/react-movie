import { prevElementSibling } from "domutils";
import React, { useState, useEffect } from "react";

// Config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URD } from "../config";

// Components

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import noImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state, loading, error);

  return <div>Home page</div>;
};

export default Home;
