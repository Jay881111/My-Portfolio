import { CloseFullscreen } from "@mui/icons-material";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

function BoardDetail({ boardList }) {
  const [boardCommentList, setBoardCommentList] = useState([]);

  const sortedBoardList = boardList.sort((a, b) => {
    return b.data.createdAt - a.data.createdAt;
  });
  const commentRef = useRef(null);

  const commentInfo2 = [];
  const [boardCommentNumber, setBoardCommentNumber] = useState([]);

  useEffect(() => {}, [boardCommentNumber]);

  const getCommentData = async (el) => {
    const commentQ = query(collection(db, "Board", `${el.id}`, "comments"));
    const commentDetails = await getDocs(commentQ);
    const commentInfo = commentDetails.docs.map((doc) => ({
      ...doc.data(),
    }));
  };
  // 이부분을... 어떻게하지
  const BoardDetail = sortedBoardList.map((el) => {
    getCommentData(el);

    return (
      <tr key={el.id}>
        <td>{el.data.number}</td>
        <td>
          <Link to={`/features/boardmain/${el.id}`}>
            {/* javascript로 감쌀시 주소가 감소함(features/boardmain을 안쳐도됨)  */}
            {el.data.title}
            {boardCommentList.length === 0
              ? ""
              : `[${boardCommentList.length}]`}
          </Link>
        </td>
        <td>{el.data.writer}</td>
        <td>{el.data.writeDate}</td>
        <td>{el.data.clicked}</td>
        <td>{el.data.likes}</td>
      </tr>
    );
  });

  return <>{BoardDetail}</>;
}

export default BoardDetail;
