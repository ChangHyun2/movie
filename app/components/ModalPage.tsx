import Image from "next/image";
import { useEffect } from "react";

export default function ModalPage({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handler = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
    window.addEventListener("scroll", handler);

    return () => {
      onClose();
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col">
      <div className="flex items-center justify-between mx-4 my-3 mb-6 ">
        <div onClick={onClose}>
          <Image
            src="/tevi/icon-shevron-left-32-line.svg"
            width={32}
            height={32}
            alt="sl"
          />
        </div>
        <div className="text-neutral semi22">키워드 카테고리</div>
        <div></div>
      </div>{" "}
      {children}
    </div>
  );
}
