import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryCars from "./CategoryCars";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [tabIndex, setTabIndex] = useState(0);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    fetch("https://toy-cars-market-place-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setAllCars(data);
      });
  }, []);

  const sportsCar = allCars.filter((cars) => cars.category === "Sports Car");
  const truck = allCars.filter((cars) => cars.category === "Truck");
  const cars = allCars.filter((cars) => cars.category === "Regular Car");
  const fireTruck = allCars.filter((cars) => cars.category === "Fire Truck");
  const policeCar = allCars.filter((cars) => cars.category === "Police Car");

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 py-12 lg:py-28 px-5">
      <div className="text-center mb-5" data-aos="fade-right">
        <h2 className="text-2xl md:text-4xl font-bold">Toy Category</h2>
        <p className=" mt-2">
          Choose your favorite toy according to category..
        </p>
      </div>

      {/* this tab will hold entire tab section */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* tablist created tab title */}
        <TabList
          className="lg:flex justify-center w-full  mx-auto space-x-4 mb-7"
          data-aos="fade-up">
          <Tab
            className={`tab tab-bordered ${tabIndex == 0 ? "tab-active" : ""}`}>
            Sports car
          </Tab>
          <Tab
            className={`tab tab-bordered ${tabIndex == 1 ? "tab-active" : ""}`}>
            Regular Truck
          </Tab>
          <Tab
            className={`tab tab-bordered ${tabIndex == 2 ? "tab-active" : ""}`}>
            Regular Car
          </Tab>
          <Tab
            className={`tab tab-bordered ${tabIndex == 3 ? "tab-active" : ""}`}>
            Fire Truck
          </Tab>
          <Tab
            className={`tab tab-bordered ${tabIndex == 4 ? "tab-active" : ""}`}>
            Police Car
          </Tab>
        </TabList>

        {/* tabPanel shows the data inside each panel */}
        <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsCar.map((car) => (
            <CategoryCars key={car._id} car={car}></CategoryCars>
          ))}
        </TabPanel>
        {/* truck panel */}
        <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {truck.map((car) => (
            <CategoryCars key={car._id} car={car}></CategoryCars>
          ))}
        </TabPanel>
        {/* regular car panel */}
        <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CategoryCars key={car._id} car={car}></CategoryCars>
          ))}
        </TabPanel>
        {/* firetruck panel */}
        <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fireTruck.map((car) => (
            <CategoryCars key={car._id} car={car}></CategoryCars>
          ))}
        </TabPanel>
        {/* police car panel */}
        <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policeCar.map((car) => (
            <CategoryCars key={car._id} car={car}></CategoryCars>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
