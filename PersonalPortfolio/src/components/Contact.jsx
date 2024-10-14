import { EarthCanvas } from "./canvas";
import { CONTACT } from "../constants";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-pink-200 via-slate-400 to-blue-700 bg-clip-text tracking-tight text-transparent">
        Get In Touch
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full lg:h-full h-96 lg:order-1 order-2 flex justify-center lg:justify-start">
          <div className="w-full h-full lg:w-full lg:h-auto">
            <EarthCanvas />
          </div>
        </div>
        <div className="text-center tracking-tighter lg:w-1/2 lg:order-2 order-1">
          <p className="my-4"> {CONTACT.address}</p>
          <p className="my-4"> {CONTACT.phoneNo}</p>
          <p className="my-4"> {CONTACT.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact
