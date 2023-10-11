import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us",
  alternates: {
    canonical: `/about`,
  },
  keywords: ["Awin"],
}

export default function About() {
  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- About-box --> */}
              <div className="about-box">
                <div className="title-section">
                  <h1>About Us</h1>
                </div>
                <div className="about-image">
                  <Image
                    src="/images/logo.png"
                    fill
                    sizes="100vw"
                    alt="logo"
                    priority
                  />
                </div>

                <p>
                  Welcome to SportsLigue.com, your ultimate destination for the
                  latest and most comprehensive sports news and updates! As avid
                  sports enthusiasts ourselves, we understand the thrill and
                  excitement that comes with being a part of the sports world.
                  Whether you are a die-hard fan or a casual observer, our goal
                  is to provide you with an unmatched sports news experience
                  that keeps you informed, engaged, and entertained.
                </p>

                <p>
                  At SportsLigue.com, we pride ourselves on delivering real-time
                  and in-depth coverage of a wide range of sports, including
                  football, basketball, soccer, tennis, cricket, and more. Our
                  team Awin of experienced and passionate sports journalists
                  works tirelessly to bring you the most accurate and up-to-date
                  information from around the globe.
                </p>

                <p>
                  From game highlights and player interviews to transfer rumors
                  and expert analysis, we strive to keep you at the forefront of
                  the sporting action. Whether it&apos;s the latest scores,
                  breaking news, or exclusive interviews with your favorite
                  athletes, you can count on SportsLigue.com to be your go-to
                  source for all things sports-related.
                </p>

                <p>
                  In addition to our comprehensive news coverage, we also offer
                  engaging features, editorials, and opinion pieces that spark
                  discussions and debates among sports enthusiasts like you. We
                  encourage our readers to be active participants in the
                  sporting world and share their thoughts and insights in our
                  interactive community.
                </p>

                <p>
                  Join us on this thrilling sports journey as we celebrate the
                  victories, analyze the strategies, and share in the passion
                  that unites sports fans worldwide. At SportsLigue.com, we live
                  and breathe sports, and we can&apos;t wait to share that
                  passion with you. Let&apos;s stay connected, informed, and
                  entertained as we dive into the exhilarating world of sports
                  together!
                </p>
              </div>
              {/* <!-- End About-box --> */}

              {/* <!-- team-box --> */}
              {/* <div className="team-box">
							<div className="title-section">
								<h1>Our Team</h1>
							</div>
							<div className="row">
								<div className="col-md-4">
									<img src="upload/others/mem3.jpg" alt="">
									<h2>John Doe</h2>
									<span>Ceo / Founder</span>
								</div>
								<div className="col-md-4">
									<img src="upload/others/mem1.jpg" alt="">
									<h2>Michael Origon</h2>
									<span>Journalis</span>
								</div>
								<div className="col-md-4">
									<img src="upload/others/mem2.jpg" alt="">
									<h2>Teddy Bronkiacis</h2>
									<span>Marketing Menager</span>
								</div>
							</div>
						</div> */}
              {/* <!-- End team-box --> */}
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
