
const Shaerd = ({ item }) => {
    console.log(item);
    const { image, recipe, price, name } = item
    return (
        <div className="flex gap-5 maxw-[1170px] mx-auto">
            <img src={image} style={{borderRadius:'0 220px 220px 220px'}} className="w-24" alt="" />
            <div>
                <h3 className="font-cinzel text-xl text-[#151515]">{name}--------- </h3>
                <p className="font-inter text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-inter text-xl">${price}</p>
        </div>
    );
};

export default Shaerd;