function TestimonialBox({ image, desc, name, position }) {
  return (
    <div className="bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="text-white text-sm font-normal tracking-[0.8px] mb-[30px]">
        {desc}
      </p>
      <div className="flex items-center gap-[15px]">
        <img
          src={`/src/assets/images/${image}`}
          className="w-[50px] h-[50px] rounded-[50%] object-contain"
        />
        <div>
          <strong className="text-white block mb-[5px]">{name}</strong>
          <p className="text-white font-normal text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
