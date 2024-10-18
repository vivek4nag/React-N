const Contact = () => {
  return (
    <div className="text-center h-5/6">
      <h1 className="font-bold text-3xl p-4 m-4"> contact Us</h1>
      <p>this contact page is being rendered by child router</p>

      <div className="w-6/12 mx-auto my-4 p-4">
        <form className="flex justify-center align-middle flex-col p-4">
          <input
            type="text"
            className="border border-blue-600 p-2 m-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-blue-600 p-2 m-2"
            placeholder="message"
          />
        </form>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 duration-[.3s] rounded-lg w-40">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
