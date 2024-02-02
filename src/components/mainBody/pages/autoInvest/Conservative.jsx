

const Conservative = () => {
  return (
    <div className="flex gap-5 border p-[30.38px] rounded-lg ">
        <div className="w-[130.87px] h-[104.18px] bg-gradient-to-r  from-[#217AF8] to-[#2CA2FD] rounded-md  flex flex-col gap-3 justify-center items-center shadow-md">
          <p className="text-white text-[10.54px] font-bold">Conservative</p>
          <div>
            <p className="text-white text-[18.6px] font-bold">10-14%</p>
            <p className="text-[8.68px] text-white font-thin">Interest Rate</p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex gap-8 py-4">
            <div className="">
              <p className="text-[#80CB17] text-[10.54px] font-extrabold">Active</p>
              <p className="text-[8.68px] text-gray-400">Status</p>
            </div>
            <div>
              <p className="text-[#0D0F52] text-[10.54px] font-extrabold">1500 SAR</p>
              <p className="text-[8.68px] text-gray-400">Max. Investement</p>
            </div>
            <div>
              <p className="text-[#0D0F52] text-[10.54px] font-extrabold">26</p>
              <p className="text-[8.68px] text-gray-400">Loans Funded</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[8.68px] text-gray-400">* Strategy started at 20th March 2021</p>
            <div className="flex gap-2">
              <button className="flex justify-center items-center px-[19.82px] py-[8.68px] rounded-full border hover:bg-[#FF6769] hover:text-white tracking-wider  text-[8.68px]   w-[69.68px] h-[30.36px]">
                Stop
              </button>
              <button className="flex justify-center items-center px-[19.82px] py-[8.68px] rounded-full border hover:bg-[#FF6769] hover:text-white tracking-wider  text-[8.68px]  w-[96.68px] h-[30.36px] whitespace-nowrap">
                Change setting
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Conservative