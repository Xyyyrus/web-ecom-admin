function WidgetHelp() {
    return (
      <div className="bg-gray-100 flex items-center gap-4 p-4 rounded shadow mt-6">
        <div className="bg-black text-white rounded-full p-2">
          <p className="font-bold text-lg">?</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Need Guidance?</p>
          <button className="text-blue-500 mt-1">Play Videos</button>
        </div>
      </div>
    );
  }
  
  export default WidgetHelp;
  