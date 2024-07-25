import { useState } from "react";

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className=" text-blue-100 px-4 py-3 font-generalsans hover:bg-white hover:text-blue-900 text-[15px] font-medium">
        {children}
      </a>
      {open && FlyoutContent && (
        <div className="absolute -left-60 top-0 mt-2  ">
          <FlyoutContent />
        </div>
      )}
    </div>
  );
};

export default FlyoutLink;
