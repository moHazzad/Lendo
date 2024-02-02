import { Chart } from 'react-google-charts';

const data = [
  ["", "Spent", "Expected"],
  ["Jan", 10000, 0],
  ["Feb", 25000, 0],
  ["Mar", 15000, 0],
  ["Apr", 10030, 0],
  ["May", 28030, 0],
  ["Jun", 18030, 0],
  ["Jul", 0, 30000],
];

const options = {
  colors: ["#2D91FE", "#4BDFFF"],
  bars: "vertical",
  chartArea: {
    left: '0%', 
    right: '0%',
    top: '0%',
    bottom: '0%',
    width: '50%', 
    height: '50%', 
  },
  legend: { 
    position: 'none',
    textStyle: {
      fontSize: 5
    }
  },
  hAxis: {
    textStyle: {
      fontSize: 5
    }
  },
  vAxis: {
    textStyle: {
      fontSize: 5
    },
    format: 'short' // This will format the axis values in a more compact form
  },
  bar: { groupWidth: '90%' }, // Adjust the group width of the bars
  annotations: {
    alwaysOutside: true // This will ensure annotations are always outside the bars
  }
};

const ChartBar = () => {
  return (
    <div className="w-[287px] h-[228.21px] px-2 py-2 border  rounded-lg overflow-hidden ">
      <p className="text-[#0D0F52] text-[14px] font-bold pb-4">Invested</p>
      <Chart chartType="Bar"  data={data} options={options} />
    </div>
  );
};

export default ChartBar;
