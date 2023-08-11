import { FaBusinessTime, FaPhone, FaSearchLocation } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const OpenTime = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 py-7">
      <div data-aos="fade-right">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
          Available
        </h2>
        <p className="text-center mb-4">Ways to get in touch with us.</p>
      </div>
      <div
        className="stats stats-vertical bg-inherit lg:stats-horizontal shadow-lg lg:h-32 w-full px-5"
        data-aos="fade-up">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBusinessTime className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title text-lg font-semibold">
            We are open monday-friday
          </div>
          <div className="text-2xl font-bold md:stat-value">
            7:00 am - 9:00 pm
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaPhone className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title text-lg font-semibold">
            Have a question?
          </div>
          <div className="text-2xl font-bold md:stat-value">01631058947</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaSearchLocation className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title text-lg font-semibold">
            Need a repair? our address
          </div>
          <div className="text-2xl font-bold md:stat-value">Dhanmondi 32</div>
        </div>
      </div>
    </div>
  );
};

export default OpenTime;
