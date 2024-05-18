import arrowLeft from '../img/arrowLeft.png'
import arrowRight from '../img/arrowRight.png'
import arrowDown from '../img/arrowDown.png'
import gallery_1 from '../img/gallery_1.jpg'
import gallery_2 from '../img/gallery_2.jpg'
import gallery_3 from '../img/gallery_3.jpg'
import gallery_4 from '../img/gallery_4.jpg'
import rooms_1 from '../img/rooms_1.jpg'
import rooms_2 from '../img/rooms_2.jpg'
import checkSquare from '../img/checkSquare.png'
import discover_1 from '../img/discover_1.png'
import discover_2 from '../img/discover_2.png'
import discover_3 from '../img/discover_3.png'
import Avatar from '../img/Avatar.jpg'
import Slider from '../img/Slider.png'

const Home = () => {

const gallery = [gallery_1,gallery_2,gallery_3,gallery_4]
const discoverGallery = [{img:discover_2, text:"Parties"},{img:discover_3, text:"Relax"},{img:discover_1, text:"Weddings"}]

  return (
    <div>
      <div class=" bg-homebg bg-[#2A0145] bg-center text-center text-white flex justify-around items-center py-16">
        <div>
          <img src={arrowLeft}/>
        </div>
        <div class=" w-[40vw] flex flex-col items-center">
          <p class=" text-[80px]">Book Your Stay</p>
          <p class=" text-sm w-[70%]">Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.</p>
        </div>
        <div>
          <img src={arrowRight}/>
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

      <div class=" relative w-[50%] mx-auto my-16 text-center">
        <p class=" text-[9rem] text-[#F5F6F7] m-0 mb-[-1.5rem]">Welcome</p>
        <p class=" text-[32px] absolute top-32 w-[100%] text-[#64027D] font-bold"> Amazing Hotel in front of the Sea</p>
        <p class=" px-6 text-sm font-light">Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scele risque at. </p>
        <p class=" bg-[#ECA92A] inline-block text-white text-sm py-3 px-5 mt-7">Continue Reading</p>
      </div>

      <div class=" flex gap-4 items-center justify-center mb-20">
        {gallery.map((img)=>(
          <img src={img} width={"200px"}/>
        ))}
      </div>


      <div>
        <div class=" flex">
          <img src={rooms_1} width={"50%"}/>
          <div class="w-[50%] bg-[#F5F6F7] flex justify-center items-center">
            <div class="w-[80%]">
              <div class=" relative mb-[-1.8rem]">
                <p class=" text-[9rem] text-white ">Rooms</p>
                <p class=" text-[32px] absolute bottom-10 text-[#64027D] font-bold">Luxury Double Suite</p>
              </div>
              <p class=" w-[70%] text-sm font-light text-[#42526D]">Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque.</p>
              
              <div class=" text-sm font-light text-[#42526D] mt-7">
                <div class=" flex gap-4">
                  <img src={checkSquare}/>
                  <p>Morbi tempus malesuada erat sed</p>
                </div>

                <div class=" flex gap-4">
                  <img src={checkSquare}/>
                  <p>Tempus malesuada erat sed</p>
                </div>

                <div class=" flex gap-4">
                  <img src={checkSquare}/>
                  <p>Pellentesque vel neque finibus elit</p>
                </div>
              </div>

              <div class=" flex justify-between w-[80%] mt-7">
                <p class=" text-lg text-[#42526d] font-medium"><span class=" text-[2rem] text-[#eca92a] font-semibold">$129</span> /Night</p>
                <p class="bg-[#ECA92A] inline-block text-white text-sm py-3 px-8">Book Now</p>
              </div>
            </div>
            
          </div>
        </div>

        <div class=" flex flex-row-reverse">
          <img src={rooms_2} width={"50%"}/>
          <div class="w-[50%] bg-[#2A0135] flex justify-center items-center text-white">
            <div class="w-[80%]">
              <div class=" relative mb-[-1.8rem]">
                <p class=" text-[9rem] text-[#3f1a49]">Rooms</p>
                <p class=" text-[32px] absolute bottom-10 font-bold ">Luxury Double Suite</p>
              </div>
              <p class=" w-[70%] text-sm font-light">Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque.</p>
              
              <div class=" text-sm font-light mt-7">
                <div class=" flex gap-4">
                  <img src={checkSquare}/>
                  <p>Morbi tempus malesuada erat sed</p>
                </div>

                <div class=" flex gap-4">
                  <img src={checkSquare}/>
                  <p>Tempus malesuada erat sed</p>
                </div>

                <div class=" flex gap-4">
                  <img src={checkSquare}/>
                  <p>Pellentesque vel neque finibus elit</p>
                </div>
              </div>

              <div class=" flex justify-between w-[80%] mt-7">
                <p class=" text-lg font-medium"><span class=" text-[2rem] text-[#eca92a] font-semibold">$129</span> /Night</p>
                <p class="bg-[#ECA92A] inline-block text-white text-sm py-3 px-8">Book Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex justify-center items-center pb-14">
        <div class=" relative w-[30%]">
          <p class=" text-[9rem] text-[#F5F6F7] mb-[-1.6rem]">Hotel</p>
          <p class=" text-[32px] absolute top-32 font-bold text-[#3f1a49] ">Discover PluralSuite</p>
          <p class=" w-[90%] text-[#42526D] font-medium">Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur.</p>
          <p class="bg-[#ECA92A] inline-block text-white text-sm py-3 px-8 mt-7">Discover</p>
        </div>

        <div class=" w-[30%]">
          <p class=" text-sm font-light text-[#42526D] w-[90%]">Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis.</p>
        </div>
      </div>

      <div class="flex">
        {discoverGallery.map((discovery)=>{
          console.log(discovery)
          return(
            <div class=" bg-black relative">
              <img src={discovery.img} />
              <p class=" absolute top-[50%] left-[45%] text-white text-xl font-bold">{discovery.text}</p>
            </div>
          )
        })}
      </div>


      <div class=" bg-[#FDF6EA] flex justify-center items-center flex-col py-14">
        <div class="relative w-[50%] text-center flex flex-col justify-center items-center">
          <p class=" text-[9rem] text-white mb-[-1.6rem]">Clients</p>
          <p class=" text-[32px] absolute top-32 left-[17rem] font-bold text-[#3f1a49] ">Testimonials</p>
          <p class=" w-[90%] text-sm font-light text-[#42526D]">Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus.</p>
        </div>

        <div class="text-center mt-7 flex flex-col justify-center items-center">
          <img src={Avatar} width={"100px"} class=" rounded-full" />
          <p class=" text-lg text-[#42526D] font-semibold">Maria Smith</p>
          <p class=" text-sm text-[#eca92a]">Client</p>
          <img src={Slider} class=" mt-6"/>
        </div>
      </div>


      <div>

      </div>
    </div>
    
    
  )
}

export default Home
