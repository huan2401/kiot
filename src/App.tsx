import React from "react";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = React.useState<any[]>();
  console.log(data);
  React.useEffect(() => {
    fetch("https://www.kiotmpec.xyz/api/v1/app/public/khach-hang/search")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.currentElements[0].diaChi);
        setData([...data.data.currentElements]);
      });
  }, []);
  return (
    <div className="App">
      <span>
        {data?.map((item) => {
          return <div>{item.id}</div>;
        })}
      </span>
    </div>
  );
};

export default App;
