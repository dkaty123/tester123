export function AIActionsDemo() {
  return (
    <div className="relative bg-white rounded-3xl shadow-sm p-8 h-full">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">AI Actions</h3>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-black"></div>
            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#f1f1f3] p-6 mb-4">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#f0e7fd] flex items-center justify-center mr-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#7e3af2" strokeWidth="2"/>
                <path d="M20.6953 9.5C20.8921 10.2986 21 11.1366 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12.8634 3 13.7014 3.10786 14.5 3.30467" stroke="#7e3af2" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 6L17 10" stroke="#7e3af2" strokeWidth="2" strokeLinecap="round"/>
                <path d="M17 6V10H21" stroke="#7e3af2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-medium mb-1">Invite user</h4>
              <div className="h-3 w-full bg-gray-100 rounded-full"></div>
              <div className="h-2 w-1/3 bg-gray-100 rounded-full mt-2"></div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative w-12 h-6 bg-green-400 rounded-full">
              <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#f1f1f3] p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#f0f0f2] flex items-center justify-center mr-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="#045C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-medium mb-1">Escalate to human</h4>
              <div className="h-3 w-full bg-gray-100 rounded-full"></div>
              <div className="h-2 w-1/3 bg-gray-100 rounded-full mt-2"></div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative w-12 h-6 bg-gray-200 rounded-full">
              <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-5">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f0f0" strokeWidth="2" />
          <polygon points="45,35 65,50 45,65" fill="#f0f0f0" />
        </svg>
      </div>
    </div>
  )
}
