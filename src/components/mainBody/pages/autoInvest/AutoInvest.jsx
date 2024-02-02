import Accordion from "./Accordion";
import Conservative from "./Conservative";
import PieChatBar from "./PieChartBar";
import ToggleButton from "./ToggleButton";
import ChartBar from "./chartBar";

const AutoInvest = () => {
  const accordionData = [
    {
      title: "Why should I trust this tool?",
      content: "Content for question 1",
    },
    {
      title: "What risks are related to investments?",
      content: "Content for question 2",
    },
    {
      title: "What is the Auto-Investment?",
      content: "Content for question 3",
    },
  ];

  return (
    <section className="px-[39.69px] ">
      <div className="py-[34.73px] flex justify-between">
        <div>
          <h1 className="text-[18.6px] font-bold text-[#0D0F52]">Auto Investment</h1>
        </div>

        <ToggleButton />
      </div>
      <div className="flex flex-col gap-10 ">
        <Conservative />
        <div className="flex gap-4 border p-[30.38px] rounded-lg">
          <ChartBar />
          <PieChatBar />
        </div>
        <Accordion data={accordionData} />
      </div>
    </section>
  );
};

export default AutoInvest;
