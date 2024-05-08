export default function task() {

  let Data = "Check It!";
  //변수와 useState의 차이는 무엇인가.

  return (
    <>
      <ChildComponents Data={Data}></ChildComponents>
    </>
  );
}

function ChildComponents(props) {
  return (
    <>
      <Comment author={"sk"} content={"im sk"}></Comment>
      <Comment author={"samsung"} content={"im samsung"}></Comment>
    </>
  )
}

function Comment(props) {
  return (
    <>
      <h1>{props.author}</h1>
      <h1>{props.content}</h1>
    </>
  )
}