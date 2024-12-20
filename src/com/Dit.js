import React, { useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Fire";
import Rev from "./Rev";

const Dit = () => {
  const { id } = useParams();

  //   window.alert(id)

  const [data, setdata] = useState({
    name: "",
    year: "",
    img: "",
    about: "",
    rating: 0, //total 5=3=4=3 star
    rated: 0, // total user
  });

  useEffect(() => {
    async function abc() {
      const qwe = doc(db, "movie", id);
      const datax = await getDoc(qwe);
      setdata(datax.data());
    }
    abc();
  }, []);
  // console.log(data)
  console.log( data.rated);
  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center  md:items-start w-full justify-center">
      <img className="h-96  md:sticky top-24" src={data.img} />
      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          {data.name}
          <span className="text-xl">({data.year})</span>
        </h1>
        <ReactStars
          size={20}
          half={true}
          value={data.rating / data.rated}
          edit={false}
        />
        <p className="mt-3 ">{data.about}</p>
        <Rev id={id} pr={data.rating} u={data.rated} />
      </div>
    </div>
  );
};

export default Dit;
