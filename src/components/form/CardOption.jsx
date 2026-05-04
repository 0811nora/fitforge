const CardOption = ({ data, register }) => {
  return (
    <>
      <div className={`grid grid-cols-2 gap-4 md:gap-8 ${data.number === 6 ? "md:grid-cols-5" : "md:grid-cols-4"} `}>
        {data.options.map((item) => (
          <div className="flex justify-center" key={item.value}>
            <input
              className="peer hidden"
              type="radio"
              {...register(data.id)}
              name={data.id}
              id={item.value}
              value={item.label}
            />
            <label
              className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-swirl-400 py-6 font-bold transition-all peer-checked:border-swirl-500 peer-checked:bg-swirl-300/60"
              htmlFor={item.value}>
              <img className="h-10 w-10" src={item.icon} alt="" />
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardOption;
