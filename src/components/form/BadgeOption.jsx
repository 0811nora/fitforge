const BadgeOption = ({ data, register }) => {
  return (
    <>
      {data.type === "list-radio" &&
        data.options.map((item) => (
          <div className="my-3 flex items-center gap-4" key={item.value}>
            <input
              type="radio"
              className="accent-swirl-300"
              {...register(data.id)}
              name={data.id}
              id={item.value}
              value={item.label}
            />
            <label htmlFor={item.value} className="block font-medium text-fantasy-700">
              <div className="flex items-center gap-3">
                <span>
                  <img src={item.icon} className="mb-2 w-7" alt="" />
                </span>
                <span className="text-md font-semibold">{item.label}</span>
                <span className="text-sm">{item.desc}</span>
              </div>
            </label>
          </div>
        ))}

      {data.type === "badge-radio" && (
        <div className="grid grid-cols-2 gap-3">
          {data.options.map((item) => (
            <div className="flex items-center" key={item.value}>
              <input
                className="peer hidden"
                type="radio"
                {...register(data.id)}
                name={data.id}
                id={item.value}
                value={item.label}
              />
              <label
                className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-swirl-400 py-2 font-bold transition-all peer-checked:border-swirl-500 peer-checked:bg-swirl-300/60"
                htmlFor={item.value}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BadgeOption;
