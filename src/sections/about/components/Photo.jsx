import myselfImage from "../../../assets/images/Myself.png";

export default function Photo() {
  return (
    <div className="w-full flex justify-center lg:justify-end">
      <img
        src={myselfImage}
        alt="Igor Souza"
        className="w-[260px] md:w-[360px] lg:w-[430px] h-auto object-contain"
      />
    </div>
  );
}