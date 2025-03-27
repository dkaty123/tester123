import { Activity, BarChart2, ChevronLeft, ChevronRight, Edit3, PlayIcon, PlusIcon } from "lucide-react"

export function PlatformShowcase() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Discover the Chatbase platform
        </h2>

        <div className="mb-12">
          <div className="flex justify-center mb-12">
            <div className="flex gap-12">
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <PlayIcon className="h-5 w-5 text-white" />
                <span>Playground</span>
              </div>
              <div className="flex items-center gap-2 opacity-100">
                <BarChart2 className="h-5 w-5 text-white" />
                <span>Analytics</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Activity className="h-5 w-5 text-white" />
                <span>Activity</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <PlusIcon className="h-5 w-5 text-white" />
                <span>Sources</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Edit3 className="h-5 w-5 text-white" />
                <span>Actions</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#ff4d4d] to-[#ff8c00]">
            <div className="bg-white m-1 rounded-3xl overflow-hidden">
              <div className="bg-white p-4 border-b flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>

              <div className="p-8 bg-white text-black">
                <h3 className="text-2xl font-bold text-black mb-6">Analytics</h3>

                <div className="grid grid-cols-2 mb-6">
                  <div className="flex gap-2 items-center">
                    <div className="h-6 w-6 bg-[#f5f5f7] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.6056 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94696 20.885 8.91565 21 11V11.5Z" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm">Chats</span>
                  </div>

                  <div className="flex justify-end">
                    <div className="flex items-center gap-2 text-sm bg-[#f5f5f7] px-3 py-1 rounded-md">
                      <span>2024-08-22 - 2024-07-22</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-12">
                  <div className="bg-white p-4 rounded-md border">
                    <div className="flex items-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12V3M21 12H3M12 21V12M12 12H21" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-3xl font-bold">3,543</span>
                    <div className="text-xs text-gray-500">Total conversations</div>
                  </div>

                  <div className="bg-white p-4 rounded-md border">
                    <div className="flex items-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 8V16L12 20M12 12V20M20 8V16L12 20" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-3xl font-bold">12,543</span>
                    <div className="text-xs text-gray-500">Total messages</div>
                  </div>

                  <div className="bg-white p-4 rounded-md border">
                    <div className="flex items-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20V10M18 20V4M6 20V16" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-3xl font-bold">54</span>
                    <div className="text-xs text-gray-500">Average messages</div>
                  </div>

                  <div className="bg-white p-4 rounded-md border">
                    <div className="flex items-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V8M15 3L20 8M15 3V8H20M10 17L8 15M8 15L10 13M8 15H16M14 9L16 11M16 11L14 13M16 11H8" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-3xl font-bold">246</span>
                    <div className="text-xs text-gray-500">Messages with thumbs down</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-base font-medium mb-4">Chats started</h4>
                  <div className="h-40 bg-[#f5f9ff] rounded-lg px-4 py-2 relative">
                    <div className="h-32 w-full mt-4">
                      <svg width="100%" height="100%" viewBox="0 0 600 100" preserveAspectRatio="none">
                        <path d="M0,70 C30,65 60,85 90,75 C120,65 150,50 180,55 C210,60 240,75 270,65 C300,55 330,45 360,50 C390,55 420,65 450,55 C480,45 510,40 540,30 C570,20 600,25 600,20"
                              stroke="#4285f4"
                              fill="none"
                              strokeWidth="2"/>
                        <path d="M0,70 C30,65 60,85 90,75 C120,65 150,50 180,55 C210,60 240,75 270,65 C300,55 330,45 360,50 C390,55 420,65 450,55 C480,45 510,40 540,30 C570,20 600,25 600,20 L600,100 L0,100 Z"
                              fill="rgba(66, 133, 244, 0.1)"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-2 left-0 w-full flex justify-between text-xs text-gray-500 px-4">
                      <span>Jun 1</span>
                      <span>Jun 2</span>
                      <span>Jun 3</span>
                      <span>Jun 4</span>
                      <span>Jun 5</span>
                      <span>Jun 6</span>
                      <span>Jun 7</span>
                      <span>Jun 8</span>
                      <span>Jun 9</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-4">Chats by country</h4>
                  <div className="flex justify-between items-center">
                    <span>United States</span>
                    <div className="flex items-center gap-2">
                      <div className="w-48 h-2 bg-[#4285f4] rounded-full"></div>
                      <span>500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="h-10 w-10 rounded-full bg-[#333] flex items-center justify-center">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="h-10 w-10 rounded-full bg-[#333] flex items-center justify-center">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
