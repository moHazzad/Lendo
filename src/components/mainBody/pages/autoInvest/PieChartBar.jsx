import { Chart } from "react-google-charts";

const data = [
  ["Category", "Percentage"],
  ["A", 45.7],
  ["B", 51.5],
  ["C", 23.2],
  ["D", 51.5], 
];

const options = {

  pieHole: 0.4,
  colors: ['#2D91FE', '#FF6769', '#4BDFFF', '#FFC359'], 
 
  legend: {
    alignment: 'center',
    position: 'right',
  },
  pieSliceText: 'none',
  tooltip: {
    text: 'percentage', 
  },
};

const PieChatBar = () => {
  return (
    <div className="w-[287px] h-[228.21px] px-2 py-2 border  rounded-lg overflow-hidden bg-slate-50">
      <p className="text-[#0D0F52] text-[14px] font-bold">Excepted Risk Score <br/> Distribution</p>
      <Chart
    
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
    </div>
  );
};

export default PieChatBar;
