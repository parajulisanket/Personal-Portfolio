import React from 'react'
import "./blog.css"
import review from "../../assests/review.png"
import tutorial from "../../assests/tutorial.png"
import business from "../../assests/business.png"
// import work2 from ".

const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href=""><span className="blog__category">Reviews</span></a>
            <a href=""><img src={review} alt="" className='blog__img'/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">5 Best App Developments Tools for Your Projects</h3>
            <div className="blog__meta">
              <span>09 February, 2023</span>
              <spna className="blog__dot"></spna>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href=""><span className="blog__category">Tutorial</span></a>
            <a href=""><img src={tutorial} alt="" className='blog__img'/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              <span>20 August, 2023</span>
              <spna className="blog__dot"></spna>
              <span>John</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href=""><span className="blog__category">Business</span></a>
            <a href=""><img src={business} alt="" className='blog__img'/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">5 Things to know about startup Business</h3>
            <div className="blog__meta">
              <span>30 February, 2024</span>
              <spna className="blog__dot"></spna>
              <span>Rock</span>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Blog