import React, { useEffect, useState } from "react";
import "./Board.css";
import { Link } from "react-router-dom";
import { collection, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import BoardDetail from "./BoardDetail";
import { Button } from "@mui/material";

function BoardMain() {
  const [boardList, setBoardList] = useState([]);
  const getBoardList = () => {
    const boardRef = collection(db, "Board");

    getDocs(boardRef)
      .then((response) => {
        const bList = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setBoardList(bList);
      })
      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div className="container">
      <h1>Board</h1>
      <table>
        <thead>
          <tr className="rows">
            <td className="number"></td>
            <td className="title">제목</td>
            <td className="writer">작성자</td>
            <td className="writeDate">작성일</td>
            <td className="clicked">조회</td>
            <td className="likes">좋아요</td>
          </tr>
        </thead>
        <tbody>
          <BoardDetail boardList={boardList} />
        </tbody>
      </table>
      <div className="foot">
        <Button
          onClick={() =>
            window.open("/features/boardmain/createboard", "_blank")
          }
        >
          글쓰기
        </Button>
      </div>
    </div>
  );
}

export default BoardMain;
