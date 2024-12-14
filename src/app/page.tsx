import Image from "next/image";

export default async function Index() {
  return (
    <div className="w-full h-screen px-20 flex flex-col justify-start mt-20">
      <div className="w-full flex justify-between items-center">
       
        <div className="max-w-lg">
          <h1 className="text-7xl capitalize font-bold tracking-tight leading-snug">
            Supporting
            <span className="inline-block">
              local <span className="text-primary">farmers</span>
            </span>
          </h1>
          <p className="mt-6 text-sm text-gray-700 leading-6">
            At <span className="font-bold text-primary">Connect किसान</span> , our mission is to bridge the gap between farmers,
            retailers, and customers, fostering a sustainable and thriving
            ecosystem for local businesses. We believe that farmers are the
            backbone of our economy, and empowering them with the tools and
            platforms to reach their customers directly is key to fostering
            growth and self-reliance.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-primary border-2 border-transparent text-white rounded-lg hover:border-primary hover:border-2 duration-300 transition-all hover:bg-transparent hover:text-primary">
              Register Business
            </button>
            <button className="px-6 py-3 border-2 border-primary bg-transparent text-primary rounded-lg hover:bg-primary hover:text-white duration-300 transition-all">
              Shop Now
            </button>
          </div>
        </div>

      
        <div className="ml-10">
          <Image
            alt="home-image"
            height={700}
            width={700}
            src="/homeImage.jpg"
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
