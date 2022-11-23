import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="relative flex-1 h-14 max-w-xs">
      <Link href="/">
        <Image
          // 180 width and 56 height
          // src={`${process.env.API_URL}/uploads/vishvz_port_png_143b690f8e.png?updated_at=2022-11-22T03:17:17.642Z`}
          src="/../public/icons/vishvz-port-png.png"
          // src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/6230b271b897e76d2705ed6e_logo-developer-webflow-ecommerce-template.svg"
          fill
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
