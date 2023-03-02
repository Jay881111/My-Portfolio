import { useNavigate, useParams } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Board.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import { Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function BoardContent() {
  const { id } = useParams();
  const [boardList, setBoardList] = useState([]);
  const [commentData, setCommentData] = useState([
    // { id: 1, name: "Jane", content: "음.." },
    // { id: 2, name: "Haru", content: "Comment" },
    // { id: 3, name: "Boom", content: "Reply" },
  ]);

  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;
  var date = new Date().getDate();
  var hour = new Date().getHours();
  var min = new Date().getMinutes();

  useEffect(() => {
    getData();
    getComments();
  }, []);

  // const boardRef = doc(db, "Board", `${id}`);
  const q = query(doc(db, "Board", `${id}`));

  const getData = async () => {
    const snapshot = await getDoc(q);
    if (snapshot.exists()) {
      // console.log("snapshot", snapshot);
      //   console.log("Document data:", snapshot.data());
      const Data = snapshot.data();
      setBoardList(Data);
      setDoc(q, { clicked: Number(Data.clicked) + Number(1) }, { merge: true });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const qc = query(collection(db, "Board", `${id}`, "comments"));
  const getComments = async () => {
    getDocs(qc)
      .then((response) => {
        // console.log("res", response.docs);
        // setUserList(response.docs);
        const oldCommentList = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setCommentData(oldCommentList);
      })
      .catch((error) => console.log(error.message));
  };

  const sortedCommentData = commentData.sort((a, b) => {
    return a.data.createdAt - b.data.createdAt;
  });
  // console.log("commentdata", commentData);

  const handleLikes = () => {
    setDoc(q, { likes: boardList.likes + Number(1) }, { merge: true });
  };

  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const addComments = async (e) => {
    addDoc(collection(db, "Board", `${id}`, "comments"), {
      // id: Date.now(),
      createdAt: Date.now(),
      name: "sss",
      content: textRef.current.value,
      timeDetail: `${year}.${month}.${date} ${hour}:${min}`,
    });
    getComments();
  };
  console.log("boardlist", boardList);

  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteDoc(q);
    navigate("/features/boardmain");
  };

  const handleClickScroll = () => {
    const element = document.getElementById("type_comment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="body_container">
      <div className="body_header">
        <h3>{boardList.title}</h3>
        <div className="secondLow">
          <span>
            {boardList.TimeDetail}
            <span className="ml-4">조회 {boardList.clicked}</span>
          </span>
          <button onClick={handleDelete} className="body_delete" type="button">
            삭제
          </button>
        </div>
      </div>
      <div className="content_container">{boardList.body}</div>
      <div className="footer">
        <Button
          style={{ marginLeft: "-20px", width: "120px", color: "black" }}
          onClick={handleLikes}
        >
          {/* likes는 수정해야함 */}
          <FavoriteBorderIcon fontSize="small" style={{ color: "red" }} />{" "}
          좋아요 {boardList.likes}개
        </Button>
        <div>
          <Button
            style={{ marginLeft: "-20px", width: "120px", color: "black" }}
            onClick={handleClickScroll}
          >
            <ChatBubbleOutlineIcon fontSize="small" /> 댓글 {commentData.length}
            개
          </Button>
        </div>
      </div>
      <div className="comments">
        <div className="comments_header">
          <b>댓글</b>
          <ReplayCircleFilledIcon />
        </div>

        {sortedCommentData.map((el) => {
          return (
            <div className="comment_avatar" key={el.id}>
              <Avatar
                sx={{ width: 35, height: 35 }}
                alt={el.name}
                src="/static/images/avatar/1.jpg"
              />
              <div className="ml-3">
                <div className="avatar_name">{el.data.name}</div>
                <div className="comment_content">{el.data.content}</div>
                <div className="comment_detail">{el.data.timeDetail}</div>
              </div>
            </div>
          );
        })}
        <div className="comment_cover">
          <textarea
            id="type_comment"
            ref={textRef}
            placeholder="댓글 입력하기"
            onInput={handleResizeHeight}
            className="comment_type disabled"
            multiline
            // rows="5"
            // cols="5"
          />

          {/* 댓글창 큰상태에서 삭제할때 줄이는법..? */}
          <div className="comment_footer">
            <CameraAltIcon
              style={{
                fontSize: "19px",
                color: "rgb(186, 183, 183)",
              }}
            />
            <button
              onClick={addComments}
              className="comment_button"
              type="button"
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardContent;
