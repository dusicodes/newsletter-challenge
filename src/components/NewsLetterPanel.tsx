function NewsLetterPanel() {
  return (
    <div className="bg-white h-[600px] w-[900px] rounded-[30px] font-semibold flex flex-row justify-center flex-grow text-slate-900 text-left p-5">
      <div className="flex flex-col justify-center p-16 ">
        <h1 className="font-bold text-[50px] pb-5">Stay updated!</h1>
        <p>Join 60,00+ product manageer receiving montly updates on:</p>
        <ul className="list-image-[url(./public/images/icon-list.svg)] list-inside mt-10 mb-10">
          <li>Product dicovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more</li>
        </ul>
        <form action="/" method="post">
          <p className="font-bold text-sm mb-2">Email address</p>
          <input
            type="email"
            placeholder="email@company.com"
            name=""
            id=""
            className="p-4 w-full mb-5 border-[2px] rounded-[12px] border-gray-300"
          />
          <button
            className="bg-slate-900 text-white w-full p-4 rounded-lg font-semibold transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 hover:transition-all hover:bg-gradient-to-r from-rose-500 to-orange-400 hover:shadow-2xl hover:shadow-orange-300/50"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <img src="./public/images/desktop-image.svg" alt="image" />
    </div>
  );
}

export default NewsLetterPanel;
