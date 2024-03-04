import React from "react";
import Button from "./Button";

function Slider() {
  return (
    <section className='w-full bg-[url("https://www.platypusshoes.co.nz/media/wysiwyg/PLP_CHANGES_NOV.jpg?auto=webp&quality=85&format=pjpg&width=800")] bg-cover bg-no-repeat bg-left-bottom h-[60vh] grid items-center'>
      <div className="ml-[72px] w-1/2 p-[16px]">
        <h3 className="mb-[24px] text-[48px]">Nueva Colección</h3>
        <Button>Comprar Ahora</Button>
      </div>
    </section>
  );
}

export default Slider;
