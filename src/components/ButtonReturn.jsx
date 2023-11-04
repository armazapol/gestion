import ArrowIcon from "/img/arrow.svg";

const ButtonReturn = ({text,...inputProps}) => {
  return (
    <div className="flex gap-3 border border-black px-4 py-2 rounded-md cursor-pointer hover:shadow-md capitalize"{...inputProps} >
      <img src="/img/arrow.svg" alt="" />
      <p>{text} </p>
    </div>
  );
};

export default ButtonReturn;
