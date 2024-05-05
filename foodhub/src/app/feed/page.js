import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import GroupIcon from '@mui/icons-material/Group';

const FeedPage = () => {
  return (
  
  <div className="w-full  h-screen flex flex-row flex-wrap justify-center container mx-auto "> 
    <div className="bg-white shadow-lg border-t-4 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
      <div className="w-full text-right"><button className="p-2 fa fa-bars text-4xl text-gray-600"></button></div>
    </div>
    
    <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
      <div className="p-5 bg-white sticky top-0">
        <img className="border border-indigo-100 shadow-lg rounded-full" src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"/>
        <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
          John Doe
        </div>
      </div>
      <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
        <a className="hover:bg-blue-400 bg-slate-100 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Messages<EmailIcon className='float-right'/></a>
        <a className="hover:bg-blue-400 bg-slate-100 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Friend<GroupIcon className='float-right'/></a>
        <a className="hover:bg-blue-400 bg-slate-100 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Food Delivery<DeliveryDiningIcon className='float-right'/></a>
        <a className="hover:bg-blue-400 bg-slate-100 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Settings<SettingsIcon className='float-right'/></a>
        <a className="hover:bg-blue-400 bg-slate-100 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href="">Log out<ArrowForwardIcon className='float-right'/></a>
      </div>
    </div>
    
    

    <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased ">
      <div className="grid grid-cols-1 gap-4 ">
          <div className="bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
              <h1 className="text-center text-slate-200 text-xl font-bold col-span-6">What are you thinking John</h1>
              <textarea placeholder="Post Something..." className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"></textarea>
              <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                </svg>
              </button>
              <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
              </button>
              <span className="col-span-2"></span>
              <button className="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
                <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                </svg>
              </button>

          </div>

          <div class="bg-white p-8 shadow-md rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2">
                <img src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                <div>
                  <p class="text-gray-800 font-semibold">John Doe</p>
                  <p class="text-gray-500 text-sm">Posted 2 hours ago</p>
                </div>
              </div>
              <div class="text-gray-500 cursor-pointer">
                
                <button class="hover:bg-gray-50 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="7" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="17" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="mb-4">
              <p class="text-gray-800">Just another day with clean food! </p>
            </div>
            
            <div class="mb-4">
              <img src="https://www.freshnlean.com/wp-content/uploads/2018/07/clean-eating-recipe-bowl.jpg" alt="Post Image" class="w-full h-full object-cover rounded-md"/>
            </div>
            
            <div class="flex items-center justify-between text-gray-500">
              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>42 Likes</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                  </svg>
                  <span>3 Comment</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16l6-6-6-6"/><path d="M4 21v-7a4 4 0 0 1 4-4h11"/></svg>
                  </svg>
                  <span>433 Share</span>
                </button>
              </div>
              
              
            </div>
          </div>

          <div class="bg-white p-8 shadow-md rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2">
                <img src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                <div>
                  <p class="text-gray-800 font-semibold">John Doe</p>
                  <p class="text-gray-500 text-sm">Posted 2 hours ago</p>
                </div>
              </div>
              <div class="text-gray-500 cursor-pointer">
                
                <button class="hover:bg-gray-50 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="7" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="17" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="mb-4">
              <p class="text-gray-800">It Cheat Day shu shu...</p>
            </div>
            
            <div class="mb-4">
              <img src="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg" alt="Post Image" class="w-full h-full object-cover rounded-md"/>
            </div>
            
            <div class="flex items-center justify-between text-gray-500">
              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>32 Likes</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                  </svg>
                  <span>6 Comment</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16l6-6-6-6"/><path d="M4 21v-7a4 4 0 0 1 4-4h11"/></svg>
                  </svg>
                  <span>453 Share</span>
                </button>
              </div>
              
              
            </div>
          </div>

          <div class="bg-white p-8 shadow-md rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2">
                <img src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                <div>
                  <p class="text-gray-800 font-semibold">John Doe</p>
                  <p class="text-gray-500 text-sm">Posted 2 hours ago</p>
                </div>
              </div>
              <div class="text-gray-500 cursor-pointer">
                
                <button class="hover:bg-gray-50 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="7" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="17" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="mb-4">
              <p class="text-gray-800">nice</p>
            </div>
            
            <div class="mb-4">
              <img src="https://st2.depositphotos.com/1790318/11580/i/450/depositphotos_115803268-stock-photo-salmon-steak-on-wooden-table.jpg" alt="Post Image" class="w-full h-full object-cover rounded-md"/>
            </div>
            
            <div class="flex items-center justify-between text-gray-500">
              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>32 Likes</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                  </svg>
                  <span>6 Comment</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16l6-6-6-6"/><path d="M4 21v-7a4 4 0 0 1 4-4h11"/></svg>
                  </svg>
                  <span>453 Share</span>
                </button>
              </div>
              
              
            </div>
          </div>

          <div class="bg-white p-8 shadow-md rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2">
                <img src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                <div>
                  <p class="text-gray-800 font-semibold">John Doe</p>
                  <p class="text-gray-500 text-sm">Posted 2 hours ago</p>
                </div>
              </div>
              <div class="text-gray-500 cursor-pointer">
                
                <button class="hover:bg-gray-50 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="7" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="17" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="mb-4">
              <p class="text-gray-800"> Clean Day</p>
            </div>
            
            <div class="mb-4">
              <img src="https://us.123rf.com/450wm/antalexstudio/antalexstudio2304/antalexstudio230401658/203212925-top-view-seafood-dishes-on-wooden-table.jpg?ver=6" alt="Post Image" class="w-full h-full object-cover rounded-md"/>
            </div>
            
            <div class="flex items-center justify-between text-gray-500">
              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>32 Likes</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                  </svg>
                  <span>6 Comment</span>
                </button>
              </div>

              <div class="flex items-center space-x-2">
                <button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16l6-6-6-6"/><path d="M4 21v-7a4 4 0 0 1 4-4h11"/></svg>
                  </svg>
                  <span>453 Share</span>
                </button>
              </div>
              
              
            </div>
          </div>



          

          
      </div>
    </div>
  </div>


             
            
    
  )
}

export default FeedPage





