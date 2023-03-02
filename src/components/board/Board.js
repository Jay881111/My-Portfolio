import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Board.css";

function Board() {
  const initialValues = { title: "", body: "" };
  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;
  var date = new Date().getDate();
  var hour = new Date().getHours();
  var min = new Date().getMinutes();

  const [writer, setWriter] = useState();

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const email = user.email;
      const userRef = doc(db, "userdata", `${email}`);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        const { name } = docSnap.data();
        setWriter(name);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } else {
    }
  });

  useEffect(() => {
    getBoardData();
  }, []);

  const [boardData, setBoardData] = useState([]);

  const qb = query(collection(db, "Board"));
  const getBoardData = async () => {
    getDocs(qb)
      .then((response) => {
        const oldBoardList = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setBoardData(oldBoardList);
        console.log("oldBoardList", oldBoardList);
      })
      .catch((error) => console.log(error.message));
  };

  // const sortedBoardNumber = boardData.sort((a, b) => {
  //   // console.log("b", b.data.number - a.data.number);
  //   var max = Number.MIN_SAFE_INTEGER;
  //   if (a.data.number > max) max = a.data.number;
  //   // if (b.data.number > max) max = b.data.number;
  //   console.log("max", max);
  // });

  let maxList = [];
  var numbering;
  boardData.forEach((item) => {
    let max = Number.MIN_SAFE_INTEGER;
    if (item.data.number > max) max = item.data.number;
    maxList.push(max);
  });
  var recentNumber = Math.max(...maxList);
  console.log("max", maxList);
  console.log("recent1", recentNumber);
  if (recentNumber >= 0) {
    recentNumber = Math.max(...maxList);
    console.log(">0", recentNumber);
  } else if (recentNumber === Infinity || -Infinity) {
    recentNumber = 0;
    console.log("recentNumber", recentNumber);
  }

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    console.log("numbering insubmit", numbering);
    const boardRef = await addDoc(collection(db, "Board"), {
      title: values.title,
      body: values.body,
      clicked: 0,
      likes: 0,
      number: recentNumber + 1,
      writer: writer,
      createdAt: Date.now(),
      writeDate: `${month}/${date}`,
      TimeDetail: `${year}.${month}.${date} ${hour}:${min}`,
    });
    resetForm({ values: "" });
    // navigate("/features/boardmain");
    window.close();
  };
  const validationSchema = Yup.object({
    title: Yup.string("").required(),
    body: Yup.string("").required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Field
              className="input_title"
              id="title"
              name="title"
              type="text"
              autoFocus
              placeholder="제목을 입력해 주세요."
            />
            <div className="body">
              <Field
                className="Board_textarea"
                as="textarea"
                name="body"
                id="body"
                rows="5"
                cols="30"
                placeholder="내용을 입력해 주세요."
              />
            </div>
            <input
              type="submit"
              value="전송"
              className="w-20 h-7 border-[1px] border-gray-500 bg-gray-200 rounded-1"
            />
          </Form>
        );
      }}
    </Formik>

    // <div>
    //   <h3>글쓰기</h3>
    //   <form onSubmit={handleSubmit}>
    //     <div className="write_Container">
    //       <div className="inputSide">
    //         {/* <label htmlFor="title">Title:</label> */}
    //         <input
    //           id="title"
    //           value={newText || ""}
    //           onChange={(e) => setNewText(e.target.value)}
    //           placeholder="제목을 입력해 주세요."
    //           autoFocus
    //         />
    //       </div>

    //       <textarea
    //         // className="ml-1 w-[390px] h-[100px]"
    //         value={newBody || ""}
    //         onChange={(e) => setNewBody(e.target.value)}
    //         placeholder="내용을 입력하세요."
    //         rows="10"
    //         id="textarea"
    //         // style="width:100%"
    //       />
    //     </div>

    //     <button className="w-12 h-7 border-[1px] border-black">save</button>
    //   </form>
    // </div>
  );
}

export default Board;
