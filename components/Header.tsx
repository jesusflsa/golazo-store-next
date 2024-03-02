import Link from "next/link";
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

function Header() {
  return (
    <header>
      <div className="w-full grid place-content-center h-[52px] border-b px-[72px]">
        <p className="flex">Envíos gratis para compras mayores a S/.100.00</p>
      </div>
      <div className="w-full h-[72px] items-center px-[72px] gap-[48px] flex border-b justify-between">
        <h3 className="font-bold">GOLAZO</h3>
        <input type="search" className="search-input w-full h-[41px] border p-[16px] outline-none" />
        <div className="social-buttons flex gap-[8px]">
          <button>
            <FiUser />
          </button>
          <button>
            <FiHeart />
          </button>
          <button>
            <FiShoppingBag />
          </button>
        </div>
      </div>
      <nav className="w-full h-[48px] flex justify-center gap-[24px]">
        <Link className="p-[8px] text-[12px] uppercase font-bold" href="/">Inicio</Link>
        <Link className="p-[8px] text-[12px] uppercase font-bold" href="/">Categorias</Link>
        <Link className="p-[8px] text-[12px] uppercase font-bold" href="/">Hombres</Link>
        <Link className="p-[8px] text-[12px] uppercase font-bold" href="/">Mujeres</Link>
        <Link className="p-[8px] text-[12px] uppercase font-bold" href="/">Accesorios</Link>
        <Link className="p-[8px] text-[12px] uppercase font-bold" href="/">Blog</Link>
        <Link className="p-[8px] text-[12px] uppercase font-bold" href="/">Ofertas</Link>
      </nav>
    </header>
  );
}

export default Header;
