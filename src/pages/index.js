import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <header className="mt-12 max-w-5xl mx-auto">
      <div className="logo relative max-w-3xl mx-auto px-8 md:px-4 lg:px-0">
        <StaticImage
          src="../images/logo.png"
          loading="eager"
          quality={80}
          formats={["auto", "webp", "avif"]}
          alt="Dubai Healthcare City"
        />
        <span className="uppercase block tracking-widest text-gray-500 font-semibold  md:absolute md:right-4 lg:right-0 bottom-0">
          H1 | 2022 EDITION
        </span>
      </div>
      <div className="mx-auto relative mt-8 aspect-video">
        <StaticImage
          src="../images/hero-image.jpg"
          loading="eager"
          quality={80}
          formats={["auto", "webp", "avif"]}
          alt="Dubai Healthcare City Team"
          className="!absolute inset-0"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-12 md:px-8 lg:px-0">
        <h3 className="text-3xl md:text-5xl font-bold text-gray-400 shrink-0">
          ARAB HEALTH
        </h3>
        <div className="hidden md:block md:w-[2px] bg-gray-400 md:mx-4 md:self-stretch my-2 md:my-0 ">
          &nbsp;
        </div>
        <h5 className="text-base text-center md:text-left md:text-3xl ">
          DHCC WELCOMES TWO NEW WORLD-LEADING ARAB HEALTH HOSPITALS TO ITS
          COMMUNITY
        </h5>
      </div>
    </header>
    <section id="our-message" className="mt-16 px-8 md:px-12 lg:px-16 mb-16">
      <header className="flex md:flex-row items-center md:items-start">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold shrink-0 md:shrink">
          OUR MESSAGE
        </h3>
        <div className="h-[2px] md:h-[4px] bg-gray-500 w-full ml-4 md:ml-0">
          &nbsp;
        </div>
      </header>
      <div className="grid grid-cols-6 md:gap-x-12 lg:gap-x-24 gap-y-16 md:gap-y-0 mt-8">
        <div className="col-span-6 md:col-span-3 lg:col-span-2 relative">
          <figure>
            <blockquote>
              <svg
                className="h-8 md:h-16 text-gray-500 "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
              </svg>
              <p className="text-2xl text-gray-500 font-light leading-normal mt-2">
                Given the challenges we have all faced during the past couple of
                years,{" "}
                <strong>
                  we must look with pride at the achievements of Dubai and the
                  UAE in navigating the continually evolving situation.
                </strong>
              </p>
              <p>
                However, it is equally important to look ahead, and at Dubai
                Healthcare City our future aspirations are guided by
                forward-thinking leadership and a strong desire to enhance the
                reputation of our free zone as the destination for healthcare
                investments.
              </p>
              <p>
                An indicator of this vision is the launch of C37, our private
                medical workspace catering to visiting overseas doctors and
                UAE-based physicians seeking a private space for independent
                work. The project aligns perfectly with our goal of promoting
                Dubai as a world-leading international healthcare hub, and we
                already have some of the world's best medical talents taking
                temporary residence.
              </p>
            </blockquote>
            <div className="text-center md:text-left mx-auto mt-12">
              <StaticImage
                src="../images/jamal-ceo.jpg"
                loading="eager"
                quality={80}
                formats={["auto", "webp", "avif"]}
                alt="Jamal Abdulsalam, CEO, Dubai Healthcare City Authority"
                className="w-2/3 lg:!hidden"
              />
              <figcaption className="mt-2 md:mt-8 text-xl md:text-2xl font-semibold">
                JAMAL ABDULSALAM
                <br />
                CEO,
                <br />
                Dubai Healthcare City Authority
              </figcaption>
            </div>
          </figure>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <p>
            Another key milestone in 2021 was the launch of DHCX, a specially
            curated, inclusive business centre designed to enable healthcare
            companies to accelerate growth by giving local and international
            SMEs, start-ups, and freelancers access to a sector-focused business
            network. Meanwhile, we have continued our commitment to contribute
            to the UAE's Government objective of empowering Emirati talents,
            with the launch of our Masari training programme.
          </p>
          <p>
            Focused on improving the level of information technology (IT),
            marketing, communications, and finance professionals in our
            industry, Masari will contribute to the UAE's goal of increasing the
            Emirati workforce and ensuring DHCC continues to attract the world's
            leading prospects. We are already seeing our young Emirati trainees
            excelling in their roles.
          </p>
          <p>
            We have started 2022 on a positive note with the signing of
            agreements with Prime Healthcare Group and South Korea's leading
            healthcare group, Asan Medical Centre, which will result in two new
            hospitals added as part of our Phase Two expansion, bringing more
            world-leading healthcare services to Dubai.
          </p>
          <p>
            I would like to express my gratitude to everyone for their
            continuous support and hard work, which enables us to grow, reach
            new heights and drive growth across our ecosystem.
          </p>
        </div>
        <div className="lg:col-span-2 relative hidden lg:grid">
          <StaticImage
            src="../images/jamal-ceo.jpg"
            loading="eager"
            quality={80}
            formats={["auto", "webp", "avif"]}
            alt="Jamal Abdulsalam, CEO, Dubai Healthcare City Authority"
            className="!absolute right-0 transform scale-125 z-10"
          />
        </div>
      </div>
      <div className="h-[2px] md:h-[4px] w-full bg-gray-500">&nbsp;</div>
    </section>
    <footer className="fixed bottom-0 w-screen">
      <span className="block text-sm text-gray-600 w-full py-2 md:py-4 px-8 md:px-12 lg:px-16 bg-white">
        DHCC <span className="px-2">|</span>H1<span className="px-2">|</span>
        2022 EDITION
      </span>
    </footer>
  </>
)

export default IndexPage
