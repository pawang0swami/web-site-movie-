import React, { useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Fire";

const Dit = () => {
  const {id} = useParams();
const[data,setdata]=useState({
    // name:"",
    // year:"",
    // img:"",
    // about:""
})

//   window.alert(id)
  useEffect(()=>{
    async function abc() {
        const qwe=doc(db,"movie",id)
         const datax= await getDoc(qwe) 
         setdata (datax.data())
    }
    abc()
  }
//   ,[]
)
// console.log(data)
  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center  md:items-start w-full justify-center">
      <img
        className="h-96  md:sticky top-24"
        // src={data.img}
      />
      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          {/* {data.name} */}
           <span className="text-xl">
            {/* ({data.year}) */}
            </span>
        </h1>
        <ReactStars size={20} half={true} value={3.5} edit={false} />
        <p className="mt-3 ">
            {/* {data.about} */}

        </p>
      </div>
    </div>
  );
};

export default Dit;
