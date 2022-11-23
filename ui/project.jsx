import Image from "next/image";
import React from "react";

function Project() {
  return (
    <div className="grid grid-cols-auto-320px gap-2 justify-center">
      {[1, 2, 3, 4, 5, 6].map((x) => {
        return (
          <div
            className="max-w-xs border-2 shadow-base rounded-3xl overflow-hidden"
            key={x}
          >
            <div className="relative h-60">
              <Image
                src="https://cdn.pixabay.com/photo/2022/10/07/12/02/sunset-7504891_960_720.jpg"
                fill
                alt="Project Image"
              />
            </div>
            <div className="p-2">
              <h3>Ttile of Project1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci, officia!
              </p>
              <button className="bg-red-400 rounded-md p-1 shadow-base">
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
