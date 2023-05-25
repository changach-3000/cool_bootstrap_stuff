import React from 'react'

function Glass() {
  return (
    <div>
        <div class="container">
      <div class="imgbox">
        <img src="./jane_doe.jpg" alt="profile" />
      </div>
      <div class="intro-text">
        <h1>Jane Doe</h1>
        <p>New York, USA</p>
      </div>
      <span>front-End developer & graphic designer</span>
      <div class="btn-group">
        <button>Message</button>
        <button>Following</button>
      </div>
      <div class="social-links">
        <button>
          <i class="fa-brands fa-facebook-f"></i>
        </button>
        <button>
          <i class="fa-brands fa-twitter"></i>
        </button>
        <button>
          <i class="fa-brands fa-pinterest"></i>
        </button>
        <button>
          <i class="fa-brands fa-instagram"></i>
        </button>
      </div>
    </div>

    <div class="blob"></div>
    </div>
  )
}

export default Glass