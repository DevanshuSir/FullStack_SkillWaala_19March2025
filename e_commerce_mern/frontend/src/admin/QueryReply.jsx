import Slidebar from "./Slidebar";

const QueryReply = () => {
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Reply Query📧</h1>
        <form
          action=""
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6"
        >
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            To
          </label>
          <input
            type="text"
            name="productName"
            id=""
            placeholder="Mail-to"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            From
          </label>
          <input
            type="text"
            name="productName"
            id=""
            placeholder="Mail-From"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Sub
          </label>
          <input
            type="text"
            name="productName"
            id=""
            placeholder="Sub.."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Body
          </label>
          <textarea
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <div className="text-right">
            <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
              Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryReply;
