import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from "./components/header";
import Hero from "./components/hero";
import HeroForm from "./components/herform";

export default function Home()  {
//   const settings = {
//     slidesPerView: 3,
//     speed: 500,
//     loop: true,
//     autoplay: {
//       delay: 300
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//             autoplay: {
//                 delay: 200,
//             },
//         }
//     }
// }

  return (
    <main>
  
    <Header />
    <Hero Component={HeroForm} />


      <section className="brnd-slider bg-black">
          <div className="grid grid-cols-1">
          <div className="container mx-auto">
          <ul className="bnd-slider flex py-10 justify-around">
              <li>
                <a href="https://goo.gl/maps/D6kJBoXBJYwcZWkP7"><Image alt="LOGO" src={'/images/s1.png'} width={150} height={60}/>
                  </a>
              </li>

              <li>
                <a href="https://www.bbb.org/ca/on/richmond-hill/profile/publishers-book/pine-book-writing-inc-0107-1406919"><Image alt="LOGO" src={'/images/s2.png'} width={150} height={60}/></a>
              </li>

              <li>
                <a href="https://www.trustpilot.com/review/pinebookwriting.com"><Image alt="LOGO" src={'/images/s3.png'} width={150} height={60}/></a>
              </li>

              <li>
                <a href="https://www.yelp.com/biz/pine-book-writing-richmond-hill">
                <Image alt="LOGO" src={'/images/s4.png'} width={150} height={60}/>
                </a>
              </li>

            <li>
                <a href="https://clutch.co/profile/pine-book-writing"><Image alt="LOGO" src={'/images/s6.png'} width={150} height={60}/></a>
              </li>

            </ul>
          </div>
          </div>
      </section>

      <section className="about pt-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center">

            <div className="abt-txt m1-h p1">
              <h3 className="font-majallab">About Us<span>Pine Book Publishing</span>
              </h3>
              <p>Celebrate your tales with Pine Book Publishing, a book publishing company that specializes in bringing authors' visions to life through professional book publishing services. Our team of skilled professionals is committed to guide you through every step of the publishing process, ensuring your book captivates readers and makes an everlasting impact worldwide.</p>
            </div>

          
            <div className="abt-pic">
                <Image src={'/images/abt-pic.png'} width={550} height={570}/>
            </div>
      
        </div>

        
      </div>
    </section>



    <section className="portfolio py-14 bg-[url('/images/port-banner.png')]">
      <div className="grid grid-cols-1">
        <div className="container mx-auto text-center">
        <div className="portfolio-h m1-h">
              <h3 className="font-majallab">Unveiling Our Authors’ Creations:<br/>
                <span>Book Showcase</span>
              </h3>
            </div>

          <div className="grid grid-cols-4 gap-4">
          <div><Image src={'/images/bb1-min.webp'} width={260} height={289}/></div>
          <div><Image src={'/images/bb5-min.webp'} width={260} height={289}/></div>
          <div><Image src={'/images/bb8-min.webp'} width={260} height={289}/></div>
          <div><Image src={'/images/bb4-min.webp'} width={260} height={289}/></div>
          <div><Image src={'/images/bb3-min.webp'} width={260} height={289}/></div>
          <div><Image src={'/images/bb6-min.webp'} width={260} height={289}/></div>
          <div><Image src={'/images/bb7-min.webp'} width={260} height={289}/></div>
          <div><Image src={'/images/bb2-min.webp'} width={260} height={289}/></div>
        </div>
        </div>
      </div>
    </section>

    <section className="package py-14">
      <div className="container mx-auto">
      <div className="grid grid-cols-1 mb-14 items-center m1-h text-center">
        <h3 className="font-majallab">Publishing Packages</h3>
      </div>

      {/* <div className="grid grid-cols-4 gap-4  items-top"> */}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


        <div className="pack-wrap gap-8">
        <div className="pack-box flex items-center">
          <Image src={'/images/pp1.png'} width={40} height={50}></Image>
            <h4 className="pl-2">Beginner</h4>
        </div>
        <p>Launch your book with our Beginner Package, offering comprehensive editing, custom cover art, multi-platform formatting, Amazon optimization, 1 ISBN, and full royalties with a few paperback copies.</p>
        </div>

        <div className="pack-wrap">
        <div className="pack-box flex items-center">
          <Image src={'/images/pp2.png'} width={40} height={50}></Image>
            <h4 className="pl-2">Standard</h4>
        </div>
        <p>Enhance your publishing experience with our Standard Package, which ensures meticulous editing, versatile publishing options and 2 ISBNs, complete with a full suite of formats and copies for distribution.

</p>
        </div>

        <div className="pack-wrap">
        <div className="pack-box flex items-center">
          <Image src={'/images/pp3.png'} width={40} height={50}></Image>
            <h4 className="pl-2 font-majallab">Expert</h4>
        </div>
        <p>Propel your project to new peaks with our Expert Package, which includes advanced editing, 3 ISBNs, a dynamic website, a video trailer, and widespread distribution, ensuring full ownership and royalties.

</p>
        </div>

        <div className="pack-wrap">
        <div className="pack-box flex items-center">
          <Image src={'/images/pp4.png'} width={40} height={50}></Image>
            <h4 className="pl-2 font-majallab">Enterprise</h4>
        </div>
        <p>Embark on your authorial journey with our Enterprise Package, which encompasses detailed editing, captivating cover design, strategic marketing, 3 ISBNs, and extensive distribution to bring your book to readers worldwide.

</p>
        </div>

      </div>
      </div>
    </section>


    <section className="process pt-14">
      <div className="container mx-auto text-center m1-h ">
        <h3 className="mb-8 font-majallab">Our Book Publishing Process</h3>
        <p>At Pine Book Publishing, we've streamlined Our Book Publishing Process to ensure authors have a seamless experience from start to finish.</p>
        <Image className="py-10" src={'/images/process-pic.png'} width={1280} height={500}></Image>
      </div>

      <div className="counter">
        <div className="container mx-auto">
        {/* <div className="grid grid-cols-4 gap-4"></div> */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 mx-5 lg:grid-cols-4 xl:gap-x-8">
        <div className="conter-box rounded-lg bg-white p-8 text-center content-center">
            <h2>15+</h2>
            <span className="font-majallab">Years of industry experience</span>
          </div>

          <div className="conter-box rounded-lg bg-white p-8 text-center content-center">
            <h2>500+</h2>
            <span className="font-majallab">Published Books</span>
          </div>

          <div className="conter-box rounded-lg bg-white p-8 text-center content-center">
            <h2>100+</h2>
            <span className="font-majallab">Ongoing Clients</span>
          </div>

          <div className="conter-box rounded-lg bg-white p-8 text-center content-center">
            <h2>99+</h2>
            <span className="font-majallab">Client Satisfaction Rate</span>
          </div>
        </div>
        </div>
      </div>

    </section>


    <section className="chart">
      <div className="container mx-auto m1-h mt-10">
      <h3 className="mb-8 text-center font-majallab">Comparison Chart</h3>
      </div>
    </section>

<section className="table-sec">
  <div className="">
  <div className="container mx-auto">
  <table className="w-full text-center">
      <tbody>
                  <tr>
                    <th className="pro" colspan="5" scope="row">PROJECT MANAGEMENT AND SUPPORT</th>
                  </tr>
                  <tr>
                    <td className="font-majallab">Dedicated Project Manager</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>100% Copyright Ownership</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td font-majallab>Paperback Author Copy</td>
                    <td>
                      3
                    </td>
                    <td>
                      5
                    </td>
                    <td>
                      7
                    </td>
                    <td>
                      10
                    </td>
                  </tr>
                  <tr>
                    <td font-majallab>Hardcover Author Copy</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      1
                    </td>
                    <td>
                    2
                    </td>
                    <td>
                      4
                    </td>
                  </tr>
                
                  <tr>
                    <th className="pro" colspan="5" scope="row" font-majallab>EDITING</th>
                  </tr>
                  <tr>
                    <td className="font-majallab">Editing &amp; Proofreading</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Typesetting &amp; Layout Adjustment</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">eBook Formatting</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">PaperBack Formatting</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Hardcover Formatting</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Publishing Platforms</td>
                    <td>
                      2
                    </td>
                    <td>
                      3
                    </td>
                    <td>
                      4
                    </td>
                    <td>
                      5
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Revisions Per Draft</td>
                    <td>
                      3 - 5
                    </td>
                    <td>
                      3 - 5
                    </td>
                    <td>
                      3 - 5
                    </td>
                    <td>
                      3 - 5
                    </td>
                  </tr>

                  <tr>
                    <th className="pro" colspan="5" scope="row" font-majallab>DESIGN</th>
                  </tr>
                  <tr>
                    <td className="font-majallab">Design Consultation</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Cover Design</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Interior Layout</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Revision Rounds</td>
                    <td>3</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Black-and-White or Full-Color Interior</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Image Insertions</td>
                    <td>10</td>
                    <td>15</td>
                    <td>20</td>
                    <td>30</td>
                  </tr>

                  <tr>
                    <th className="pro" colspan="5" scope="row" font-majallab>DISTRIBUTION</th>
                  </tr>
                  <tr>
                    <td className="font-majallab">eBook Distribution</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Paperback Format Distribution</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Hardcover Format Distribution</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Print-on-Demand Availability</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">ISBN</td>
                    <td>
                      1
                    </td>
                    <td>
                      2
                    </td>
                    <td>
                      3
                    </td>
                    <td>
                      3
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Amazon Author Central</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>


                  <tr>
                    <th className="pro" colspan="5" scope="row" font-majallab>MARKETING</th>
                  </tr>
                  <tr>
                    <td className="font-majallab">Marketing Consultation</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Custom Marketing Strategy</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Author's Dynamic Website</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      4 PAGES
                    </td>
                    <td>
                      6 PAGES
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Social Media Marketing</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      3 MONTHS
                    </td>
                    <td>
                      6 MONTHS
                    </td>
                  </tr>
                  <tr>
                    <td className="font-majallab">Search Engine Optimization</td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-plus"></i>
                    </td>
                    <td><i className="fa-solid fa-plus"></i></td>
                    <td>3 MONTHS</td>
                  </tr>
                  
                  <tr>
                    <td></td>
                    <td>
                    <a data-src="#popup-layout" href="javascript:;" className="btn-b popup-open-layout4 attr-data" data-source="Beginners Bundles">Get a Quote</a>
                    </td>
                    <td>
                      <a data-src="#popup-layout" href="javascript:;" className="btn-b popup-open-layout4 attr-data" data-source="Standard Bundles">Get a Quote</a>

                    </td>
                    <td>
                      <a data-src="#popup-layout" href="javascript:;" className="btn-b popup-open-layout4 attr-data" data-source="Expert Bundles">Get a Quote</a>

                    </td>
                    <td>
                        <a data-src="#popup-layout" href="javascript:;" className="btn-b popup-open-layout4 attr-data" data-source="Enterprise Bundles">Get a Quote</a>
                    </td>
                  </tr>
      </tbody>
    </table>
  </div>
  </div>
  </section>


<section className="story-sec py-14">
<div className="container mx-auto text-center m1-h ">
        <h3 className="mb-8 text-white font-majallab">Our Success Stories</h3>
        <p className="text-white">Explore our Success Stories to see how Pine Book Publishing has empowered authors in their self-publishing journey and stands out among self-book publishers.</p>
  </div>
</section>

<section className="faqs">
  <div className="container mx-auto m1-h">
    <h3 className="text-center pt-16 font-majallab">Looking for Answers?</h3>
    <div className="faq-que">

    </div>

    <div className="bages-pic flex items-center justify-around py-10">
        <Image src={'/images/bage2.png'} width={100} height={100}></Image>
        <Image src={'/images/bage13.png'} width={100} height={100}></Image>
        <Image src={'/images/bage3.png'} width={100} height={100}></Image>
        <Image src={'/images/bage14.png'} width={100} height={100}></Image>
        <Image src={'/images/bage4.png'} width={100} height={100}></Image>
        <Image src={'/images/bage12.png'} width={100} height={100}></Image>

    </div>
  </div>
</section>

<Swiper 
slidesPerView={3}
modules={[Autoplay]}
autoplay={{ delay: 1000 }}
>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>


<footer className="text-white body-font">
  <div className="container px-5 pt-20 pb-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-20  mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <Image src={'/images/f-logo.png'} width={250} height={200}></Image>
      </a>
      <p className="mt-2 text-sm text-white">Pine Book Publishing is a team of passionate book publishers that believe in the power of storytelling and the importance of writers' ability to tell their tales. Our streamlined process and dedicated support make book publishing service a realistic and rewarding goal for any author.</p>
    </div>

    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
     
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 font-majallab">Contact Info</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="tel:8668417469" className="text-white hover:text-white">(866) 841-7469</a>
          </li>
          <li>
            <a href="mailto:info@pinebookpublishing.com" className="text-white hover:text-white">  info@pinebookpublishing.com </a>
          </li>

        </nav>
      </div>

      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 font-majallab">Accepted Payment Methods</h2>
        <nav className="list-none mb-10">
          <li>
          <Image src={'/images/visa.webp'} width={250} height={200}></Image>
          </li>
        </nav>
        <div className="flex flex-row">
        <Image className="mr-2" src={'/images/s2.png'} width={100} height={150}></Image>
        <Image src={'/images/bage5.png'} width={100} height={200}></Image>
        </div>
      </div>

    </div>
  </div>

  <div>

    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white w-full md:text-center text-sm sm:text-left">Copyright © 2024
        <a href="https://pinebookpublishing.com/terms-and-conditions.php" rel="noopener noreferrer" className="text-white ml-1" target="_blank">Terms & Conditions |</a>
        <a href="https://pinebookpublishing.com/privacy-policy.php" rel="noopener noreferrer" className="text-white ml-1" target="_blank">Privacy Policy</a>
      </p>
    </div>
    
  </div>
</footer>

    </main>
  );
}


