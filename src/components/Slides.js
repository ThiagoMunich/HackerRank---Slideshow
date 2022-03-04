import React, { useState } from "react"

function Slides({ slides }) {
  const [slide, setSlide] = useState(slides[0])

  const currentIndex = slides.indexOf(slide)
  const nextIndex = currentIndex + 1
  const prevIndex = currentIndex - 1

  const nextSlide = () => {
    setSlide(slides[nextIndex])
  }

  const prevSlide = () => {
    setSlide(slides[prevIndex])
  }

  const restartSlides = () => {
    setSlide(slides[0])
  }

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={restartSlides}
          className="small outlined"
          data-testid="button-restart"
          disabled={currentIndex === 0}
        >
          Restart
        </button>
        <button
          className="small"
          onClick={prevSlide}
          data-testid="button-prev"
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          className="small"
          onClick={nextSlide}
          data-testid="button-next"
          disabled={nextIndex === slides.length}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slide.title}</h1>
        <p data-testid="text">{slide.text}</p>
      </div>
    </div>
  )
}

export default Slides
