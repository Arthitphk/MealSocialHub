import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import GroupIcon from '@mui/icons-material/Group';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import InfoIcon from '@mui/icons-material/Info';


const ChatPage = () => {
  return (
    
    <div className="container mx-auto shadow-lg rounded-lg">
            
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div className="font-semibold text-2xl">FoodChat</div>
          <div>
            <button className='mr-20'><HomeIcon/></button>
            <button className='mr-20'><FastfoodIcon/></button>
            <button className='mr-20'><BookmarksIcon /></button>
            <button className='mr-20'><FavoriteIcon/></button>
          </div>
          <div
            className="p-2  text-white font-semibold flex items-center justify-center"
          >
           <img src='https://m.media-amazon.com/images/I/41jLBhDISxL.jpg' className='h-14 w-14  rounded-full'/>
          </div>
        </div>
        
        <div className="flex flex-row justify-between bg-white">
         
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            
            <div className="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            
            <div
              className="flex flex-row rounded-lg py-4 px-2 justify-center items-center border-b-2 border-l-8 border-t-2 border-blue-500"
            >
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="text-gray-500">Pick me at 9:00 Am</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/otT2199XwI8/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Everest Trip 2021</div>
                <span className="text-gray-500">Hi Sam, Welcome</span>
              </div>
            </div>
            <div
              className="flex flex-row py-4 px-2 items-center border-b-2  "
            >
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">MERN Stack</div>
                <span className="text-gray-500">Lusi : Thanks Everyone</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Jessica Martinez</div>
              
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Benjamin Thompson</div>
                
              </div>
            </div>
    
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Samuel Lee</div>
                
              </div>
            </div>

            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675034393635-ae45492f9be6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Olivia Davis</div>
                
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Ethan Wilson</div>
                
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Sophia Garcia</div>
                
              </div>
            </div> <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675034825840-bbfcd11cbb25?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Liam Robinson</div>
                
              </div>
            </div> <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1666866587937-c933156b2168?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Ava Hernandez</div>
                
              </div>
            </div>

            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Mason Taylor</div>
                
              </div>
            </div>

            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Isabella Nguyen</div>
                
              </div>
            </div>
            
          </div>
         
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <div
                  className="mr-2 py-3 px-4 bg-blue-400 rounded-full text-white"
                >
                  Welcome to group everyone !
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div
                  className="ml-2 py-3 px-4 bg-gray-400 rounded-full text-white"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                  at praesentium, aut ullam delectus odio error sit rem. Architecto
                  nulla doloribus laborum illo rem enim dolor odio saepe,
                  consequatur quas?
                </div>
              </div>
              <div className="flex justify-end mb-4">
                <div>
                  <div
                    className="mr-2 py-3 px-4 bg-blue-400 rounded-full text-white"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam, repudiandae.
                  </div>
    
                  
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div
                  className="ml-2 py-3 px-4 bg-gray-400 rounded-full text-white"
                >
                  happy holiday guys!
                </div>
              </div>
            </div>
            <div className="py-5">
              <input
                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
            </div>
            
          </div>
                <div class="w-3/5 border-l-2 px-5">
                  <div className="w-full h-screen flex flex-col hover:cursor-pointer">
                    <a className="hover:bg-blue-400  p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Chat Detail<InfoIcon  className='float-right'/></a>
                    <a className="hover:bg-blue-400  p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Group<GroupIcon className='float-right'/></a>
                    <a className="hover:bg-blue-400  p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Food Delivery<DeliveryDiningIcon className='float-right'/></a>
                    <a className="hover:bg-blue-400  p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Chat Setting<SettingsIcon className='float-right'/></a>
                    <a className="hover:bg-blue-400  p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Media, File, Link<PermMediaIcon className='float-right'/></a>
                    <div className='grid grid-cols-4 gap-2'>
                      <img src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://plus.unsplash.com/premium_photo-1673809798703-6082a015f931?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://plus.unsplash.com/premium_photo-1676234917179-a7b1ca98c984?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                      <img src='https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D' className='w-28 h-20'/>
                  </div>
                  </div>
              </div>
          </div>
        </div>
    
  )
}

export default ChatPage