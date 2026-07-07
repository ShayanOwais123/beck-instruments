function Testimonials() {
  const testimonials = [
    {
      name: "Dr. John Smith",
      role: "Dental Surgeon",
      text: "Excellent craftsmanship and outstanding quality. Highly recommended.",
    },
    {
      name: "Sarah Williams",
      role: "Medical Distributor",
      text: "Reliable products with consistent quality and fast worldwide shipping.",
    },
    {
      name: "Michael Brown",
      role: "Hospital Procurement",
      text: "Professional service and premium surgical instruments every time.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-blue-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Trusted by healthcare professionals and distributors around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="border border-gray-200 rounded-2xl p-8"
            >
              <p className="text-gray-600 leading-7">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;