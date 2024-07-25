
export default function Health() {

    return(
        <div className="px-5 pt-6  bg-white rounded-sm max-w-[746px] h-[318px] mt-8 ml-8">
            <div className="wrapper flex flex-col">
                <a className= "mb-3.5" href="">Health & Beauty</a>
                <div className="flex gap-4">
                    <div className="phones flex flex-col w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">Skin care</a></li>
                            <li><a href="">skin conditions</a></li>
                            <li><a href=""> Moisturizer</a></li>
                            <li><a href="">face oil</a></li>
                        </ul>
                        <a className="font-medium" href="#">Perfume</a>
                    </div>

                    <div className="phone-accessoriez flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">Conditioners</a></li>
                            <li><a href="">Hair trimmers & clippers</a></li>
                            <li><a href="">hair dryers</a></li>
                            <li><a href="">shampoos</a></li>
                        </ul>
                    </div>

                    <div className="wearables flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">body care</a></li>
                            <li><a href="">bath & shower</a></li>
                            <li><a href="">body creams & lotions</a></li>
                            <li><a href="">deodorants</a></li>
                            <li><a href="">hand wash</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}