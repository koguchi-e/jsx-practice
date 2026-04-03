import { devices } from "../data/data";

const Exercise2 = () => {
  const wideDevices = devices.filter((device) => device.width >= 700);
  const listItem = wideDevices.map((device) => (
    <li key={device.id}>
      {device.price >= 1000
        ? device.name + "💰 高級品"
        : device.name + "🛒 お買い得"}
    </li>
  ));
  return <ul>{listItem}</ul>;
};

export default Exercise2;
