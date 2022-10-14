const express = require("express");
const { createServer } = require("http");

const app = express();
const http = createServer(app);  //생성한 http 서버 객체를 원래 있던 코드 "3000"을 지우고 대신 넣어주면 express와 socket.io를 동시에 사용할 수 있다!
const io = require('socket.io')(http, {  //socket.io 가져오기 / http 로 사용하겠다!
  cors: {
    origin: "*",  // 특정 사용자에게만 서버에 접근 가능하게 하겠다 (데이터를 전달해주겠다) 리소스를 제한할수 있다. *는 모든사용자 가능
    methods: ["GET", "POST"],  //GET,POST 두 메소드만 열어주겠다
  },
});

http.listen(3000, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});





// const express = require("express");
// const { createServer } = require("http");

// const app = express();
// const http = createServer(app);


// const io = require("socket.io")(3000, {  //socket.io 가져오기 / 3000번 포트로 사용하겠다!
//     cors: {
//       origin: "*",  // 특정 사용자에게만 서버에 접근 가능하게 하겠다 (데이터를 전달해주겠다) 리소스를 제한할수 있다. *는 모든사용자 가능
//       methods: ["GET", "POST"],  //GET,POST 두 메소드만 열어주겠다
//     },
//   });
  
// io.on("connection", (socket) => {   //소켓에 연결이 되면 어떤식으로 연결을 할건지 적어준다.
//     console.log("새로운 소켓이 연결됐어요!");
//     socket.emit("customEventName", "this is custom event data"); //socket.emit("이벤트이름", "데이터") 이렇게 함수를 호출하면 특정 이벤트에 특정 데이터를 보낼 수 있게 된다.
  
//     socket.on("message", (data) => {  //message라는 소켓에 데이터가 들어왔을때 어떻게 할것인지/  전달된 데이터를 데이터 변수에 할당.
//       console.log(data);  //Hello
//     });

// }); 


  // 특정 사용자가 소켓에 접근했을때 "새로운 소켓이 연결됐어요!"가 뜨고 사용자가 서버에 메세지를 보내면 메세지를 출력해준다.
