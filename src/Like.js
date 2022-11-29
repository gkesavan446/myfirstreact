import { useState } from "react";

export function Like() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  return (
    <div className="btnWrap">
      <button onClick={() => setLike(like + 1)}><span>👍</span> {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}><span>👎</span> {disLike}</button>
    </div>
  );
}
