import Footer from './components/footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import { Hanken_Grotesk } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: '800' })

export default function Home() {
  return (
    <div className={hankenGrotesk.className}>
      <section id="landing" className="landing flex h-[100vh] min-h-[800px] relative justify-center items-center">
        <div className="content">
          <ul className='text-center flex flex-col justify-center items-center'>
            <div className="absolute top-14 w-screen">
              <div className="justify-center items-center flex relative md:h-16 h-12 opacity-100 hover:opacity-80">
                <Link href="/">
                  <Image
                    src="/textLogoWhite.svg"
                    alt="logo"
                    className="focus:border-none active:border-none"
                    fill={true}
                  />
                </Link>
              </div>
            </div>
            <h1 className="landing-text hidden xs:flex m-auto font-waterfall font-normal text-3xl md:text-4xl text-white font-bold md:mt-10">
              An all-nighter with a bunch of musicians.
            </h1>
            <h1 className="landing-text xs:hidden flex m-auto font-waterfall font-normal text-3xl md:text-4xl text-white font-bold md:mt-10">
              An all-nighter with <br /> a bunch of musicians.
            </h1>
            <div className={montserrat.className}>
              <h1 className="landing-text flex m-auto font-waterfall text-7xl lg:text-8xl xl:text-9xl text-white font-black md:max-w-[80vw] max-w-[90vw] drop-shadow-[0_10px_0_#4824b3]">HELP US MAKE IT HAPPEN.</h1>
            </div>
            <a href="/#tiers">
              <button className="bg-audiofeudpurpledark text-xl sm:text-2xl md:text-3xl font-normal text-white font-bold px-[50px] py-6 my-[40px] rounded-full" type="submit">Learn More</button>
            </a>
          </ul>
        </div>
      </section>
      <section className="about min-h-[800px] h-fit">
        <h1 className="pt-12 text-center text-audiofeudpurple font-extrabold font-waterfall lg:text-6xl md:text-5xl sm:text-5xl text-4xl">Our Mission</h1>
        <div className="flex flex-col items-center justify-center py-4">
          <p className="max-w-4xl text-center text-audiofeudpurple md:text-xl sm:text-lg text-medium px-4 py-4">
            After-school jam sessions have become a thing of the past. As of 2023, kids are heading out of the garage and into their bedrooms to make music on their laptops instead. But the vast majority of these young musicians operate alone, lack access to quality equipment, and don’t share their work. Our goal as an organization is to take a flamethrower to these hurdles and build community, confidence, and real opportunities for the next generation of music.
          </p>
          <p className="max-w-4xl text-center text-audiofeudpurple md:text-xl sm:text-lg text-medium px-4 py-4">
            So, we’re launching an overnight, in-person event where high schoolers and eligible college students will compete to create an original song from scratch in 24 hours. They’ll have the chance to network and collaborate before presenting in front of peers and a set of qualified judges for the chance to win money and vital sound engineering equipment. <b>This is the first time to our knowledge that anything like this has been done.</b> To make this work, we need to collaborate with like-minded, forward-looking companies to help inspire young musicians and create lifelong customers. Help us make Audiofeud happen.
          </p>
        </div>
        {/*<ul className="justify-center h-auto flex-wrap flex mt-2 mb-2 items-center">
          <div className="flex-col justify-center rounded-full mx-[2vw] mt-10 mb-[50px] h-[300px]">
            <div className="relative h-[200px] w-[250px]">
              <Image
                src="/waves.svg"
                width={200}
                height={200}
                alt="placeholder icon"
                className="opacity-30"
              />
              <h1 className="absolute bottom-[10px] right-0 text-9xl text-audiofeudpurple font-black">69</h1>
            </div>
            <p className="max-w-[250px] text-center text-audiofeudpurple text-xl">this is a little bit of filler text. stay put for a sexy caption.</p>
          </div>
          <div className="flex-col justify-center rounded-full mx-[2vw] mt-10 mb-[50px] h-[300px]">
            <div className="relative h-[200px] w-[250px]">
              <Image
                src="/waves.svg"
                width={200}
                height={200}
                alt="placeholder icon"
                className="opacity-30"
              />
              <h1 className="absolute bottom-[10px] right-0 text-9xl text-audiofeudpurple font-black">69</h1>
            </div>
            <p className="max-w-[250px] text-center text-audiofeudpurple text-xl">this is a little bit of filler text. stay put for a sexy caption. make that four lines.</p>
          </div>
          <div className="flex-col justify-center rounded-full mx-[2vw] mt-10 mb-[50px] h-[300px]">
            <div className="relative h-[200px] w-[250px]">
              <Image
                src="/waves.svg"
                width={200}
                height={200}
                alt="placeholder icon"
                className="opacity-30"
              />
              <h1 className="absolute bottom-[10px] right-0 text-9xl text-audiofeudpurple font-black">69</h1>
            </div>
            <p className="max-w-[250px] text-center text-audiofeudpurple text-xl">this is a little bit of filler text. stay put for a sexy caption.</p>
          </div>
  </ul>*/}
      </section>
      <section id="team" className="relative team min-h-[500px] h-fit bg-audiofeudpurple">
        <div className="custom-shape-divider-top-1692368077">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1692368260">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
        <h1 className="pt-36 text-center text-white font-extrabold font-waterfall lg:text-6xl md:text-5xl sm:text-5xl text-4xl">Organizers</h1>
        <ul className="justify-center h-auto flex-wrap flex mt-2 mb-2 items-center pb-36">
          <div className="flex-col justify-center rounded-full mx-[2vw] mt-8 h-[400px]">
            <a href="https://www.linkedin.com/in/soorya-ignatius" target='blank' className="group">
              <Image
                src="/soorya.png"
                width={250}
                height={250}
                alt="a picture of Soorya"
                className="picture rounded-full border-[14px] border-white hover:border-double"
              />
              <h1 className="max-w-[250px] text-white font-bold text-2xl text-center mt-3.5 hover:underline decoration-wavy">Soorya Ignatius</h1>
              <h1 className="max-w-[250px] text-white text-center">Founder + Executive Director</h1>
            </a>
          </div>
          <div className="flex-col justify-center rounded-full mx-[2vw] mt-8 h-[400px]">
            <a href="https://www.linkedin.com/in/atharv-deshmukh" target='blank' className="group">
              <Image
                src="/atharv.png"
                width={250}
                height={250}
                alt="a picture of Atharv"
                className="picture rounded-full border-[14px] border-white hover:border-double"
              />
              <h1 className="max-w-[250px] text-white font-bold text-2xl text-center mt-3.5 hover:underline decoration-wavy">Atharv Deshmukh</h1>
              <h1 className="max-w-[250px] text-white text-center">Co-Founder + Director of Technology</h1>
            </a>
          </div>
          <div className="flex-col justify-center rounded-full mx-[2vw] mt-8 h-[400px]">
            <a href="https://www.linkedin.com/in/sakthi-thayumanavan-83a069241/" target='blank' className="group">
              <Image
                src="/sakthi.png"
                width={250}
                height={250}
                alt="a picture of Sakthi"
                className="picture rounded-full border-[14px] border-white hover:border-double"
              />
              <h1 className="max-w-[250px] text-white font-bold text-2xl text-center mt-3.5 hover:underline decoration-wavy">Sakthi Thayumanavan</h1>
              <h1 className="max-w-[250px] text-white text-center">Director of Outreach</h1>
            </a>
          </div>
        </ul>
      </section>
      <section id="tiers" className="info min-h-[800px] h-fit">
        <h1 className="pt-24 text-center text-audiofeudpurple font-extrabold font-waterfall lg:text-6xl md:text-5xl sm:text-5xl text-4xl">Sponsorship Tiers</h1>
        <div className="flex justify-center">
          <p className="text-center max-w-4xl text-audiofeudpurple md:text-xl sm:text-large text-medium px-4 py-4">Believe in our message? Feel inspired to help us out? Simply want your name on a t-shirt for some publicity? Select the package that&apos;s best for you and your company.*</p>
        </div>
        <ul className="justify-center h-auto flex-wrap flex mt-2 mb-2 items-center">
          <div className="relative tier h-[450px] bg-white rounded-[20px] mx-[2vw] min-w-[280px] w-[280px] my-2 border-2 border-audiofeudpurple drop-shadow-[0_0_0_#4824b3] transition duration-300 ease-in-out hover:drop-shadow-[-10px_10px_0_#4824b3]">
            <ul className="absolute top-[15px] left-[15px] right-[15px]">
              <h1 className="text-audiofeudpurpledark text-2xl font-bold">Bronze</h1>
              <p className="text-audiofeudpurpledark">$600</p>
              <br />
              <div className="w-full bg-audiofeudpurple h-[2px] mt-[11.5px]"></div>
              <div className="flex mt-[20px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Have your logo on our volunteer t-shirts.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Display your logo on our website.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Give out your company swag.</p>
              </div>
            </ul>
            <div className="absolute bottom-[15px] left-[15px] right-[15px] ">
              <a href='mailto:team@audiofeud.com?subject=Bronze%20Sponsorship%20Inquiry%20from%20%5BSponsor%20Name%20Here%5D&body=I%27m%20interested%20in%20potentially%20working%20with%20Audiofeud%20as%20a%20Bronze%20Sponsor.%20Tell%20me%20more%2E%0D%0A%0D%0AThanks%2C%0D%0A%5BYour%20name%20here%5D' target='blank'>
                <button className="bg-audiofeudpurpledark text-base font-normal text-white font-bold py-[10px] w-full rounded-full" type="submit">Get Started</button>
              </a>
            </div>
          </div>
          <div className="relative tier h-[450px] bg-white rounded-[20px] mx-[2vw] min-w-[280px] w-[280px] my-2 border-2 border-audiofeudpurple drop-shadow-[0_0_0_#4824b3] transition duration-300 ease-in-out hover:drop-shadow-[-10px_10px_0_#4824b3]">
            <ul className="absolute top-[15px] left-[15px] right-[15px]">
              <h1 className="text-audiofeudpurpledark text-2xl font-bold">Silver</h1>
              <p className="text-audiofeudpurpledark">$1.2k</p>
              <p className="text-sm text-audiofeudpurpledark opacity-70">*benefits from previous tier stack</p>
              <div className="w-full bg-audiofeudpurple h-[2px] mt-[15px]"></div>
              <div className="flex mt-[20px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Set up a sponsor table or booth at our event.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Promote and provide special offerings to sell your products or services.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Send expert mentors from your company.</p>
              </div>
            </ul>
            <div className="absolute bottom-[15px] left-[15px] right-[15px] ">
              <a href='mailto:team@audiofeud.com?subject=Silver%20Sponsorship%20Inquiry%20from%20%5BSponsor%20Name%20Here%5D&body=I%27m%20interested%20in%20potentially%20working%20with%20Audiofeud%20as%20a%20Silver%20Sponsor.%20Tell%20me%20more%2E%0D%0A%0D%0AThanks%2C%0D%0A%5BYour%20name%20here%5D' target='blank'>
                <button className="bg-audiofeudpurpledark text-base font-normal text-white font-bold py-[10px] w-full rounded-full" type="submit">Get Started</button>
              </a>
            </div>
          </div>
          <div className="relative tier h-[450px] bg-white rounded-[20px] mx-[2vw] min-w-[280px] w-[280px] my-2 border-2 border-audiofeudpurple drop-shadow-[0_0_0_#4824b3] transition duration-300 ease-in-out hover:drop-shadow-[-10px_10px_0_#4824b3]">
            <ul className="absolute top-[15px] left-[15px] right-[15px]">
              <h1 className="text-audiofeudpurpledark text-2xl font-bold">Gold</h1>
              <p className="text-audiofeudpurpledark">$3k</p>
              <p className="text-sm text-audiofeudpurpledark opacity-70">*benefits from previous tier stack</p>
              <div className="w-full bg-audiofeudpurple h-[2px] mt-[15px]"></div>
              <div className="flex mt-[20px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Give a 5 minute presentation about your product or service.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">A reserved position to appoint a judge of your choice.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Set up a company-sponsored workshop or side event.</p>
              </div>
            </ul>
            <div className="absolute bottom-[15px] left-[15px] right-[15px] ">
              <a href='mailto:team@audiofeud.com?subject=Gold%20Sponsorship%20Inquiry%20from%20%5BSponsor%20Name%20Here%5D&body=I%27m%20interested%20in%20potentially%20working%20with%20Audiofeud%20as%20a%20Gold%20Sponsor.%20Tell%20me%20more%2E%0D%0A%0D%0AThanks%2C%0D%0A%5BYour%20name%20here%5D' target='blank'>
                <button className="bg-audiofeudpurpledark text-base font-normal text-white font-bold py-[10px] w-full rounded-full" type="submit">Get Started</button>
              </a>
            </div>
          </div>
          <div className="relative tier h-[450px] bg-white rounded-[20px] mx-[2vw] min-w-[280px] w-[280px] my-2 border-2 border-audiofeudpurple drop-shadow-[0_0_0_#4824b3] transition duration-300 ease-in-out hover:drop-shadow-[-10px_10px_0_#4824b3]">
            <ul className="absolute top-[15px] left-[15px] right-[15px]">
              <h1 className="text-audiofeudpurpledark text-2xl font-bold">Partner</h1>
              <p className="text-audiofeudpurpledark">$5k</p>
              <p className="text-sm text-audiofeudpurpledark opacity-70">*benefits from previous tier stack</p>
              <div className="w-full bg-audiofeudpurple h-[2px] mt-[15px]"></div>
              <div className="flex mt-[20px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Have your logo on our organizer hoodies.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">Give a presentation at our award ceremony.</p>
              </div>
              <div className="flex mt-[5px] mb-[5px] text-audiofeudpurpledark">
                <svg fill="#34b233" className="flex-none mt-[3px] mr-[10px]" width="18" height="18" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><polygon points="35.5,69.2 12.7,46.5 5.5,53.8 35.5,83.8 95.5,23.8 88.2,16.5 " /></svg>
                <p className="flex-initial">A custom, company sponsored award with a prize of your choice.</p>
              </div>
            </ul>
            <div className="absolute bottom-[15px] left-[15px] right-[15px] ">
              <a href='mailto:team@audiofeud.com?subject=Partnership%20Inquiry%20from%20%5BSponsor%20Name%20Here%5D&body=I%27m%20interested%20in%20potentially%20working%20with%20Audiofeud%20as%20a%20Partner.%20Tell%20me%20more%2E%0D%0A%0D%0AThanks%2C%0D%0A%5BYour%20name%20here%5D' target='blank'>
                <button className="bg-audiofeudpurpledark text-base font-normal text-white font-bold py-[10px] w-full rounded-full" type="submit">Get Started</button>
              </a>
            </div>
          </div>
        </ul>
        <div className="flex justify-center pb-24">
          <p className="text-center max-w-4xl text-audiofeudpurple md:text-base text-sm px-4 py-4">*All offers are negotiable and customizable. Talk to us at <a href="mailto:team@audiofeud.com" target='blank' className="hover:underline decoration-wavy">team@audiofeud.com</a>!</p>
        </div>
      </section>
      <section id="message" className="message flex justify-center items-center h-[300px] bg-audiofeudpurple">
        <div className="content text-center">
          <h1 className="text-white font-extrabold font-waterfall lg:text-6xl md:text-5xl sm:text-4xl text-3xl">All ready to sponsor us?</h1>
          <h1 className="text-white font-light lg:text-4xl md:text-3xl sm:text-2xl text-xl px-8">Reach us at <a href="mailto:team@audiofeud.com" target='blank' className="hover:underline decoration-wavy">team@audiofeud.com</a> for a fast response.</h1>
        </div>
      </section>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
