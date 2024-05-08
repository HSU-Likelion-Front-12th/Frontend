import { Link, Route, Routes } from "react-router-dom";
import Storage from "./components/Storage";
import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import TodoTemplete from "./components/TodoTemplete.jsx";
import { TodoProvider } from "./TodoContext.jsx";

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  
  button{
        color: #4D869C;
        background-color: #ffffff;   
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: .5rem;
        padding: 2rem 3rem;
        font-size: 2rem;
        &:hover{
          background-color:#F0F0F1;
        }
    }

    button:active{
        background-color: #d4d4d4bc;
    }
`;

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .8);

  margin: 0 auto;

  margin-top: 60px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyles />
      <main>

        <Buttons>

          <Link to="todoTempelte">
            <button>Todos</button>
          </Link>
          <Link to="storage">
            <button>Storage</button>
          </Link>

        </Buttons>

        <TodoTemplateBlock>
          <Routes>
            <Route path="/todoTempelte" element={<TodoTemplete />} />
            <Route path="/storage" element={<Storage />} />
          </Routes>
        </TodoTemplateBlock>

      </main>
    </TodoProvider>
  );
}

export default App;
