import React, { useEffect } from "react";
const Letterform = ({
  handleClick,
  setIsSubscribed,
  letterIsOpen,
  setLetterIsOpen,
  setBtnActive,
}) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const userdata = { name, email };
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (!data) {
      localStorage.setItem("userData", JSON.stringify(userdata));
    }
    const setdata = JSON.parse(data);
    setEmail(setdata.email);
    setName(setdata.name);
  }, []);

  const handleSubmit = (e) => {
    if (email && name) {
      setBtnActive(false);
      e.preventDefault();
      setEmail("");
      setLetterIsOpen(false);
      //change subscribe button message
      setIsSubscribed(true);
    }
    return;
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // alert(e.target.value);
    // console.log(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    // alert(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div
      className="bg-gray-900 lg:pt-12 pt-2 sm:pb-32  lg:px-32 lg:pl-48 z-50 shadow-2xl fixed"
      style={{
        background:
          "linear-gradient(90deg, rgba(36,2,43,1) 0%, rgba(24,1,16,1) 50%, rgba(46,8,3,1) 100%)",
      }}
    >
      <div className=" px-2 sm:ml-16">
        <span
          onClick={handleClick}
          // className="b cursor-pointer  sm:py-1 px-1 absolute right-0 top-0 "
        >
          <span className="absolute right-0 top-0 -mr-2 -mt-2 border cursor-pointer shadow-lg  z-10 p-1 rounded-full p-2">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </span>
        <h3 className="text-sm text-white font-bold mt-12 font-normal text-xl">
          subscribe to my Newsletter
        </h3>

        <div className="justify-center items-center flex mt-3">
          <form className="flex flex-wrap flex-row">
            <input
              className="sm:p-2 text-sm  outline-none  my-2 mx-2 w-full sm:w-3/4"
              id="text"
              type="text"
              aria-label="your name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              className="sm:p-2 text-sm  outline-none mx-1 my-2 mx-2 w-full sm:w-3/4"
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              className="bg-blue-600 hover:bg-blue-900 my-2 py-1 text-sm w-full sm:w-3/4 mx-2 duration-300 text-white border-none px-5  sm:py-3 outline-none cursor-pointer"
              type="submit"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Letterform;
