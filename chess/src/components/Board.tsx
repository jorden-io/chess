import Piece from "@/dataStructures/piece";
import React, { FC, useEffect, useState } from "react";
import Matrix from "../dataStructures/matrix";
interface Props {
  matrix: Matrix;
}
const Board: FC<Props> = ({ matrix }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [startX, setStartX] = useState<number>();
  const [startY, setStartY] = useState<number>();
  const [desX, setDesX] = useState<number>();
  const [desY, setDesY] = useState<number>();
  const [currentPiece, setPiece] = useState<Piece>();
  useEffect(() => {
    setLoading(false);
    console.log(matrix);
  }, []);
  if (loading) {
    return <>loading</>;
  } else {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              margin: "5%",
              boxShadow: "0px 0px 8px black",
              border: "none",
            }}
          >
            {matrix.container.map((c, ci) => (
              <td style={{ border: "none", padding: "0px" }}>
                {c.map((r, ri) => (
                  <p
                    id={`p-${ci}-${ri}`}
                    onClick={(e) => {
                      r.movePiece(matrix, r, startY!, startX!, ci, ri);
                      setStartX(ri);
                      setStartY(ci);
                      setPiece(r);
                    }}
                    onDoubleClick={() => {
                      r.checkAvailableMoves(matrix, r, ci, ri);
                      setStartX(ri);
                      setStartY(ci);
                      setPiece(undefined);
                    }}
                    style={{
                      cursor: "-webkit-grab",
                      border: r.val
                        ? "solid 2px rgb(28, 28, 28)"
                        : "solid 2px rgb(185, 185, 185)",
                      color:
                        r.pieceName === "x"
                          ? r.val % 2 != 0
                            ? "rgb(28, 28, 28)"
                            : "rgb(185, 185, 185)"
                          : r.white
                          ? "white"
                          : "black",
                      backgroundColor:
                        r.val === 1 ? "rgb(28, 28, 28)" : "rgb(185, 185, 185)",
                      padding: "20px",
                      margin: "0px",
                    }}
                  >
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "none",
                        visibility: r?.src ? "visible" : "hidden",
                      }}
                      src={r.src}
                    ></img>
                  </p>
                ))}
              </td>
            ))}
          </div>
        </div>
      </>
    );
  }
};
export default Board;
