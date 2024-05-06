import { useState } from "react";
import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop">
              <img src={gptLogo} alt="Logo" className="logo" />
              <span className="brand">ChatGPT</span>
            </div>
            <button className="midBtn">
              <img src={addBtn} alt="new chat" className="addBtn" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src={msgIcon} alt="Query" className="" />
                What is Programming?
              </button>
              <button className="query">
                <img src={msgIcon} alt="Query" className="" />
                How to use an API?
              </button>
            </div>
          </div>
          <div className="lowerSide">
            <div className="listItems">
              <img src={home} alt="Home" className="listItemsImg" />
              Home
            </div>
            <div className="listItems">
              <img src={saved} alt="Saved" className="listItemsImg" />
              Saved
            </div>
            <div className="listItems">
              <img src={rocket} alt="Upgrade" className="listItemsImg" />
              Upgrade to Pro
            </div>
          </div>
        </div>
        <div className="main">
          <div className="chats">
            <div className="chat">
              <img className="chatImg" src={userIcon} alt="" />
              <p className="txt">
                Lorem className
="" ipsum dolor sit amet consectetur adipisicing elit. Est
                veritatis repellendus aliquam quas reprehenderit, excepturi
                voluptatem nulla quo voluptatum nemo.
              </p>
            </div>
            <div className="chat bot">
              <img className="chatImg" src={gptImgLogo} alt="" />
              <p className="txt">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                excepturi voluptatum! Accusantium asperiores aut nisi eos
                dolores magni veniam debitis et unde obcaecati? Placeat laborum
                nostrum eaque voluptates delectus mollitia recusandae non beatae
                porro ab quos, aliquam magnam soluta neque ex cumque vitae
                quaerat enim. Dicta doloremque quos nemo molestias distinctio
                corrupti error impedit, sunt inventore laborum vitae harum iusto
                iure natus voluptatem similique, earum adipisci ipsum
                perspiciatis voluptatum incidunt et omnis! Quae et qui
                perferendis, molestiae maxime aliquid quos earum vel totam?
                Distinctio voluptatem ea fugit voluptates, tenetur ipsam harum
                officia, tempora dolor tempore blanditiis velit perspiciatis
                incidunt amet?
              </p>
            </div>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder="Send a message" />
              <button className="send">
                <img src={sendBtn} alt="send" />
              </button>
            </div>
            <p>
              ChatGPT can make mistakes. Consider checking important
              information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
