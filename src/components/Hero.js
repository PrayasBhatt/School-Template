import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <Image
        src="/building.jpg" 
        alt="School building exterior"
        fill 
        priority 
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-start text-white">
        <div className="max-w-xl text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            BUILDING STUDENTS WITH <br />
            PARTNERSHIP WITH PARENTS
          </h1>

          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed">
            Nurturing innovation, critical thinking, and leadership at the High School level at RIA (+2 Wing).
            Our collaborative approach ensures every student thrives.
          </p>

          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out text-lg tracking-wide uppercase">
            BOOK A VISIT
          </button>
        </div>
      </div>
    </div>
  );
}