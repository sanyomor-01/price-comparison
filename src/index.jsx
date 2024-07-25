export default function  ComputerContent() {
    return (
        <div  className="w-[746px] h-[390px] p-5 rounded bg-gray-300  flex flex-col gap-4 relative mt-2 ml-[139px]">
                <h1 className=" font-generalsans font-medium text-lg capitalize">Computer & Accessories</h1>

            <div className="col-1 flex  justify-between items-start">
                <ul className="keyboard grid gap-3  w-[222px]">
                    <h3 className="capitalize text-[14px] font-medium text-[#333333]">Keyboard & Mice</h3>
                    
                    <li><a className="capitalize text-[14px] text-[#545454]" href="">computer keyboards</a></li>

                    <li><a className="capitalize text-[14px] text-[#545454]" href="">mouse & pointing devices</a></li>
                    
                    <li><a className="capitalize text-[14px] text-[#545454]" href="">keyboard & mouse combos</a></li>
                </ul>
                <ul className="Storage grid gap-3  w-[222px]">
                    <h3 className="capitalize text-[14px] font-medium text-[#333333]">Storage Media</h3>
                    <li><a className="capitalize text-[14px] text-[#545454]" href="">memory cards</a></li>

                    <li><a className="capitalize text-[14px] text-[#545454]" href="">usb flash drives</a></li>

                    <li><a className="capitalize text-[14px] text-[#545454]" href="">external hard drives</a></li>
                </ul>
                <ul className="Cables grid gap-3  w-[222px]">
                    <h3 className="capitalize text-[14px] font-medium text-[#333333]">Cables</h3>
                    <li><a className="capitalize text-[14px] text-[#545454]" href="">HDMI, DVI & displayPort cables</a></li>

                    <li><a className="capitalize text-[14px] text-[#545454]" href="">ethernet cables</a></li>

                    <li><a className="capitalize text-[14px] text-[#545454]" href="">fibre optic cables</a></li>
                </ul>
            </div>
            <div className="col-2 flex justify-between gap-5">
                <ul className="flex items-start  w-full ">
                    <li>
                        <a href="">Laptop</a>
                    </li>
                </ul>    
                <ul className="flex items-start  w-full ">
                    <li>
                        <a href="">Tablets</a>
                    </li>
                </ul> 
                <ul className="flex items-start w-full ">
                    <li>
                        <a href="">Monitors</a>
                    </li>

                </ul>
            </div>
        </div>
    )

}

