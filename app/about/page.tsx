export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>

        {/* Who We Are Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              We are a community of believers committed to following Jesus Christ and sharing His love with others. Our church is built on the foundation of biblical truth and the power of the Holy Spirit.
            </p>
            <p className="text-lg">
              We welcome people from all walks of life to join us in worship, fellowship, and service. Our diverse congregation reflects the beauty of God's creation and the unity we have in Christ.
            </p>
          </div>
        </section>

        {/* What We Believe Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Believe</h2>
          <div className="prose max-w-none">
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-lg">We believe in the Holy Trinity: Father, Son, and Holy Spirit</li>
              <li className="text-lg">We believe in the authority and inerrancy of Scripture</li>
              <li className="text-lg">We believe in salvation through faith in Jesus Christ alone</li>
              <li className="text-lg">We believe in the importance of baptism and communion</li>
              <li className="text-lg">We believe in the Great Commission to make disciples of all nations</li>
            </ul>
          </div>
        </section>

        {/* Staff Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Pastor Name</h3>
              <p className="text-gray-600 mb-4">Senior Pastor</p>
              <p className="text-gray-700">Contact: pastor@church.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Associate Pastor</h3>
              <p className="text-gray-600 mb-4">Associate Pastor</p>
              <p className="text-gray-700">Contact: associate@church.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Worship Leader</h3>
              <p className="text-gray-600 mb-4">Music Director</p>
              <p className="text-gray-700">Contact: worship@church.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 