import axios from "axios";
import { useEffect, useState } from "react";
import "./MoviePage.css";
export function MoviePage() {
  const [language, setLanguage] = useState(false);
  const [genre,setGenre] = useState(false);
  const [format,setFormat] = useState(false);
  const [data,setData] = useState([]);
  const [show,setShow] = useState(false);
  var languages = ["Hindi","English","Tollywood","Punjabi","Bhojpuri","Japanese","Korean"];
    var genres = ["Drama","Comedy","Action","Romantic","Crime","Thriller","Adventure","Family","SciFi"]
    var formats = ["2D","3D","4DX3D","MX4D 3D","3D SCREEN X","IMAX 2D","IMAX 3D"]
  useEffect(() => {
    console.log("higet")
    getData()
    console.log("hidata")
  }, [])

  function getData(){
    console.log("hi")
    axios.get("http://localhost:3006/movies")
    .then((res)=>{
      console.log(res.data);
    setData(res.data)
    setShow(true)
    })
  }
  return (
    <div>
      <div className="displayMovies">
        <div className="leftFilters">
          Filters
          <div className="languageFilters">
            <div onClick ={()=> setLanguage(!language)} className="languageUpper"> 
            <div>^</div>
            <div> Languages</div>
            <div>clear</div>
           
            </div>
           {!language?null: <div className="languageUpper">
              {languages.map(el=><span key={el} className="namesMovieLanguage">{el}</span>)}
           </div>}
          </div>

          <div className="languageFilters">
            <div onClick ={()=> setGenre(!genre)} className="languageUpper">Genre</div>
           {!genre?null: <div className="languageUpper"> 
            {genres.map(el=><span key={el} className="namesMovieLanguage">{el}</span>)}
           </div>}
          </div>

          <div className="languageFilters">
            <div onClick ={()=> setFormat(!format)} className="languageUpper">Format</div>
           {!format?null: <div className="languageUpper">
           {formats.map(el=><span key={el} className="namesMovieLanguage">{el}</span>)}
           </div>}
          </div>
        </div>

        <div className="rightMovies">
          Movies in Bengaluru
          <div className="rightMoviesBelow">
          {languages.map(el=><span key={el}
          className="moviesNName">{el}</span>)}
           
          </div>
          <div className="rightMoviesComponent">
          <div className="moviesComponent1">Coming Soon</div>
            <div className="moviesComponent2">Explore Upcoming Movies</div>
          </div>


          <div>{!show?null:<div className="gridContainer">
            {
              data.map(el=><div> 
                <img className="imagePara" src={el.img_url}></img>
                <p className="titlePara">{el.title}</p>
                <p className="certificatePara">{el.certificate}</p>
                <p className="certificatePara">{el.language}</p>

                
              </div>)
            }
            
            </div>}

          </div>
          
        </div>
      </div>

      {/*------------------- Discriptions ----------------------------------*/}
      <div className="outBox">
        <div className="enjoyBox">
          Enjoy Online Ticket Booking for Movies in Bengaluru With BookMyShow
        </div>
        <div className="paraPlanning">
          If you are planning for movie ticket bookings for the latest movies in
          Prayagraj (Allahabad), don't look any Mother. Now it is easy to get on
          with =line ticket booking with BookMyShow. Your one-stop solution for
          movies to watch this weekend Everyone enjoys watching their favourite
          movies on the big screen, and the excitement of watching them with
          friends is unparalleled. If you have been eagerly waiting for a movie
          Mat you can watch with your friends and family, now you know where to
          get the tickets from. When you watch a film in a cinema theatre, you
          get tow.. it on a massive screen with surround. sound and that
          enhances your movie-watching experience. Thus, allowing you to be a
          part of the actual movie. Get to know about all movies and movie
          trailers to watch here. Also, know bow. hook movie tickets.
        </div>

        <div>
          <div className="ticketsBook">
            Latest Movies To Watch in Prayagraj (Allahabad) With Family And
            Friends
          </div>
          <div className="paraPlanning">
            Each year the cinema world is enlightened with the laMst movie
            trailers, increasing 'a...me. among .eryone. This year, lust like Me
            Previous Year, Yc.0 have been waiting for some of the b,ngest
            BollYwood movMs to be released with the biggest star cast. Enjoy
            your favourite movie, not Just with your friends, but in a cinema
            ball Prayagraj (Allahabad) that will be filled with like.rninded
            people. Be a part of everyone's reaction. Dates are already
            announced, and all you need to do is book the tickets for the
            preferred date so that you dont end up missing Me first-day first
            show, Don't worry we have Me list of shows near you and movie
            showtimes.
          </div>
        </div>

        <div>
          <div className="ticketsBook">
            Upcoming Hollywood Movies That You Can't-Miss
          </div>
          <div className="paraPlanning">
            Have you checked oN the latest movie reviews of some of the best
            Hollywood movies, if so, we het you would want to watch Mem all in
            the nearest movie theatre The Holl,00d movies running in cinemas now
            are already making the audience waMMr more, and witb the new
            releases happening in Me corning months, we recommend booking Me
            tickets now in Prayagraj (Allhabad).
          </div>
        </div>

        <div>
          <div className="ticketsBook">Exciting, ToIlywood Movies To Watch</div>
          <div className="paraPlanning">
            Tollywood seems to have a few good movie sbmviimes as well. You can
            plan for movies to watch this Friday with these Tollywood movies
            because the star cast is superb, and Me storylines of Mese movies
            have already started making news. Dont miss any upcoming movies
          </div>
        </div>

        <div>
          <div className="ticketsBook">
            The Joy Of Movie Tickets Bookings with Just a Few Clicks
          </div>
          <div className="paraPlanning">
            Grab on your popcorn because there are many movies to watch today in
            Prayagraj (Allahabad). If you want. save some money, dont miss out
            on our movie offers and discounts. Check out the movies running in
            cinemas-time, and call all your friends to enjoy Me best
            movie.watching experience together There are many big releases in Me
            pipeline, and it is expected Mat these movies will have Me perfect
            casting and direction Get ready for upcoming movies in theatres
            Bon,. anymore and book your movie tickets from BookMyShow today at
            the best price! Your access to your favourite movie in Prayagraj
            (Mlahnhad) is only a click away!
          </div>
        </div>
      </div>
    </div>
  );
}