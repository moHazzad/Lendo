import logo from "../../../public/Logo.png";
import frame from "../../../public/Frame 296.png";
import arr1 from "../../../public/arr1.png";
import warning from "../../../public/warning.png";
import frameSVG from "../../../public/Frame.svg";

const SideBar = () => {
  return (
    <section className=" w-[223px] h-[558px] border-r-[1px] ">
      <div className="px-[30px] ">
        <div className=" px-[3px] py-[27.29px]  border-b-[1px]   ">
          <img className="w-[84.34px] h-[27.29px]  " src={logo} alt="lendo_logo" />
        </div>

        <div className=" px-[3px] py-[39.69px] flex flex-col gap-4 border-b-[1px]">
          <div className="w-[143.62px]   mx-auto flex flex-row gap-1  ">
            <div>
              <img className="w-[34.73px] h-full" src={frame} alt="frame_logo" />
            </div>
            <div>
              <h3 className="text-[#0D0F52] font-bold ">62,540 SAR</h3>
              <p className="font-thin text-[9px] text-gray-400 ">Account Balance</p>
            </div>
            <div className="flex justify-end items-end">
              <img className="w-[9.92px]" src={arr1} alt="arrow.png" />
            </div>
          </div>

          <div className="flex gap-1">
            <button className="flex justify-center items-center px-[19.82px] py-[8.68px] rounded-full border hover:bg-[#2D91FE] hover:text-white tracking-wider  text-[8.68px]   w-[69.68px] h-[30.36px]">
              Deposit
            </button>
            <button className="flex justify-center items-center px-[19.82px] py-[8.68px] rounded-full border hover:bg-[#2D91FE] hover:text-white tracking-wider  text-[8.68px]  w-[69.68px] h-[30.36px]">
              Withdraw
            </button>
          </div>
          <div className="flex gap-1">
            <div>
              <img className="w-[30.4px] " src={warning} alt="" />
            </div>
            <p className="text-gray-400 text-[8.68px]">
              To withdraw more than <strong>10,000 SAR</strong> you need to <strong>verify</strong> your banking account.
            </p>
          </div>
        </div>

        <div className=" py-[39.69px] flex flex-col gap-3 justify-center items-center">
          <div>
            <img className="w-[108.10px]" src={frameSVG} alt="" />
          </div>
          <h3 className="text-[#0D0F52] text-[10.54px] font-bold ">Why Should You Trust It?</h3>
          <p className="text-gray-400 text-[8.68px] text-center">
            Because of this and that.
            <br /> Anyway investing is very good
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
