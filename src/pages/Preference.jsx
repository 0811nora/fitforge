import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { FORM_SECTIONS } from "../data/formConfig";
import InputGroup from "../components/form/InputGroup";
import CardOption from "../components/form/CardOption";
import BadgeOption from "../components/form/BadgeOption";
import CheckOption from "../components/form/checkOption";

const Preference = () => {
  const formOptions = FORM_SECTIONS;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="PreferencePage text-fantasy-800">
        {/* banner */}
        <div className="banner relative overflow-hidden bg-swirl/30">
          {/* pink */}
          <div className="absolute -top-60 -left-120 z-0">
            <img src="bg-style/pink.svg" className="w-250 rotate-5 object-cover" alt="" />
          </div>
          {/* gray */}
          <div className="absolute -top-70 -right-80 z-0">
            <img src="bg-style/gray.svg" className="w-250 rotate-5 object-cover" alt="" />
          </div>
          {/* blue */}
          <div className="absolute right-10 -bottom-125 z-0">
            <img src="bg-style/blue.svg" className="w-250 -rotate-5 object-cover" alt="" />
          </div>

          <div className="relative mx-auto flex h-120 max-w-2xl flex-col items-center justify-center">
            <h1 className="mt-18 mb-3 text-3xl font-black text-fantasy-800 md:mb-6 md:text-5xl">
              建立屬於你的訓練計畫
            </h1>
            <p className="text-md mb-6 font-medium text-santa-fe-600 md:text-xl">
              AI 將根據你的資料，生成最適合你的課表
            </p>
            <Button text="開始" style="hover:bg-santa-fe/70 bg-santa-fe px-12" />
          </div>
        </div>

        {/* 表單區塊 */}
        <div id="formArea" className="mx-auto max-w-5xl px-8 py-16 md:py-24">
          <div className="mb-8 text-right">
            <Button text="重新填選" style="hover:bg-swirl-500/70 bg-swirl-500 px-4 md:px-8" />
          </div>

          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-6">
                {formOptions.map((section) => (
                  <div
                    key={section.id}
                    className={`mb-12 overflow-hidden rounded-2xl bg-swirl-50 shadow-md ${
                      section.layout === "flex-col" ? "col-span-1" : "md:col-span-3"
                    }`}>
                    <div className={`px-6 py-3 ${section.bgColor} `}>
                      <h3 className="flex items-center gap-2">
                        <img src={`form-icon/number-${section.number}-circle.svg`} alt="" className="w-6" />
                        <span className="text-xl font-semibold text-fantasy-800">{section.title}</span>
                      </h3>
                    </div>
                    <div className="p-4 md:p-7">
                      {section.type === "input-group" && (
                        <InputGroup register={register} data={section} errors={errors} />
                      )}
                      {(section.type === "card-radio" || section.type === "card-checkbox") && (
                        <CardOption data={section} register={register} />
                      )}
                      {(section.type === "list-radio" || section.type === "badge-radio") && (
                        <BadgeOption data={section} register={register} />
                      )}
                      {section.type === "grid-checkbox" && <CheckOption data={section} register={register} />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-16 w-max">
                <Button
                  text="產生我的專屬訓練計畫"
                  style="hover:bg-swirl-600/70 bg-swirl-600 px-20"
                  icon="form-icon/file-check-solid.svg"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preference;
