const Banner = () => {
  return (
    <div className="hero md:min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 py-10 md:py-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/981570/pexels-photo-981570.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-full rounded-lg shadow-lg shadow-slate-700"
        />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold font-serif">
            Discover a Word of Imagination and Adventure With Our Toys
          </h1>
          <p className="py-6 font-serif">
            Bring Joy and Wonder To Your Child's Playtime
          </p>
          <button className="btn bg-emerald-600 text-white font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
