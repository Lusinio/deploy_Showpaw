import React from 'react'

/**
* @author
* @function Video
**/

const Video = (props) => {
  return(
	<section className="wrapper style2">
  <div className="inner">
    <header>
      <h2>Etiam veroeros lorem</h2>
      <p>Fusce fringilla enim sit amet lectus sollicitudin, eu tincidunt odio semper.</p>
    </header>
    {/* Tabbed Video Section */}
    <div className="flex flex-tabs">
      <ul className="tab-list">
        <li><a href="#" data-tab="tab-1" className="active">Duis vestibulum tellus</a></li>
        <li><a href="#" data-tab="tab-2">Quam tempus sodales ipsum</a></li>
        <li><a href="#" data-tab="tab-3">Donec faucibus risus cursus</a></li>
      </ul>
      <div className="tabs">
        {/* Tab 1 */}
        <div className="tab tab-1 flex flex-3 active">


          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic01.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>

          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic02.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic03.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>


          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic04.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>


          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic05.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>


          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic06.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
        </div>





        {/* Tab 2 */}
        <div className="tab tab-2 flex flex-3">
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic06.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic05.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic04.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic03.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic02.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic01.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
        </div>
        {/* Tab 3 */}
        <div className="tab tab-3 flex flex-3">
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic03.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic02.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic01.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic06.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic05.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
          {/* Video Thumbnail */}
          <div className="video col-md-4">
            <div className="image fit">
              <img src="images/pic04.jpg" alt />
              <div className="arrow">
                <div className="icon fa-play" />
              </div>
            </div>
            <a href="generic.html" className="link"><span>Click Me</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   )

 }

export default Video