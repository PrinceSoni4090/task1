import { Button } from "@/components/ui/button"

export default function JobMatches() {
  return (
    <div 
      className="relative bg-[#EEF4FF] overflow-hidden rounded-3xl"
      style={{
        width: '100%',
        height: '458px',
      }}
    >
      <div className="relative z-10 p-8" style={{ width: '416px', height: '68px', marginTop: '50px', marginLeft: '40px' }}>
        <h2 className="text-[#1D2939] font-inter text-[28px] font-bold leading-[33.89px] mb-2">
          Parik, we found over <span className="text-[#2970FF]">37 jobs</span><br />
          that match your skills
        </h2>
        <p className="text-[#838383] text-lg mb-6">
          {"Let's take a look at them, you might as well find your dream job ✨"}
        </p>
        <Button className="bg-[#101828] text-white hover:bg-[#101828]/90 rounded-full px-6 py-3 text-base font-semibold">
          {"Let's go!"}
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#DCFF7A] to-transparent rounded-tr-full transform rotate-[183.08deg]" />
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-[#7AFF8F] to-transparent rounded-bl-full transform rotate-[48.38deg]" />
    </div>
  )
}