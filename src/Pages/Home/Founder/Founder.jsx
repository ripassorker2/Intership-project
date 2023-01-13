import React from "react";

const Founder = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-[90%] mt-10">
      <h3 className="md:text-5xl text-3xl text-center font-semibold leading-none">
        Founder message
      </h3>
      <section className="">
        <div className="container grid md:grid-cols-2 justify-center md:p-4 mx-auto sm:py-10 lg:flex-row lg:justify-between">
          <div className="flex items-center md:justify-center md:p-4 mt-8 lg:mt-0 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5003/5003094.png"
              alt=""
              className="object-contain bg-cover w-full h-80  md:h-96"
            />
          </div>
          <div className="flex flex-col md:justify-center md:p-4 text-cente rounded-sm  lg:text-left">
            <p className="mt-6 mb-8 text-lg md:pr-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              provident obcaecati possimus quidem pariatur quas dolorem quo ex
              delectus non dolorum repudiandae, cum ullam nemo voluptates autem
              odio praesentium. Temporibus repellat excepturi doloremque
              expedita omnis vero asperiores nobis officiis? Quidem veritatis ut
              perferendis dolore iste quibusdam omnis temporibus deleniti
              assumenda, non modi, facilis nostrum! Provident libero
              voluptatibus ab recusandae aperiam dolores, temporibus praesentium
              quis hic. Excepturi,
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
