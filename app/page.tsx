import SeachForm from "@/components/SeachForm";
import { trending_data } from "@/data/trending";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#013894] p-6">
      <section className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">Search low pricec on hotels,homes and much more...</h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
            <SeachForm/>
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
          <div className="pt-5">
              <h3 className="text-xl font-bold">Trending Destination</h3>
              <p className="font-light">
                Most popular choice for travellers from around the world
              </p>
          </div>

          <div className="flex space-x-4 py-5 overflow-x-scroll">
            {
              trending_data.map((item)=>(
                <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
                  <img key={item.id}
                  className="w-80 h-72 object-cover rounded-lg pb-2"
                   src={item.src} alt="" />
                   <p className="font-bold">{item.title}</p>
                   <p>{item.location}</p>
                   <p className="font-light text-sm">{item.description}</p>
                </div>
              ))
            }
          </div>
      </section>
    </div>
  );
}
