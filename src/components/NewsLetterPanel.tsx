import { useState } from "react";

function NewsLetterPanel() {
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [submited, setSubmitted] = useState<boolean>(false);

  const handleEmailAddress = (e: string) => {
    setEmail(e);
    const validation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (e.match(validation)) {
      setMessage("");
    } else {
      setMessage("Invalid Email Address");
    }
  };
  const handleSubmitButton = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
  };
  const handleDismissMessage = () => {
    setEmail(undefined);
    setSubmitted(false);
  };

  return submited ? (
    <div className="bg-white h-[500px] w-[500px] rounded-[30px] font-semibold flex flex-col justify-center  text-slate-900 p-12 ">
      <img
        className="w-[60px] h-[60px]"
        src="/public/images/icon-list.svg"
        alt=""
      />
      <h1 className="font-bold text-[50px]">Thanks for subscribing</h1>
      <p className=" pb-10 pt-5">
        A email confirmation has been sent to <strong>{email}</strong>.Please
        open it and click the button inside to confirm your subscription
      </p>
      <button
        onClick={handleDismissMessage}
        className="bg-slate-900  text-white w-[400px] p-4 rounded-lg font-semibold transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 hover:transition-all hover:bg-gradient-to-r from-rose-500 to-orange-400 hover:shadow-2xl hover:shadow-orange-300/50"
      >
        Dismiss message
      </button>
    </div>
  ) : (
    <div className="bg-white h-[600px] w-[900px] rounded-[30px] font-semibold flex flex-row justify-center flex-grow text-slate-900 text-left p-5">
      <div className="flex flex-col justify-center p-16 ">
        <h1 className="font-bold text-[50px] pb-5">Stay updated!</h1>
        <p>Join 60,00+ product manageer receiving montly updates on:</p>
        <ul className="list-image-[url(/public/images/icon-list.svg)] list-inside mt-10 mb-10">
          <li>Product dicovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more</li>
        </ul>
        <form onSubmit={handleSubmitButton}>
          <div className="flex flex-row justify-between">
            <label
              htmlFor="email-input"
              className="font-bold text-sm mb-2 text-red"
            >
              Email address
            </label>

            <p className="text-sm text sm text-red-500">{message}</p>
          </div>

          <input
            type="email"
            placeholder="email@company.com"
            onChange={(e) => handleEmailAddress(e.target.value)}
            value={email}
            name=""
            id="email-input"
            className={
              message === "Invalid Email Address"
                ? "p-4 w-full mb-5 border-[2px] rounded-[12px] bg-red-200 text-red-500 border-red-600"
                : "p-4 w-full mb-5 border-[2px] rounded-[12px] border-gray-300"
            }
          />
          <button
            className="bg-slate-900 text-white w-full p-4 rounded-lg font-semibold transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 hover:transition-all hover:bg-gradient-to-r from-rose-500 to-orange-400 hover:shadow-2xl hover:shadow-orange-300/50"
            type="submit"
            disabled={email === undefined}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <img src="/public/images/desktop-image.svg" alt="image" />
    </div>
  );
}

export default NewsLetterPanel;
