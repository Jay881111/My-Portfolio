import React from "react";
import { useParams, useRoutes } from "react-router-dom";

function ParamsDetail() {
  const productList = [
    { id: 0, name: "Hollys Coffee", color: "red", since: 1998 },
    { id: 1, name: "Twosome Place", color: "#000000", since: 2002 },
    { id: 2, name: "Ediya Coffee", color: "#002472", since: 2002 },
  ];
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>ParamsDetail</h1>
      <div>
        <div>name: {productList[id].name}</div>
        <div>
          main color:
          <input type="color" value={productList[id].color} readOnly />
        </div>
        <div>Company since: {productList[id].since}</div>
      </div>
    </div>
  );
}

export default ParamsDetail;
