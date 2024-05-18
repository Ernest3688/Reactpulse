import logo2 from '../img/Logo2.png'

const Footer = () => {
  return (
    <div>
        <div class=" bg-footerbg bg-[#370145] bg-center flex justify-center items-center flex-col gap-10 py-10">
        <img src={logo2} />

        <div class=" flex text-center gap-10">
            <div>
                <p class=" text-[#ECA92A] tracking-widest">EMAIL</p>
                <p class=" text-[#F9E4BD]">pluralsuite@gmail.com</p>
            </div>

            <div>
                <p class=" text-[#ECA92A] tracking-widest">PHONE</p>
                <p class=" text-[#F9E4BD]">+2348 1811 00811</p>
            </div>

            <div>
                <p class=" text-[#ECA92A] tracking-widest">ADDRESS</p>
                <p class=" text-[#F9E4BD]">Akinyemi Avenue, Lekki.</p>
            </div>
        </div>

        
        </div>
        <div class=" bg-[#2A0135] text-center py-4">
            <p class="text-[#F8D8B0] font-light text-sm">Copyright ©2024. All rights reserved  |  Designed by <span class=" text-[#E88000]">PKAIdris</span></p>
        </div>
    </div>
  )
}

export default Footer
