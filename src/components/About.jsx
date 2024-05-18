import arrowDown from '../img/arrowDown.png'
import intro from '../aboutImg/intro.jpg'
import Image from '../aboutImg/Image.jpg'
import Image1 from '../aboutImg/Image1.jpg'
import Image2 from '../aboutImg/Image2.jpg'
import Image3 from '../aboutImg/Image3.jpg'
import Image4 from '../aboutImg/Image4.jpg'
import Image5 from '../aboutImg/Image5.jpg'

const About = () => {

  const resort = [
    {name: "Outdoor Pool", img:Image},
    {name: "Indoor Pool", img:Image5},
    {name: "Spa Zone", img:Image1},
    {name: "Sport Arena", img:Image2},
    {name: "Resturant", img:Image3},
    {name: "Skybar", img:Image4}
  ]





  return (
    <div>
      <div class=" bg-homebg bg-[#2A0145] bg-center text-center text-white flex justify-around items-center py-20">
        <div class=" w-[40vw] flex flex-col items-center">
          <p class=" text-[80px]">About</p>
        </div>
      </div>

      <div class=" flex gap-6 absolute top-[24.5rem] left-[21rem] bg-white p-4 shadow-2xl shadow-[#2a0145]/35">
        <div class=" bg-[#F5F6F7] flex text-[.8rem] items-center gap-7 m-0 py-2 px-3">
          <p>Check-In</p>
          <img src={arrowDown} class=" w-[10px] h-[5px]"/>
        </div>

        <div class=" bg-[#F5F6F7] flex text-[.8rem] items-center gap-7 py-2 px-3 " >
          <p>Check-In</p>
          <img src={arrowDown} class=" w-[10px] h-[5px]"/>
        </div>

        <div class=" bg-[#F5F6F7] flex text-[.8rem] items-center gap-7 py-2 px-3">
          <p>Check-In</p>
          <img src={arrowDown} class=" w-[10px] h-[5px]"/>
        </div>

        <div class=" bg-[#F5F6F7] flex text-[.8rem] items-center gap-7 py-2 px-3">
          <p>Check-In</p>
          <img src={arrowDown} class=" w-[10px] h-[5px]"/>
        </div>

        <div class=" bg-[#ECA92A] text-white py-2 px-5 text-[.8rem]">
          <p>Book Now</p>
        </div>
      </div>



      <div class=" flex justify-center items-center py-32">
        <div class=" relative w-[40%]">
          <p class=" text-[9rem] text-[#F5F6F7] mb-[-1.6rem]">Hello</p>
          <p class=" text-[32px] absolute top-32 font-bold text-[#3f1a49] ">Amazing Hotel in front of the Sea</p>
          <p class=" w-[90%] text-[#42526D] font-light text-sm">Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scele risque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperdiet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus.</p>
          <p class="bg-[#ECA92A] inline-block text-white text-sm py-3 px-8 mt-7">Discover</p>
        </div>

        <div class=" w-[30%]">
          <img src={intro}/>
        </div>
      </div>

      <div class=" bg-[#2A0135] flex justify-center items-center flex-col gap-6 py-10">
        <div class=" relative">
          <p class=" text-[9rem] text-[#3f1a49] mb-[-1.6rem]">Resort</p>
          <p class=" text-[32px] absolute top-32 font-bold text-white left-24">What We Offer</p>
        </div>


        <div class=" flex flex-wrap w-[80%] gap-3 justify-center items-center ">{
          resort.map((res)=>{
            return(
              <div class=" w-[25%] text-center flex flex-col justify-center items-center gap-4 text-white mb-5">
                <img src={res.img} class=" object-cover"/>
                <p class="  w-[90%] text-[#eca92a]">{res.name}</p>
                <p class=" w-[80%] text-sm font-extralight">Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices.</p>
                <p class="bg-[#ECA92A] inline-block text-white text-sm py-3 px-8">Discover</p>
              </div>
            )
          })
          }</div>
      </div>


      <div class=" p-20 flex justify-center items-center">
        <div class=" relative w-[50%]">
            <p class=" text-[9rem] text-[#F5F6F7] mb-[-1.6rem]">Resort</p>
            <p class=" text-[32px] absolute top-32 font-bold text-[#3f1a49]">What We Offer</p>
            <p class=" w-[60%]">Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur.</p>
            <p class=" text-sm font-extralight w-[60%]">Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis.</p>
            <p class="bg-[#ECA92A] inline-block text-white text-sm py-3 px-8 mt-7">Discover</p>
         </div>


         <div class=" w-[30%] flex flex-wrap gap-10">
          <div class=" bg-[#FDF6EA] w-[150px] px-3 pb-3">
            <p class=" text-[3rem] font-bold text-[#42526D]">75</p>
            <p class=" text-[.7rem] font-extralight mt-[-1rem] text-[#42526D]">Delux Rooms</p>
          </div>

          <div class=" bg-[#FDF6EA] w-[150px] px-3 pb-3">
            <p class=" text-[3rem] font-bold text-[#42526D]">100</p>
            <p class=" text-[.7rem] font-extralight mt-[-1rem] text-[#42526D]">Years of Experience</p>
          </div>

          <div class=" bg-[#FDF6EA] w-[150px] px-3 pb-3">
            <p class=" text-[3rem] font-bold text-[#42526D]">31</p>
            <p class=" text-[.7rem] font-extralight mt-[-1rem] text-[#42526D]">Awards Won</p>
          </div>

          <div class=" bg-[#FDF6EA] w-[150px] px-3 pb-3">
            <p class=" text-[3rem] font-bold text-[#eca92a]">51k</p>
            <p class=" text-[.7rem] font-extralight mt-[-1rem] text-[#42526D]">Happy Clients</p>
          </div>
         </div>
        </div>


        <div>

        </div>
    </div>
  )
}

export default About
