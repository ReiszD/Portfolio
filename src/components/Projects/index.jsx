import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/pingup-clone.png"
import work2 from "../../assets/Images/agency.ai-home.png"
import work3 from "../../assets/Images/netflix-clone.png"
import work4 from "../../assets/Images/search-api.png"
import work5 from "../../assets/Images/e-commerce.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "PingUp",
      year: "2025",
      img: work1,
      title: "Share your Life Stories. Generationally.",
      detail: "Engineered a fully functional social media clone with real-time chat and messaging, post & feed system to share text or image-based content, follow/unfollow capabilites, friend request management, story status and uploads, and discovery page to search for new users.",
    },
    {
      client: "Agency.AI",
      year: "2025",
      img: work2,
      title: "Next generation Web Management System.",
      detail: "Built a modern Digital Agency website with animations, fully functional contact form allowing the customer to submit it for the admit to receive customer query with Email ID.",
    },
    {
      client: "Netflix Clone",
      year: "2025",
      img: work3,
      title: "Recreating Netflix TV Search.",
      detail: "Engineered & integrated a tv show database with a fully responsive design to match Netflix layout including various sections for top-rated, newly released, popular shows, Netflix loading state, scroll carousel, dynamic routing to show trailers for specific tv shows, sign-up and login page to store users data in Firebase.",
    },
    {
      client: "Search API Database",
      year: "2025",
      img: work4,
      title: "Search your Favorite Movies. Generationally.",
      detail: "Engineered & integrated a search API for movies with a fully responsive design, loading states & dynamic routing to showcase end users movies on a mass level search and showcase movies on an individual route.",
    },
    {
      client: "E-Commerce Library",
      year: "2025",
      img: work5,
      title: "Next generation Web Management System.",
      detail: "Built a modern E-Commerce website with a fully integrated library including individual book with book recommendations and add to cart and checkout function.",
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
