import React from "react";

function StudyCode() {
  function onlyNumber(e) {
    console.log(e.type, e.target.value);
    const regexp = /\D/g;
    e.target.value = e.target.value.replace(regexp, "");
  }
  return (
    <div>
      <input onInput={onlyNumber} />
    </div>
  );
}

export default StudyCode;
