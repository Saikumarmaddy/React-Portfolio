import React from "react";
// import profile_image from "../assets/images/Sai Kumar profile image.jpg";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import CheckMark from "../assets/images/check.png";
import SimpleImageSlider from "react-simple-image-slider";
import Image_1 from "../assets/images/Sketches/Asuran.jpg";
import Image_2 from "../assets/images/Sketches/Bheeshma.jpg";
import Image_3 from "../assets/images/Sketches/Rage.jpg";
import Image_4 from "../assets/images/Sketches/Bahubali.jpg";
import Image_7 from "../assets/images/Sketches/Rolex.jpg";
import Image_8 from "../assets/images/Sketches/Warrior.jpg";

function About() {
  const about_text_one = "A passionate Frontend Developer!";
  const about_text_two =
    "  Currently designated as an Application Development Senior Analyst in Accenture with 4.7years of overall experience. I started my career as Avionics Software engineer in verification and Validation, later got shifted to Frontend side of web development, which helped me in having exposure to the complete model.";
  const data = [
    {
      resp: "Active involvement in leading the team by taking the ownership of assigned tasks.",
    },
    {
      resp: "Ensure to deliver the assigned tasks on time not effecting the project deadlines.",
    },
    {
      resp: "Experience in working Agile environment and have a good understanding in work management tools like Jira.",
    },
  ];
  const images = [
    { url: Image_1, caption: "Asuran" },
    { url: Image_2, caption: "Bheeshma" },
    { url: Image_3, caption: "Rage" },
    { url: Image_4, caption: "Bahubali" },
    { url: Image_7, caption: "Rolex" },
    { url: Image_8, caption: "Warrior" },
  ];
  // const spanStyle = {
  //   padding: "20px",
  //   background: "#efefef",
  //   color: "#000000",
  // };
  // const divStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundSize: "cover",
  //   height: "400px",
  // };
  // const responsiveSettings = [
  //   {
  //     breakpoint: 800,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 500,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  // ];

  const about_text_three =
    "When I am not at the computer, I usually do sketching, watching movies and hanging out with friends & family.";
  return (
    <div>
      <div className="flex items-start justify-center pl-20 pr-10 w-full h-full max-[1010px]:flex-col max-[540px]:px-10">
        {/* <div className="w-5/12 text-center max-[1010px]:w-3/4">
          <img
            src={profile_image}
            alt="profile_image"
            className="w-5/6 h-5/6 rounded-lg max-[1010px]:pt-44 max-[1010px]:pb-14 max-[1010px]:w-5/8 max-[1010px]:h-full"
          />
        </div> */}
        <div className="w-11/12 flex flex-col">
          <div className="ml-8 text-2xl font-medium text-left tracking-wide text-[#cfd9e1] font-fangsong italic max-[1010px]:w-full max-[1010px]:text-left max-[450px]:text-xl">
            <div className="text-[#d19c96] font-semibold">{about_text_one}</div>
            <div>{about_text_two}</div>
          </div>
          <div className="my-10 text-2xl font-medium text-left tracking-wide text-[#cfd9e1] font-fangsong italic max-[1010px]:w-full max-[1010px]:text-left max-[450px]:text-xl bg-[#54B4D3] bg-opacity-25 bg-gradient-to-l from-black rounded-lg">
            {data.map((item) => (
              <div className="flex items-start my-1">
                <span className="">
                  <img
                    src={CheckMark}
                    alt="checkmark_icon"
                    className="mx-3 mt-1"
                  />
                </span>
                <span>{item.resp}</span>
              </div>
            ))}
          </div>
          <div className="text-2xl font-medium text-left tracking-wide text-[#cfd9e1] font-fangsong italic max-[1010px]:w-full max-[1010px]:text-left max-[450px]:text-xl">
            <div className="font-bold">{about_text_three}</div>
          </div>
        </div>
      </div>
      {/* <div className="w-5/12 ml-80">
        <Slide responsive={responsiveSettings}>
          {images.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div> */}
      <div className="w-3/4 bg-black ml-10per mb-24 rounded-2xl relative text-center p-10 mt-24">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#54B4D3] to-[#14A44D] text-5xl italic tracking-wider">
          MY SKETCHES
        </span>
        <SimpleImageSlider
          width={500}
          height={650}
          images={images}
          navStyle={1}
          slideDuration={0.5}
          autoPlayDelay={1.7}
          navSize={50}
          navMargin={30}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          style={{ marginLeft: "330px", marginTop: "30px" }}
        />
      </div>
    </div>
  );
}

export default About;
