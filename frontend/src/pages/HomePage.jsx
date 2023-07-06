import React from "react";

function HomePage() {
  return (
    <div className=" bg-cover h-screen w-screen bg-[url('src/assets/background.jpg')] flex flex-col justify-center items-center ">
      <h2 className="text-white text-3xl">Exposition dédiée à</h2>
      <h1 className="text-white text-6xl font-bold">
        Hippolyte Mortier De Trévise
      </h1>
      <h3 className="h-8 w-40 text-xl text-center pt-1 bg-black text-white border-solid border-2 ">
        Le Concept
      </h3>
      <p className="bg-black w-1/3 text-white p-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
        sagittis libero. Nullam porttitor consectetur enim molestie rhoncus.
        Morbi lacinia dolor non magna aliquet dapibus. Morbi a venenatis ante.
        Ut imperdiet consectetur sem et dapibus. Nulla blandit condimentum
        rutrum. Cras hendrerit, lectus eu dapibus sagittis, augue ligula
        eleifend justo, vitaluctus odio sem sed dui.
      </p>
      <div class="hexagon">
        <span>ENTREZ</span>
      </div>
    </div>
  );
}
export default HomePage;
