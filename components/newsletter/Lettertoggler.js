import React, { useState, useEffect } from "react";
import Letterform from "components/newsletter/Newsletter";
function Lettertoggler() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [btnmsg, setBtnMsg] = useState("Recieve updates via Email");
  const [letterIsOpen, setLetterIsOpen] = useState(false);
  const [btnActive, setBtnActive] = useState(true);
  // const [nop, setNop] = useState(false);
  //   console.log(letterIsOpen);
  const handleClick = (e) => {
    e.preventDefault();
    setLetterIsOpen(!letterIsOpen);
  };
  // useEffect(() => {
  //   const data = localStorage.getItem("userData");
  //   if (data) {
  //     setNop(true);
  //   }
  //   // console.log(data);
  //   // const setdata = JSON.parse(data);
  //   // console.log(setdata);
  // }, []);

  return (
    <div className="inline-block">
      {!letterIsOpen ? (
        <button
          className={`px-4 py-2 ${
            !isSubscribed
              ? "text-indigo-700 font-bold bg-white rounded outline-none"
              : "text-green-600 font-bold"
          } border-none text-white cursor-pointer`}
          onClick={handleClick}
          disabled={isSubscribed ? true : false}
        >
          {!isSubscribed ? (
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                New
              </span>
              <span className="font-normal text-sm mr-2 text-left flex-auto">
                Get email updates
              </span>
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </div>
          ) : (
            "Subscribed "
          )}
        </button>
      ) : (
        <Letterform
          handleClick={handleClick}
          setIsSubscribed={setIsSubscribed}
          setLetterIsOpen={setLetterIsOpen}
          letterIsOpen={letterIsOpen}
          setBtnActive={setBtnActive}
        />
      )}
    </div>
  );
}

export default Lettertoggler;
