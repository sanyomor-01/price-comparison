
export default function Health() {

    return(
        <div className=" flyout-content px-5 pt-6  bg-white rounded-sm w-[470px] h-[300px] mt-8 ml-8">
            <div className="wrapper flex flex-col">
                <a className= "mb-3.5 text-base font-medium capitalize hover:text-blue-700" href="">home & Interior</a>
                <div className="flex gap-4">
                    <div className="kitchen flex flex-col w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">kitchen</a></li>
                            <li><a href="">kitchen appliances</a></li>
                            <li><a href=""> Microwave ovens</a></li>
                            <li><a href="">pots & pans</a></li>
                            <li><a href="">utensils & tablewares</a></li>
                        </ul>
                    </div>

                    <div className="heating flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">heating & cooling</a></li>
                            <li><a href="">fans</a></li>
                            <li><a href="">stoves</a></li>
                            <li><a href="">themostats</a></li>
                            <li><a href="">freezers & fridges</a></li>
                            <li><a href="">water heaters</a></li>
                        </ul>
                    </div>

                    <div className="food flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">food & beverage</a></li>
                            <li><a href="">beverages</a></li>
                            <li><a href="">grain & rice</a></li>
                            <li><a href="">snacks</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}