export default function Sermons() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Sermons</h1>

        {/* Live Stream Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Live Stream</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              <div className="bg-gray-300 w-full h-96 flex items-center justify-center">
                <p className="text-gray-600">Live stream will appear here</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Sermons Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Recent Sermons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                  <p className="text-gray-600">Sermon Thumbnail</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Sermon Title</h3>
              <p className="text-gray-600 mb-2">Pastor Name</p>
              <p className="text-gray-700 mb-4">Date: January 1, 2024</p>
              <button className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark">
                Watch Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                  <p className="text-gray-600">Sermon Thumbnail</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Sermon Title</h3>
              <p className="text-gray-600 mb-2">Pastor Name</p>
              <p className="text-gray-700 mb-4">Date: December 25, 2023</p>
              <button className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark">
                Watch Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                  <p className="text-gray-600">Sermon Thumbnail</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Sermon Title</h3>
              <p className="text-gray-600 mb-2">Pastor Name</p>
              <p className="text-gray-700 mb-4">Date: December 18, 2023</p>
              <button className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark">
                Watch Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 