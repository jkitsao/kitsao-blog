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
      className=" bg-gray-900 lg:pt-12 sm:pb-32  lg:px-48 z-50 shadow-2xl  fixed"
      style={{
        background:
          "linear-gradient(90deg, rgba(36,2,43,1) 0%, rgba(24,1,16,1) 50%, rgba(46,8,3,1) 100%)",
      }}
    >
      <div className=" ml-10 sm:ml-16">
        <span
          onClick={handleClick}
          className="text-white cursor-pointer bg-red-700 sm:py-1 px-1 active:bg-green-800 sm:font-bold absolute right-0 top-0 "
        >
          cancel
        </span>
        <h3 className="text-lg text-white font-bold mt-12 text-xl">
          Sign up to our news letter
        </h3>

        <div className="justify-center items-center flex mt-3">
          <form className="flex flex-wrap flex-row">
            <input
              className="sm:p-2 text-sm  outline-none  my-2 mx-2 w-3/4"
              id="text"
              type="text"
              aria-label="your name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              className="sm:p-2 text-sm  outline-none mx-1 my-2 mx-2 w-3/4"
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              className="bg-blue-600 hover:bg-blue-900 my-2 w-3/4 mx-2 duration-300 text-white border-none px-5 py-2 sm:py-3 outline-none cursor-pointer"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Letterform;
