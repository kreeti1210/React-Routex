import React, {use, useEffect, useState} from "react";

const Github = () => {
    const [data,setData]= useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/kreeti1210')
        .then(res => res.json())
        .then(data =>
        {
            console.log(data);
            setData(data);
        }
        )
    })
  return (
    <div className="text-white p-3 text-3xl bg-gray-600">Github followers: {data.followers}
    <img src={data.avatar_url}  alt="git pic" width={300}/>
    </div>
  );
};

export default Github;
