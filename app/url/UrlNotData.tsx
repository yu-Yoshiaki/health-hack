export const InflowNotData = () => {
  return (
    <div className="flex items-center justify-between whitespace-nowrap px-5 py-2">
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        <div className="col-span-2 w-[140px] text-[12px] md:text-[1px] animate-pulse h-8 bg-gray-300"></div>
        <div className="col-span-2 row-start-2 flex w-[140px] items-center gap-2 text-lg font-bold animate-pulse bg-gray-300 h-5"></div>
      </div>
      <div className="row-span-2 flex flex-col justify-center gap-1">
        <div className="text-xs animate-pulse w-20 h-8"></div>
        <div className="text-xs animate-pulse w-20 h-8">
          <span className="text-sm font-semibold"></span>
        </div>
      </div>
      <div className="flex auto-cols-min gap-2">
        <div className="px-3 py-1 flex text-sm gap-2 rounded-md font-semibold bg-gray-200 justify-center items-center animate-pulse w-20"></div>
        <div className="px-3 py-1 flex text-sm gap-2 rounded-md font-semibold bg-gray-200 justify-center items-center animate-pulse w-20 h-8"></div>
      </div>
    </div>
  );
};