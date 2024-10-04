import React from "react";
import Layout from "../components/layout";
import FaderComponent from "../components/fader";
import SlideInRightComponent from "../components/slideInright";
import Modal from "../components/popup";

const HomePage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [formaData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formaData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();

    const { name, email, phone} = formaData;
    const projectName="brigade The Gateway";
    const data = {
      name,
      email,
      phone,
      projectName
    }
    if (!name || !email || !phone) {
      alert("Please fill all the fields");
      return;
    }
    const response = await fetch("https://ycb1sb6t8e.execute-api.us-west-2.amazonaws.com/default/LeadStorw", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      alert("Your data has been submitted successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      setShowModal(false);
    }
    else {
      alert("Something went wrong. Please try again later");
    }
    
  }
  return (
    <Layout>
      <div className="relative">
        <img
          src="../../img/back.webp"
          alt="Slide 1"
          className="w-full h-screen object-cover"
        />

        {/* Overlay Div for Black Shadow */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        ></div>

        {/* Info Card Section */}
        <div
          className="absolute top-20 left-6 w-80  text-black rounded-lg p-6 shadow-lg max-w-sm md:top-20 md:left-10 md:w-80  sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          style={{ backgroundColor: "#ffff" }}
        >
          <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">
            Coming Soon
          </div>
          <p className="font-medium mb-4">
            BRIGADE NEOPOLIS
            <br />
            At Kokapet, Hyderabad
          </p>
          <div className="effetMoveGradient effectScale">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border border-dashed border-purple-700 py-2 mb-4 ">
              <ul className="list-none">
                <li className="text-white text-sm mb-2">
                  &#9679; Hyderabad's First World Trade Center
                </li>
                <li className="text-white text-sm mb-2">
                  &#9679; 50+ Amenities Spread Across
                </li>
                <li className="text-white text-sm mb-2">
                  &#9679; Grand Clubhouse with Guest Rooms
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 font-semibold">
            Premium Large 3+ BHK & 4 BHK Apartments Start
          </p>
          <p className="text-2xl font-bold text-blue-600 my-2">
            ₹ 3.5 Cr* to 10 Cr*
          </p>
          <p className="text-lg font-semibold text-gray-800">Onwards</p>

          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            style={{ backgroundColor: "#29759f", color: "#ffffff" }}
            onClick={() => setShowModal(true)}
          >
            Enquire Now
          </button>
        </div>
      </div>

      <main>
        <section className="" style={{ backgroundColor: "rgb(228 185 8)" }}>
          <FaderComponent>
            <div className="container mx-auto px-6 py-2">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-1">
                {/* Left Section - 70% width */}
                <div
                  className="col-span-12 text-left md:col-span-8  p-6 rounded-lg shadow-lg"
                  style={{ color: "#ffff" }}
                >
                  <h2 className="text-3xl font-extrabold mb-4">
                    About Brigade Neopolis
                  </h2>
                  <p className="text-base text-gray-700">
                    Brigade Neopolis is an extremely popular pre-launch project
                    as a testament to luxurious living and contemporary design
                    in the heart of Kokapet, Hyderabad. Developed by a reputeted
                    real estate builder Brigade Group. The project offers a
                    range of thoughtfully designed configurations, including 3
                    and 4 BHK residential apartments. Each unit is meticulously
                    crafted to provide maximum comfort and functionality,
                    catering to the diverse needs of modern families. As the
                    project's development progresses and the RERA registration
                    is obtained, Brigade Neopolis Kokapet is all set to elevate
                    the standards of urban living in Hyderabad.
                  </p>
                  <p className="text-base text-gray-700 mt-4">
                    The spacious interiors are complemented by aesthetic
                    finishes and fixtures, creating an ambiance of
                    sophistication and refinement. This upcoming residential
                    segment is poised to redefine urban living with its
                    meticulously planned apartments and world-class amenities.
                    In this property is set to become an architectural marvel,
                    offering a seamless blend of modernity and tranquility.
                  </p>
                  <p className="text-base text-gray-700 mt-4">
                    Brigade Neopolis Hyderabad aspires to redefine urban living
                    by offering a harmonious blend of modern comforts and
                    natural serenity. The project's architectural brilliance and
                    contemporary design are set to create an elegant skyline
                    that stands as a testament to modernity and luxury. Its
                    proximity to essential services, coupled with its serene
                    location, ensures that residents can experience the best of
                    both worlds.
                  </p>
                </div>

                {/* Right Section - 30% width */}
                <div className="col-span-12 md:col-span-4">
                  {/* Add an Image here on the right side */}
                  <div className="mt-0 md:mt-20">
                    <img
                      src="../../img/Budigere.jpg" // Replace with the actual image URL
                      alt="Brigade Neopolis"
                      className="object-cover w-full h-64 rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </FaderComponent>
        </section>
        <section className="my-20">
          <FaderComponent>
            <div className="container mx-auto px-6 py-2">
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ color: "#29759f" }}
              >
                Brigade Neopolis Highlights
              </h2>
              <div className="md:grid md:grid-cols-2 gap-4 items-start md:ml-40">
                <div className="flex flex-row  p-6  items-center md:mt-0">
                  <i className="fas fa-check-double text-green-500 mr-2"></i>
                  <h3 className="text-base font-semibold text-gray-800">
                    Hyderabad's First World Trade Center
                  </h3>
                </div>
                <div className="flex flex-row p-6 items-center  md:mt-0">
                  <i className="fas fa-check-double text-green-500 mr-4"></i>
                  <h3 className="text-base font-semibold text-gray-800">
                    50+ Amenities Spread Across
                  </h3>
                </div>
                <div className="flex flex-row p-6 items-center  md:mt-0">
                  <i className="fas fa-check-double text-green-500 mr-2"></i>
                  <h3 className="text-base font-semibold text-gray-800">
                    Grand Clubhouse with Guest Rooms
                  </h3>
                </div>
                <div className="flex flex-row p-6 items-center  md:mt-0">
                  <i className="fas fa-check-double text-green-500 mr-2"></i>
                  <h3 className="text-base font-semibold text-gray-800">
                    20 Mins from Shopping Mall - Inorbit Mall, Gachibowli
                  </h3>
                </div>
                <div className="flex flex-row p-6 items-center mt-4 md:mt-0">
                  <i className="fas fa-check-double text-green-500 mr-2"></i>
                  <h3 className="text-base font-semibold text-gray-800">
                    15 Mins from Proposed Miyapur Metro Station
                  </h3>
                </div>
                <div className="flex flex-row p-6 items-center mt-4 md:mt-0">
                  <i className="fas fa-check-double text-green-500 mr-2"></i>
                  <h3 className="text-base font-semibold text-gray-800">
                    15 Mins from Lingampalli Railway Station
                  </h3>
                </div>
                <div className="flex flex-row p-6 items-center col-span-2 mt-4 md:mt-0">
                  <i className="fas fa-check-double text-green-500 mr-2"></i>
                  <h3 className="text-base font-semibold text-gray-800 text-center">
                    30-40 Minutes Away - Rajiv Gandhi International Airport
                  </h3>
                </div>
              </div>
            </div>
          </FaderComponent>
        </section>
        <section className="my-20" style={{ backgroundColor: "#232d30" }}>
          <FaderComponent>
            <div className="container mx-auto px-6 py-6">
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ color: "#ffff" }}
              >
                Brigade Neopolis Floor Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:mt-10">
                {/* Left Section - 70% width */}
                <div
                  className="col-span-12 text-left md:col-span-8   rounded-lg shadow-lg"
                  style={{ color: "#ffff" }}
                >
                  <table
                    className="table-auto w-full"
                    style={{ color: "white" }}
                  >
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Configuration</th>
                        <th className="px-4 py-2">Area</th>
                        <th className="px-4 py-2">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">3+ BHK</td>
                        <td className="border px-4 py-2">Comming Soon</td>
                        <td className="border px-4 py-2">Call For Price</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">4 BHK</td>
                        <td className="border px-4 py-2">Comming Soon</td>
                        <td className="border px-4 py-2">Call For Price</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="relative mt-0 mx-auto md:mt-0 group w-64 h-64 item-center">
                    <img
                      src="../../img/blur_imag.jpg"
                      alt="Brigade Neopolis"
                      className="object-cover w-full h-full"
                    />

                    {/* Button to appear on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <button
                        className="btn bg-transparent border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 px-4 py-2 rounded-full text-white"
                        onClick={() => setShowModal(true)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FaderComponent>
        </section>
        <section className="my-20">
          <div className="container mx-auto px-6 py-2">
            <h2
              className="text-3xl font-extrabold mb-4"
              style={{ color: "#29759f" }}
            >
              Brigade Neopolis Amenities
            </h2>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/1.webp"
                    alt="Swimming Pool"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">Swimming Pool</h3>
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/2.webp"
                    alt="Gym"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">Gym</h3>
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/3.webp"
                    alt="Jogging Track"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">Jogging Track</h3>
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/4.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">Yoga Pavilion</h3>
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/5.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">24/7 CCTV</h3>
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/6.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">Club House</h3>
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/7.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">Mini Theater</h3>
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="../../img/amenities/8.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 class="text-center font-bold text-xl">Tennis Court</h3>
                </div>
              </SlideInRightComponent>
            </div>
          </div>
        </section>
        <section className="my-20 p-6" style={{ backgroundColor: "#232d30" }}>
          <div className="container mx-auto px-6 py-2">
            <h2
              className="text-3xl font-extrabold mb-4"
              style={{ color: "#fff" }}
            >
              Brigade Neopolis Gallery
            </h2>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-1">
                  <img
                    src="../../img/gallery/g1-sm.webp"
                    alt="Swimming Pool"
                    class="w-full h-48 object-cover rounded-lg mb-1"
                  />
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-1">
                  <img
                    src=".../../img/gallery/g2-sm.webp"
                    alt="Gym"
                    class="w-full h-48 object-cover rounded-lg mb-1"
                  />
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-1">
                  <img
                    src="../../img/gallery/g3-sm.webp"
                    alt="Jogging Track"
                    class="w-full h-48 object-cover rounded-lg mb-1"
                  />
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-1">
                  <img
                    src="../../img/gallery/g4-sm.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-1"
                  />
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-1">
                  <img
                    src="../../img/gallery/g5-sm.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-1"
                  />
                </div>
              </SlideInRightComponent>
              <SlideInRightComponent>
                <div class="bg-white rounded-lg shadow-lg p-1">
                  <img
                    src="../../img/gallery/g6-sm.webp"
                    alt="Yoga Pavilion"
                    class="w-full h-48 object-cover rounded-lg mb-1"
                  />
                </div>
              </SlideInRightComponent>
            </div>
          </div>
        </section>
        <section className="my-20">
          <FaderComponent>
            <div className="container mx-auto px-6 py-2">
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ color: "#29759f" }}
              >
                Brigade Neopolis Location
              </h2>
              <div className="md:grid md:grid-cols-2 gap-4 items-start md:ml-40">
                <div className="mt-6 md:mt-0">
                  
                  <form className="texi-left items-start">
                    <div className="mb-4">
                      <label
                        for="name"
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        name="name"
                        style={{
                          border: "2px solid #d1d5db",
                          borderRadius: "0.375rem",
                          width: "100%",
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        for="email"
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        style={{
                          border: "2px solid #d1d5db",
                          borderRadius: "0.375rem",
                          width: "100%",
                        }}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        for="phone"
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      >
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        style={{
                          border: "2px solid #d1d5db",
                          borderRadius: "0.375rem",
                          width: "100%",
                        }}
                        name="phone"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="items-left">
                      <button
                        className="effetMoveGradient hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleSubmit}
                      >
                        Enquire Now
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-0 md:mt-0">
                <div className="flex flex-row items-center md:mt-0">
                  <i className="fas fa-map-marker-alt text-green-500 mr-2"></i>
                  <h3 className="text-base font-semibold text-gray-800">
                    Brigade Neopolis, Kokapet, Hyderabad
                  </h3>
                  </div>
                  <img
                    src="../../img/location-map-bridge.webp"
                    alt="Brigade Neopolis"
                    className="object-cover w-full h-64 rounded-lg mt-0"
                  />
              </div>
              </div>
            </div>
          </FaderComponent>
        </section>
        <Modal show={showModal} onClose={() => setShowModal(false)} handleChange={handleChange} handleClick={handleSubmit}/>
      </main>
    </Layout>
  );
};

export default HomePage;
