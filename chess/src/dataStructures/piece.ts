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
            if (
              matrix.container[ypos - 1][xpos + 1].pieceName != "x" &&
              !matrix.container[ypos - 1][xpos + 1].white &&
              matrix.container[ypos - 1][xpos + 1].pieceName != ""
            ) {
              document.getElementById(
                `p-${ypos - 1}-${xpos + 1}`
              )!.style.border = "solid 2px green";
            }
            document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
              "solid 2px green";
            document.getElementById(`p-${ypos}-${xpos + 2}`)!.style.border =
              "solid 2px green";
            break;
          }
          if (ypos === 0) {
            if (
              matrix.container[ypos + 1][xpos + 1].pieceName != "x" &&
              !matrix.container[ypos + 1][xpos + 1].white &&
              matrix.container[ypos + 1][xpos + 1].pieceName != ""
            ) {
              document.getElementById(
                `p-${ypos + 1}-${xpos + 1}`
              )!.style.border = "solid 2px green";
            }
            document.getElementById(`p-${ypos}-${xpos + 1}`)!.style.border =
              "solid 2px green";
            document.getElementById(`p-${ypos}-${xpos + 2}`)!.style.border =
              "solid 2px green";
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
            while (
              matrix.container[ypos][xpos + ry].pieceName === "x" ||
              !matrix.container[ypos][xpos + ry].white
            ) {
              if (
                matrix.container[ypos][xpos + ry].pieceName != "x" &&
                !matrix.container[ypos][xpos + ry].white &&
                matrix.container[ypos][xpos + ry].pieceName != ""
              ) {
                document.getElementById(
                  `p-${ypos}-${xpos + ry}`
                )!.style.border = "solid 2px green";
                break;
              }
              if (matrix.container[ypos][xpos + ry].pieceName == "x") {
                document.getElementById(
                  `p-${ypos}-${xpos + ry}`
                )!.style.border = "solid 2px green";
              }
              if (
                matrix.container[ypos][xpos + ry + 1].pieceName != "x" &&
                !matrix.container[ypos][xpos + ry + 1].white
                //matrix.container[ypos][xpos + ry + 1].pieceName != ""
              ) {
                document.getElementById(
                  `p-${ypos}-${xpos + ry + 1}`
                )!.style.border = "solid 2px green";
              }
              if (!(matrix.container[ypos][xpos + ry].pieceName === "x")) {
              }
              ry++;
            }
          }
          ry = 1;
          if (xpos > 0) {
            while (
                matrix.container[ypos][xpos - ry].pieceName != "x" &&
                !matrix.container[ypos][xpos - ry].white 
                //matrix.container[ypos][xpos - ry].pieceName != ""
            ) {
              if (
                matrix.container[ypos][xpos - ry].pieceName != "x" &&
                !matrix.container[ypos][xpos - ry].white &&
                matrix.container[ypos][xpos - ry].pieceName != ""
              ) {
                document.getElementById(
                  `p-${ypos}-${xpos - ry}`
                )!.style.border = "solid 2px green";
                break;
              }
              if (matrix.container[ypos][xpos - ry].pieceName == "x") {
                document.getElementById(
                  `p-${ypos}-${xpos - ry}`
                )!.style.border = "solid 2px green";
              }
              if (
                matrix.container[ypos][xpos - ry - 1].pieceName != "x" &&
                !matrix.container[ypos][xpos - ry - 1].white &&
                matrix.container[ypos][xpos + ry + 1].pieceName != ""
              ) {
                document.getElementById(
                  `p-${ypos}-${xpos - ry - 1}`
                )!.style.border = "solid 2px green";
              }
              if (!(matrix.container[ypos][xpos + ry].pieceName === "x")) {
              }
              ry++;
            }
          }
          //   while (
          //     //matrix.container[ypos + rx][xpos].pieceName === "x" &&
          //     !matrix.container[ypos + rx][xpos].white &&
          //     matrix.container[ypos + rx][xpos].pieceName != ""
          //   ) {
          //     if (
          //       //matrix.container[ypos + rx][xpos].pieceName === "x" &&
          //       !matrix.container[ypos + rx][xpos].white &&
          //       matrix.container[ypos + rx][xpos].pieceName != ""
          //     ) {
          //       document.getElementById(`p-${ypos}-${xpos + ry}`)!.style.border =
          //         "solid 2px green";
          //     }
          //     // if (!(matrix.container[ypos + rx][xpos].pieceName === "x")) {
          //     //   break;
          //     // }
          //     rx++;
          //   }
          break;
        case "k":
          if (matrix.container[ypos + 1][xpos + 2]) {
            if (
              matrix.container[ypos + 1][xpos + 2] ||
              !matrix.container[ypos + 1][xpos + 2].white
            ) {
              document.getElementById(
                `p-${ypos + 1}-${xpos + 2}`
              )!.style.border = "solid 2px green";
            }
          }
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
          if (matrix.container[ypos + 1][xpos - 2]) {
            if (
              matrix.container[ypos + 1][xpos - 2] &&
              !matrix.container[ypos + 1][xpos - 2].white
            ) {
              document.getElementById(
                `p-${ypos + 1}-${xpos - 2}`
              )!.style.border = "solid 2px green";
              break;
            }
          }
          break;
        case "B":
          let by: number = 1;
          let bx: number = 1;
          document.getElementById(`p-${ypos + by}-${xpos + by}`)!.style.border =
            "solid 2px green";
          while (
            matrix.container[ypos + by][xpos + bx].pieceName === "x" &&
            !matrix.container[ypos + by][xpos + bx].white
          ) {
            if (matrix.container[ypos + by][xpos + bx].pieceName === "x") {
            }
            if (matrix.container[ypos + by][xpos + xpos].pieceName != "x") {
              break;
            }
            by++;
            bx++;
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
