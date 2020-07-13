import React, { useState, useEffect } from "react";
import Letterform from "components/newsletter/Newsletter";
function Lettertoggler() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [btnmsg, setBtnMsg] = useState("Recieve updates via Email");
  const [letterIsOpen, setLetterIsOpen] = useState(false);
  const [btnActive, setBtnActive] = useState(true);
  const [nop, setNop] = useState(false);
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
    <div>
      <div className="py-3 sm:py-4 flex justify-center">
        {!letterIsOpen ? (
          <button
            className={`px-4 py-2 ${
              !isSubscribed
                ? "bg-indigo-600"
                : "bg-green-600 cursor-not-allowed"
            } border-none text-white cursor-pointer`}
            onClick={handleClick}
            disabled={isSubscribed ? true : false}
          >
            {!isSubscribed
              ? btnmsg
              : "Thank you for subscribing to our mailing list"}
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
    </div>
  );
}

export default Lettertoggler;
