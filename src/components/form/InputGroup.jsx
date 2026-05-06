const InputGroup = ({ register, data, errors }) => {
  return (
    <>
      {data.fields.map(
        (field) =>
          field.type === "radio" && (
            <div className="mb-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center" key={field.id}>
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
                        {...register(field.id, { required: true })}
                        value={item.value}
                      />
                      <label htmlFor={item.value} className="block font-semibold text-fantasy-700">
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {errors[field.id] && (
                <span className="rounded-lg px-2 py-0.5 text-sm font-medium text-red-400">* {field.label} 為必填</span>
              )}
            </div>
          ),
      )}

      <div className="grid gap-5 md:grid-cols-3">
        {data.fields.map(
          (field) =>
            field.type === "number" && (
              <div>
                <div className="mb-1 flex items-center gap-4" key={field.id}>
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
                    {...register(field.id, { required: true })}
                    className="w-full rounded-md border-2 border-swirl-400 px-3 py-1 focus:ring-2 focus:ring-fantasy-400 focus:outline-none"
                  />
                </div>
                {errors[field.id] && (
                  <span className="rounded-lg px-2 py-0.5 text-sm font-medium text-red-400">
                    * {field.label} 為必填
                  </span>
                )}
              </div>
            ),
        )}
      </div>
    </>
  );
};

export default InputGroup;
