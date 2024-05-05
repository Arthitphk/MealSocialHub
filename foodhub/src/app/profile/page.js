import React from 'react'

const page = () => {
  return (
    <div>
        <div className="p-16">
          <div className="p-8 bg-white shadow mt-24">
              <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                    <div>
                      <p className="font-bold text-gray-700 text-xl">12</p>
                      <p className="text-gray-400">Friends</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700 text-xl">8</p>
                      <p className="text-gray-400">Photos</p>
                    </div>
                        <div>
                        <p className="font-bold text-gray-700 text-xl">69</p>
                      <p className="text-gray-400">Comments</p>
                    </div>
                  </div>
                  <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                          <img src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg" className='rounded-full'/>
                        </div>
                  </div>

                  <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button
                          className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                          Add Friend
                        </button>
                            <button
                          className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                          Message
                        </button>
                  </div>
              </div>

              <div className="mt-20 text-center border-b pb-12">
                <h1 className="text-4xl font-medium text-gray-700">John Doe</h1>
                <p className="font-light text-gray-600 mt-3">Pak Kret, Thailand</p>
                <p className="mt-8 text-gray-500">Web Development</p>
                <p className="mt-2 text-gray-500">University of Computer Science</p>
              </div>

              <div className='grid grid-cols-4 gap-4 mt-10'>
                  <div>
                    <img className='rounded-xl' src='https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg' alt=''/>
                  </div>
                  <div>
                    <img className='rounded-xl' src='https://www.eatingwell.com/thmb/_7h28VUpbggMtFueu4B-SlR751Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wheat-berry-salad-2000-7ef11f7f4bb248a799bf1bd5b4d12c6b.jpg' alt=''/>
                  </div>
                  <div>
                    <img className='rounded-xl' src='https://www.eatingwell.com/thmb/m0nLGXor00bjRKFQcEUlMHv2Qmg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6753430-928769f74aa24a25b43acb7d05d55054.jpg' alt=''/>
                  </div>
                  <div>
                    <img className='rounded-xl'src='https://privamedisconcierge.com/wp-content/uploads/2021/05/69d7ecd9d248a62dd72cc0193690be4b.jpg' alt=''/>
                  </div>
                  <div>
                    <img  className='rounded-xl' src='https://media.istockphoto.com/id/1137377978/photo/pancakes-with-banana-blueberry-and-maple-syrup-for-a-breakfast.jpg?s=612x612&w=0&k=20&c=3LObE7m_LNH503Hmpd_rDdCTL95-4ynHDLWQM7N2_ck=' alt=''/>
                  </div>
                  <div>
                    <img className='rounded-xl' src='https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg' alt=''/>
                  </div>
                  <div>
                    <img className='rounded-xl' src='https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg' alt=''/>
                  </div>
                  <div>
                    <img className='rounded-xl' src='https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg' alt=''/>
                  </div>
              </div>


              <div className="mt-12 flex flex-col justify-center">
                <p className="text-gray-600 text-center font-light lg:px-16"></p>
                <button
              className="text-indigo-500 py-2 px-4  font-medium mt-4"
            >
              Show more
            </button>
              </div>

            </div>
        </div>
    </div>
    
  )
}

export default page