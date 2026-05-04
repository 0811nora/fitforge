const InputGroup = ({ register, data }) => {
  return (
    <>
      {data.fields.map(
        (field) =>
          field.type === "radio" && (
            <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center" key={field.id}>
              <h4 className="flex items-center gap-2 font-semibold">
                <img src={field.icon} alt="" />
                {field.label}
              </h4>

              <div className="ml-5 flex flex-row gap-8 md:ml-0">
                {field.options.map((item) => (
                  <div className="flex items-center gap-2" key={item.value}>
                    <input
                      type="radio"
                      className="accent-swirl-300"
                      id={item.value}
                      {...register(field.id)}
                      value={item.value}
                    />
                    <label htmlFor={item.value} className="block font-semibold text-fantasy-700">
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ),
      )}

      <div className="grid gap-5 md:grid-cols-3">
        {data.fields.map(
          (field) =>
            field.type === "number" && (
              <div className="flex items-center gap-4" key={field.id}>
                <label htmlFor={field.id} className="block w-24 font-bold">
                  <div className="flex items-center gap-2 text-nowrap">
                    <img src={field.icon} className="w-6" alt="" />
                    {field.label}
                  </div>
                </label>
                <input
                  type="number"
                  min={0}
                  id={field.id}
                  {...register(field.id)}
                  className="w-full rounded-md border-2 border-swirl-400 px-3 py-1 focus:ring-2 focus:ring-fantasy-400 focus:outline-none"
                />
              </div>
            ),
        )}
      </div>
    </>
  );
};

export default InputGroup;
