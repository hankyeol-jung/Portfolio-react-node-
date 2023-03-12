import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

function Login() {
  let [focusId, setFocusId] = useState("false");
  let [focusPw, setFocusPw] = useState("false");

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className=" w-96 h-96 border border-neutral-300 mx-auto rounded-lg px-7 flex flex-col items-center justify-between p-5">
        <div className="text-center text-2xl font-bold mt-5">로그인</div>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10">
            <div
              className={
                "rounded-tl-lg rounded-tr-lg border-b p-2 border border-neutral-300 " +
                `${
                  focusId == true
                    ? "border-red-500"
                    : focusPw == true
                    ? " border-b-0 border-b-neutral-300"
                    : "border-b-neutral-300"
                }`
              }
            >
              <input
                type="text"
                className="focus:outline-none focus:bg-transparent w-full"
                placeholder="아이디"
                onFocus={() => {
                  setFocusId(true);
                }}
                onBlur={() => {
                  setFocusId(false);
                }}
              />
            </div>
            <div
              className={
                "rounded-bl-lg rounded-br-lg border-b p-2 border border-neutral-300 " +
                `${
                  focusPw == true
                    ? "border-red-500"
                    : "border-b-neutral-300 border-t-0"
                }`
              }
            >
              <input
                type="password"
                className="focus:outline-none focus:bg-transparent w-full"
                placeholder="비밀번호"
                onFocus={() => {
                  setFocusPw(true);
                }}
                onBlur={() => {
                  setFocusPw(false);
                }}
              />
            </div>
            <div className="mt-3 flex items-center">
              <input id="userSave" type="checkbox" />
              <label
                for="userSave"
                className=" ml-1 cursor-pointer text-sm font-normal text-neutral-500"
              >
                로그인 상태 유지
              </label>
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className=" w-full p-3 bg-red-600 rounded-lg text-white text-lg font-bold"
            >
              로그인
            </button>
            <div className="font-normal text-neutral-400 text-sm flex justify-center items-center mt-3">
              <a
                href="#"
                className=" first:before:hidden mx-3 before:w-px before:h-3 before:bg-neutral-300 before:top-1/2 before:-left-3 before:absolute relative before:-translate-y-1/2"
              >
                비밀번호 찾기
              </a>
              <a
                href="#"
                className=" first:before:hidden mx-3 before:w-px before:h-3 before:bg-neutral-300 before:top-1/2 before:-left-3 before:absolute relative before:-translate-y-1/2"
              >
                회원가입
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
