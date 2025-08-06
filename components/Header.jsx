import { images } from "@/constants/images";



export default function Header() {
  return (
    <div className="flex py-8 px-4 sm:justify-start justify-center sm:mb-6 mb-12 ">
      <img src="/logo.svg" alt="Logo" className="h-10 sm:h-12" />
    </div>
  );
}
