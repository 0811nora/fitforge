import { useEffect } from "react";

const CheckOption = ({ data, register }) => {
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <>
      <div className="ml-5 grid grid-cols-4 gap-8 md:ml-0">
        {data.options.map((item) => (
          <div className="flex items-center gap-2" key={`${data.id}-${item}`}>
            <input
              type="checkbox"
              className="accent-swirl-300"
              id={`${data.id}-${item}`}
              {...register(data.id)}
              value={item}
            />
            <label htmlFor={`${data.id}-${item}`} className="block text-lg font-semibold text-fantasy-700">
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckOption;
