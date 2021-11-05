import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";


export default function Hobby() {
  const [hobbyData, setHobbyData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hobby"] {
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags 
      }`
      )
      .then((data) => setHobbyData(data))
      .catch(console.error);
  }, []);

  return (
 
  );
}
