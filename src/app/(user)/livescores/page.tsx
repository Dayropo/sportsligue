import React from "react"
import Header from "@/src/components/ui/Header"
import Footer from "@/src/components/ui/Footer"
import Scores from "@/src/components/livescores/Scores"

export default async function Livescores() {
  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Scores />
            </div>

            <div className="col-lg-4 sidebar-sticky"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
