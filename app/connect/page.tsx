export default function Connect() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Connect With Us</h1>

        {/* What to Expect Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              We're excited to welcome you to our church! Here's what you can expect when you visit:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-lg">Friendly greeters to welcome you</li>
              <li className="text-lg">Casual and comfortable atmosphere</li>
              <li className="text-lg">Engaging worship music</li>
              <li className="text-lg">Biblical teaching and preaching</li>
              <li className="text-lg">Children's programs available</li>
            </ul>
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Sunday Service</h3>
              <p className="text-gray-600 mb-2">Every Sunday</p>
              <p className="text-gray-700">10:30 AM - 12:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Bible Study</h3>
              <p className="text-gray-600 mb-2">Wednesday Evening</p>
              <p className="text-gray-700">7:00 PM - 8:30 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Youth Group</h3>
              <p className="text-gray-600 mb-2">Friday Evening</p>
              <p className="text-gray-700">6:00 PM - 8:00 PM</p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
} 