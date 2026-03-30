import { devices } from "../data/data";

const Exercise2 = () => {
  const listDevices = devices.map((device) => {
    if (device.width >= 700) {
      if (device.price >= 1000) {
        return <li key={device.id}>{device.name}💰 高級品</li>;
      } else {
        return <li key={device.id}>{device.name}🛒 お買い得</li>;
      }
    }
  });
  return <ul>{listDevices}</ul>;
};

export default Exercise2;
