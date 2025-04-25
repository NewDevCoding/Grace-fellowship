export default function Give() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Give</h1>

        {/* Giving Options Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Online Giving</h3>
              <p className="text-gray-700 mb-6">
                Give securely online through our trusted payment processor. You can set up one-time or recurring donations.
              </p>
              <button className="bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-dark w-full">
                Give Online
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">In-Person Giving</h3>
              <p className="text-gray-700 mb-6">
                You can give during our Sunday services or drop off your donation at the church office during business hours.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">Sunday Services: 10:30 AM</p>
                <p className="text-gray-700">Office Hours: Mon-Fri, 9 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Giving Information Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">About Giving</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Your generous giving helps support our church's mission and ministries. We are committed to being good stewards of the resources God has entrusted to us.
            </p>
            <p className="text-lg mb-4">
              All donations are tax-deductible, and you will receive a giving statement at the end of the year for your records.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">Financial Transparency</h3>
              <p className="text-gray-700">
                We believe in being transparent about how your donations are used. If you have any questions about our finances or would like to see our annual report, please contact our church office.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 