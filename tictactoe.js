function tic_tac() {
    let board = [];
    iLine = 3;
    jColon = 3;
    count = 0;
    let result;
    for (let i = 0; i < iLine; i++) {
      board[i] = [];
      for (let j = 0; j < jColon; j++) {
        board[i][j] = count;
        count++;
      }
      return board;
    }
    if (board[[0][0]] === "X" && board[[0][1]] === "X" && board[[0][2]] === "X") {
      return result="1";
    }
    if (board[[1][0]] === "X" && board[[1][1]] === "X" && board[[1][2]] === "X") {
      return result="1";
    }
    if (board[[2][0]] === "X" && board[[2][1]] === "X" && board[[2][2]] === "X") {
      return result="1";
    }
    if (board[[0][0]] === "X" && board[[1][1]] === "X" && board[[2][2]] === "X") {
      return result="1";
    }
    if (board[[0][2]] === "X" && board[[1][1]] === "X" && board[[2][0]] === "X") {
      return result="1";
    }
    if (board[[0][0]] === "X" && board[[1][0]] === "X" && board[[2][0]] === "X") {
      return result="1";
    }
    if (board[[0][1]] === "X" && board[[1][1]] === "X" && board[[2][1]] === "X") {
      return result="1";
    }
    if (board[[0][2]] === "X" && board[[1][2]] === "X" && board[[2][2]] === "X") {
      return result="1";
    }
    if (board[[0][0]] === "O" && board[[0][1]] === "O" && board[[0][2]] === "O") {
      return result="2";
    }
    if (board[[1][0]] === "O" && board[[1][1]] === "O" && board[[1][2]] === "O") {
      return result="2";
    }
    if (board[[2][0]] === "O" && board[[2][1]] === "O" && board[[2][2]] === "O") {
      return result="2";
    }
    if (board[[0][0]] === "O" && board[[1][1]] === "O" && board[[2][2]] === "O") {
      return result="2";
    }
    if (board[[0][2]] === "O" && board[[1][1]] === "O" && board[[2][0]] === "O") {
      return result="2";
    }
    if (board[[0][0]] === "O" && board[[1][0]] === "O" && board[[2][0]] === "O") {
      return result="2";
    }
    if (board[[0][1]] === "O" && board[[1][1]] === "O" && board[[2][1]] === "O") {
      return result="2";
    }
    if (board[[0][2]] === "O" && board[[1][2]] === "O" && board[[2][2]] === "O") {
      return result="2";
    }
    if (result!=="1"&& result!=="2" && board.includes[""]) {
      return result = "-1";
    } else {
      return result = "0";
    }
  }

  console.log(tic_tac());