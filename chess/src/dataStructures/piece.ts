import Matrix from "./matrix";
class Piece {
  val: number = 0;
  pieceName: string = "";
  white?: boolean;
  xpos?: number;
  ypos?: number;
  src?: string;
  firstMove: boolean = false;
  public movePiece(
    matrix: Matrix,
    piece: Piece,
    ypos: number,
    xpos: number,
    desy: number,
    desx: number
  ) {
    switch (!piece.white) {
      case true:
        if (piece.pieceName === "x" || !piece.white) {
          if (
            document.getElementById(`p-${desy}-${desx}`)!.style.borderColor ===
            "green"
          ) {
            if (
              matrix.container[desy][desx].pieceName === "x" ||
              matrix.container[desy][desx].pieceName != "x" ||
              !matrix.container[desy][desx].white
            ) {
              matrix.container[desy][desx].src =
                matrix.container[ypos][xpos].src;
              matrix.container[desy][desx].white = true;
              matrix.container[desy][desx].pieceName =
                matrix.container[ypos][xpos].pieceName;
              matrix.container[ypos][xpos].white = undefined;
              matrix.container[ypos][xpos].pieceName = "x";
              matrix.container[ypos][xpos].src = "";
              for (let c = 0; c < 8; c++) {
                for (let r = 0; r < 8; r++) {
                  if (
                    document.getElementById(`p-${c}-${r}`)!.style.borderColor ==
                    "green"
                  ) {
                    document.getElementById(`p-${c}-${r}`)!.style.borderColor =
                      "rgb(25, 25, 25)";
                  }
                }
              }
            } else {
              console.log(desx, desy);
            }
          }
        }
      case false:
        if (piece.pieceName === "x" || piece.white) {
          if (
            document.getElementById(`p-${desy}-${desx}`)!.style.borderColor ===
            "red"
          ) {
            if (
              matrix.container[desy][desx].pieceName === "x" ||
              matrix.container[desy][desx].pieceName != "x" ||
              matrix.container[desy][desx].white
            ) {
              matrix.container[desy][desx].src =
                matrix.container[ypos][xpos].src;
              matrix.container[desy][desx].white = false;
              matrix.container[desy][desx].pieceName =
                matrix.container[ypos][xpos].pieceName;
              matrix.container[ypos][xpos].white = false;
              matrix.container[ypos][xpos].pieceName = "x";
              matrix.container[ypos][xpos].src = "";
              for (let c = 0; c < 8; c++) {
                for (let r = 0; r < 8; r++) {
                  if (
                    document.getElementById(`p-${c}-${r}`)!.style.borderColor ==
                    "red"
                  ) {
                    document.getElementById(`p-${c}-${r}`)!.style.borderColor =
                      "rgb(25, 25, 25)";
                  }
                }
              }
            } else {
            }
          }
        }
    }
  }
  public checkAvailableMoves(
    matrix: Matrix,
    piece: Piece,
    ypos: number,
    xpos: number
  ) {
    if (piece.white) {
      switch (piece.pieceName) {
        case "P":
          if (ypos === 7) {
            if (xpos === 7) {
              break;
            }
            if (
              matrix.container[ypos - 1][xpos + 1].pieceName != "x" &&
              !matrix.container[ypos - 1][xpos + 1].white &&
              matrix.container[ypos - 1][xpos + 1].pieceName != ""
            ) {
              document.getElementById(
                `p-${ypos - 1}-${xpos + 1}`
              )!.style.border = "solid 2px green";
            }
            if (matrix.container[ypos - 1][xpos + 1].pieceName === "x") {
              document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
                "solid 2px green";
              document.getElementById(`p-${ypos}-${xpos + 2}`)!.style.border =
                "solid 2px green";
            }
            break;
          }
          if (ypos === 0) {
            if (xpos === 7) {
              break;
            }
            if (
              matrix.container[ypos + 1][xpos + 1].pieceName != "x" &&
              !matrix.container[ypos + 1][xpos + 1].white &&
              matrix.container[ypos + 1][xpos + 1].pieceName != ""
            ) {
              document.getElementById(
                `p-${ypos + 1}-${xpos + 1}`
              )!.style.border = "solid 2px green";
            }
            if (matrix.container[ypos][xpos + 1].pieceName === "x") {
              document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
                "solid 2px green";
              document.getElementById(`p-${ypos}-${xpos + 2}`)!.style.border =
                "solid 2px green";
            }
            break;
          }
          if (xpos === 7) {
            break;
          }
          if (matrix.container[ypos][xpos + 1].pieceName === "x") {
            document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
              "solid 2px green";
            if (matrix.container[ypos][xpos + 2].pieceName === "x") {
              document.getElementById(`p-${ypos}-${xpos + 2}`)!.style.border =
                "solid 2px green";
            }
            document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
              "solid 2px green";
          }
          if (
            matrix.container[ypos - 1][xpos + 1].pieceName != "x" &&
            !matrix.container[ypos - 1][xpos + 1].white &&
            matrix.container[ypos - 1][xpos + 1].pieceName != ""
          ) {
            document.getElementById(`p-${ypos - 1}-${xpos + 1}`)!.style.border =
              "solid 2px green";
          }
          if (
            matrix.container[ypos + 1][xpos + 1].pieceName != "x" &&
            !matrix.container[ypos + 1][xpos + 1].white &&
            matrix.container[ypos + 1][xpos + 1].pieceName != ""
          ) {
            document.getElementById(`p-${ypos + 1}-${xpos + 1}`)!.style.border =
              "solid 2px green";
          }
          break;

        case "R":
          let ry: number = 1;
          let rx: number = 1;
          if (xpos != 7) {
            while (xpos <= 7) {
              if (
                !matrix.container[ypos][xpos + ry] ||
                matrix.container[ypos][xpos + ry].white
              ) {
                break;
              }

              if (
                matrix.container[ypos][xpos + ry].pieceName != "x" &&
                !matrix.container[ypos][xpos + ry].white
              ) {
                document.getElementById(
                  `p-${ypos}-${xpos + ry}`
                )!.style.border = "solid 2px green";
                break;
              }
              document.getElementById(`p-${ypos}-${xpos + ry}`)!.style.border =
                "solid 2px green";
              ry++;
            }
          }
          ry = 1;
          if (xpos > 0) {
            while (xpos > 0) {
              if (
                !matrix.container[ypos][xpos - ry] ||
                matrix.container[ypos][xpos - ry].white
              ) {
                break;
              }

              if (
                matrix.container[ypos][xpos - ry].pieceName != "x" &&
                !matrix.container[ypos][xpos - ry].white
              ) {
                document.getElementById(
                  `p-${ypos}-${xpos - ry}`
                )!.style.border = "solid 2px green";
                break;
              }

              if (ry - xpos == 1) {
                break;
              }
              document.getElementById(`p-${ypos}-${xpos - ry}`)!.style.border =
                "solid 2px green";
              ry++;
            }
          }
          if (ypos >= 0) {
            while (ypos <= 7) {
              if (rx + ypos > 7) {
                break;
              }

              if (
                matrix.container[ypos + rx][xpos].pieceName != "x" &&
                !matrix.container[ypos + rx][xpos].white
              ) {
                document.getElementById(
                  `p-${ypos + rx}-${xpos}`
                )!.style.border = "solid 2px green";
                break;
              }

              if (
                !matrix.container[ypos + rx][xpos] ||
                matrix.container[ypos + rx][xpos].white ||
                matrix.container[ypos + rx][xpos].pieceName != "x"
              ) {
                break;
              }

              document.getElementById(`p-${ypos + rx}-${xpos}`)!.style.border =
                "solid 2px green";
              rx++;
            }
          }
          rx = 1;
          if (ypos <= 7) {
            while (ypos > 0) {
              if (rx - ypos === 1) {
                break;
              }

              if (
                matrix.container[ypos - rx][xpos].pieceName != "x" &&
                !matrix.container[ypos - rx][xpos].white
              ) {
                document.getElementById(
                  `p-${ypos - rx}-${xpos}`
                )!.style.border = "solid 2px green";
                break;
              }

              if (
                !matrix.container[ypos - rx][xpos] ||
                matrix.container[ypos - rx][xpos].white ||
                matrix.container[ypos - rx][xpos].pieceName != "x"
              ) {
                break;
              }
              document.getElementById(`p-${ypos - rx}-${xpos}`)!.style.border =
                "solid 2px green";
              rx++;
            }
          }

          break;
        case "k":
          if (ypos <= 6) {
            if (matrix.container[ypos + 1][xpos + 2]) {
              if (
                matrix.container[ypos + 1][xpos + 2] &&
                !matrix.container[ypos + 1][xpos + 2].white
              ) {
                document.getElementById(
                  `p-${ypos + 1}-${xpos + 2}`
                )!.style.border = "solid 2px green";
              }
            }
          }

          if (ypos < 6) {
            if (matrix.container[ypos + 2][xpos + 1]) {
              if (
                matrix.container[ypos + 2][xpos + 1] &&
                !matrix.container[ypos + 2][xpos + 1].white
              ) {
                document.getElementById(
                  `p-${ypos + 2}-${xpos + 1}`
                )!.style.border = "solid 2px green";
              }
            }
          }
          if (ypos > 0) {
            if (matrix.container[ypos - 1][xpos + 2]) {
              if (
                matrix.container[ypos - 1][xpos + 2] &&
                !matrix.container[ypos - 1][xpos + 2].white
              ) {
                document.getElementById(
                  `p-${ypos - 1}-${xpos + 2}`
                )!.style.border = "solid 2px green";
              }
            }
          }

          if (ypos > 2) {
            if (matrix.container[ypos - 2][xpos + 1]) {
              if (
                matrix.container[ypos - 2][xpos + 1] &&
                !matrix.container[ypos - 2][xpos + 1].white
              ) {
                document.getElementById(
                  `p-${ypos - 2}-${xpos + 1}`
                )!.style.border = "solid 2px green";
              }
            }
          }

          if (ypos > 0) {
            if (matrix.container[ypos - 1][xpos - 2]) {
              if (
                matrix.container[ypos - 1][xpos - 2] &&
                !matrix.container[ypos - 1][xpos - 2].white
              ) {
                document.getElementById(
                  `p-${ypos - 1}-${xpos - 2}`
                )!.style.border = "solid 2px green";
              }
            }
          }
          if (ypos > 2) {
            if (matrix.container[ypos - 2][xpos - 1]) {
              if (
                matrix.container[ypos - 2][xpos - 1] &&
                !matrix.container[ypos - 2][xpos - 1].white
              ) {
                document.getElementById(
                  `p-${ypos - 2}-${xpos - 1}`
                )!.style.border = "solid 2px green";
              }
            }
          }
          if (ypos < 6) {
            if (matrix.container[ypos + 1][xpos - 2]) {
              if (
                matrix.container[ypos + 1][xpos - 2] &&
                !matrix.container[ypos + 1][xpos - 2].white
              ) {
                document.getElementById(
                  `p-${ypos + 1}-${xpos - 2}`
                )!.style.border = "solid 2px green";
              }
            }
          }

          if (ypos < 6) {
            if (matrix.container[ypos + 2][xpos - 1]) {
              if (
                matrix.container[ypos + 2][xpos - 1] &&
                !matrix.container[ypos + 2][xpos - 1].white
              ) {
                document.getElementById(
                  `p-${ypos + 2}-${xpos - 1}`
                )!.style.border = "solid 2px green";
              }
            }
          }

          break;
        case "B":
          let by: number = 1;
          let bx: number = 1;
          if (xpos != 7) {
            while (ypos + by <= 7) {
              if (
                !matrix.container[ypos + by][xpos + by] ||
                matrix.container[ypos + by][xpos + by].white
              ) {
                break;
              }

              if (
                matrix.container[ypos + by][xpos + by].pieceName != "x" &&
                !matrix.container[ypos + by][xpos + by].white
              ) {
                document.getElementById(
                  `p-${ypos + by}-${xpos + by}`
                )!.style.border = "solid 2px green";
                break;
              }
              document.getElementById(
                `p-${ypos + by}-${xpos + by}`
              )!.style.border = "solid 2px green";
              by++;
            }
          }
          by = 1;
          if (xpos > 0) {
            while (ypos - by >= 0) {
              if (
                !matrix.container[ypos - by][xpos - by] ||
                matrix.container[ypos - by][xpos - by].white
              ) {
                break;
              }

              if (
                matrix.container[ypos - by][xpos - by].pieceName != "x" &&
                !matrix.container[ypos - by][xpos - by].white
              ) {
                document.getElementById(
                  `p-${ypos - by}-${xpos - by}`
                )!.style.border = "solid 2px green";
                break;
              }
              document.getElementById(
                `p-${ypos - by}-${xpos - by}`
              )!.style.border = "solid 2px green";
              by++;
            }
          }

          bx = 1;
          if (xpos > 0 && xpos <= 7) {
            while (
              bx + ypos <=
              7
              // matrix.container[ypos + bx][xpos - bx].pieceName === "x" &&
              // !matrix.container[ypos + bx][xpos - bx].white &&
              // matrix.container[ypos + bx][xpos - bx].pieceName != ""
            ) {
              if (
                matrix.container[ypos + bx][xpos - bx].pieceName != "x" &&
                !matrix.container[ypos + bx][xpos - bx].white
              ) {
                document.getElementById(
                  `p-${ypos + bx}-${xpos - bx}`
                )!.style.border = "solid 2px green";
                break;
              }

              if (
                !matrix.container[ypos + bx][xpos - bx] ||
                matrix.container[ypos + bx][xpos - bx].white ||
                matrix.container[ypos + bx][xpos - bx].pieceName != "x"
              ) {
                break;
              }
              document.getElementById(
                `p-${ypos + bx}-${xpos - bx}`
              )!.style.border = "solid 2px green";
              bx++;
            }
          }

          bx = 1;
          if (ypos > 0 && xpos != 7 && ypos <= 7) {
            while (true) {
              if (!matrix.container[ypos - bx][xpos + bx]) {
                break;
              }
              //if (xpos + bx <= 7)
              if (
                matrix.container[ypos - bx][xpos + bx].pieceName != "x" &&
                !matrix.container[ypos - bx][xpos + bx].white
              ) {
                document.getElementById(
                  `p-${ypos - bx}-${xpos + bx}`
                )!.style.border = "solid 2px green";
                break;
              }
              if (
                !matrix.container[ypos - bx][xpos + bx] ||
                matrix.container[ypos - bx][xpos + bx].white ||
                matrix.container[ypos - bx][xpos + bx].pieceName != "x"
              ) {
                break;
              }
              document.getElementById(
                `p-${ypos - bx}-${xpos + bx}`
              )!.style.border = "solid 2px green";
              bx++;
            }
          }

          break;
        case "Q":
          console.log(ypos, xpos, piece.pieceName);
        case "K":
          if (matrix.container[ypos - 1][xpos]) {
            if (matrix.container[ypos - 1][xpos].pieceName === "x") {
              document.getElementById(`p-${ypos - 1}-${xpos}`)!.style.border =
                "solid 2px green";
            }
          }
          if (matrix.container[ypos + 1][xpos]) {
            if (matrix.container[ypos + 1][xpos].pieceName === "x") {
              document.getElementById(`p-${ypos + 1}-${xpos}`)!.style.border =
                "solid 2px green";
            }
          }
          if (matrix.container[ypos][xpos + 1]) {
            if (matrix.container[ypos][xpos + 1].pieceName === "x") {
              document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
                "solid 2px green";
            }
          }
          if (matrix.container[ypos][xpos - 1]) {
            if (matrix.container[ypos][xpos - 1].pieceName === "x") {
              document.getElementById(`p-${ypos}-${xpos - 1}`)!.style.border =
                "solid 2px green";
            }
          }
          break;
      }
    }
    if (!piece.white) {
      switch (piece.pieceName) {
        case "P":
          console.log(ypos, xpos, piece.pieceName);
          if (ypos === 0) {
            if (
              matrix.container[ypos + 1][xpos - 1].pieceName != "x" &&
              matrix.container[ypos + 1][xpos - 1].white &&
              matrix.container[ypos + 1][xpos - 1].pieceName != ""
            ) {
              document.getElementById(
                `p-${ypos + 1}-${xpos - 1}`
              )!.style.border = "solid 2px red";
            }
            document.getElementById(`p-${ypos}-${xpos - 1}`)!.style.border =
              "solid 2px red";
            document.getElementById(`p-${ypos}-${xpos - 2}`)!.style.border =
              "solid 2px red";
            break;
          }
          if (ypos === 7) {
            if (
              matrix.container[ypos - 1][xpos - 1].pieceName != "x" &&
              matrix.container[ypos - 1][xpos - 1].white &&
              matrix.container[ypos - 1][xpos - 1].pieceName != ""
            ) {
              document.getElementById(
                `p-${ypos - 1}-${xpos - 1}`
              )!.style.border = "solid 2px red";
            }
            document.getElementById(`p-${ypos}-${xpos - 1}`)!.style.border =
              "solid 2px red";
            document.getElementById(`p-${ypos}-${xpos - 2}`)!.style.border =
              "solid 2px red";
            break;
          }
          if (matrix.container[ypos][xpos - 1].pieceName === "x") {
            document.getElementById(`p-${ypos}-${xpos - 1}`)!.style.border =
              "solid 2px red";

            if (matrix.container[ypos][xpos - 2].pieceName === "x") {
              console.log(`${ypos}-${xpos - 1} & ${ypos}-${xpos - 2} are open`);
              document.getElementById(`p-${ypos}-${xpos - 2}`)!.style.border =
                "solid 2px red";
            }
            document.getElementById(`p-${ypos}-${xpos - 1}`)!.style.border =
              "solid 2px red";
            console.log(`${ypos - 1}-${xpos} is open`);
          }

          if (
            matrix.container[ypos + 1][xpos - 1].pieceName != "x" &&
            matrix.container[ypos + 1][xpos - 1].white &&
            matrix.container[ypos + 1][xpos - 1].pieceName != ""
          ) {
            document.getElementById(`p-${ypos + 1}-${xpos - 1}`)!.style.border =
              "solid 2px red";
          }
          if (
            matrix.container[ypos - 1][xpos - 1].pieceName != "x" &&
            matrix.container[ypos - 1][xpos - 1].white &&
            matrix.container[ypos - 1][xpos - 1].pieceName != ""
          ) {
            document.getElementById(`p-${ypos - 1}-${xpos - 1}`)!.style.border =
              "solid 2px red";
          }
          break;
        case "k":
          console.log(ypos, xpos, piece.pieceName);
          if (matrix.container[ypos - 1][xpos - 2].pieceName === "x") {
            document.getElementById(`p-${ypos - 1}-${xpos - 2}`)!.style.border =
              "solid 2px red";
          }
          if (matrix.container[ypos + 1][xpos - 2]) {
            if (matrix.container[ypos + 1][xpos - 2].pieceName === "x") {
              document.getElementById(
                `p-${ypos + 1}-${xpos - 2}`
              )!.style.border = "solid 2px red";
            }
          }
          if (matrix.container[ypos + 1][xpos + 2]) {
            if (matrix.container[ypos + 1][xpos + 2].pieceName === "x") {
              document.getElementById(
                `p-${ypos + 1}-${xpos + 2}`
              )!.style.border = "solid 2px red";
            }
          }
          if (matrix.container[ypos - 1][xpos + 2]) {
            if (matrix.container[ypos - 1][xpos + 2].pieceName === "x") {
              document.getElementById(
                `p-${ypos - 1}-${xpos + 2}`
              )!.style.border = "solid 2px red";
            }
          }
          break;
        case "B":
          console.log(ypos, xpos, piece.pieceName);
          let by: number = 0;
          let bx: number = 0;
          while (matrix.container[ypos + by][xpos + bx].pieceName != "x") {
            if (matrix.container[ypos + by++][xpos + bx++].pieceName === "x") {
              console.log(`${ypos + by}-${xpos + bx}`);
            }
          }
          if (matrix.container[ypos + 1][xpos + 1].pieceName === "x") {
            console.log(`${ypos + 1}-${xpos + 1}`);
          }
          break;
        case "Q":
          console.log(ypos, xpos, piece.pieceName);
        case "K":
          console.log(ypos, xpos, piece.pieceName);
          if (matrix.container[ypos + 1][xpos]) {
            if (matrix.container[ypos + 1][xpos].pieceName === "x") {
              document.getElementById(`p-${ypos + 1}-${xpos}`)!.style.border =
                "solid 2px red";
            }
          }
          if (matrix.container[ypos - 1][xpos]) {
            if (matrix.container[ypos - 1][xpos].pieceName === "x") {
              document.getElementById(`p-${ypos - 1}-${xpos}`)!.style.border =
                "solid 2px red";
            }
          }
          if (matrix.container[ypos][xpos - 1]) {
            if (matrix.container[ypos][xpos - 1].pieceName === "x") {
              document.getElementById(`p-${ypos}-${xpos - 1}`)!.style.border =
                "solid 2px red";
            }
          }
          if (matrix.container[ypos][xpos + 1]) {
            if (matrix.container[ypos][xpos + 1].pieceName === "x") {
              document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
                "solid 2px red";
            }
          }
          break;
      }
    }
  }
}
export default Piece;
