import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:test@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.name} (${formData.email})`;
  };

  return (
    <div className="h-screen px-10 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#fceed9] text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center text-[#fceed9]">
          Have a space needing design? {""}
          <span className="decoration-[#fce9a9]/50 underline">Lets Chat.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#fce9a9] h-7 w-7 animate-pulse" />
            <p className="text-2xl text-[#fceed9]">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#fce9a9] h-7 w-7 animate-pulse" />
            <p className="text-2xl text-[#fceed9]">{pageInfo.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#fce9a9] h-7 w-7 animate-pulse" />
            <p className="text-2xl text-[#fceed9]">{pageInfo.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput mb-4 mx-10 border border-[#fceed9] placeholder:text-gray-800"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput mb-4 mx-10 border border-[#fceed9] placeholder:text-gray-800"
            type="text"
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput mb-4 mx-10 border border-[#fceed9] placeholder:text-gray-800"
            type="text"
          />
          <input
            {...register("message")}
            placeholder="Message"
            className="contactInput mb-4 mx-10 border border-[#fceed9] placeholder:text-gray-800"
            type="text"
          />
          <button
            type="submit"
            className="bg-[#fce9a9] flex place-content-center py-5 mx-10 mb-5 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
