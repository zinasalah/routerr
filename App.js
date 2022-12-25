
import './App.css';
import './Style.css';
import { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Trailer from './Trailer';
import { Routes, Route, NavLink } from 'react-router-dom';




function App() {
  const [list, setList] = useState([
    {
      name: "TOM and JERRY Cowboy Up!",
      poster: "https://i.pinimg.com/564x/d9/24/c6/d924c6103ec1d01637f2c2ba9fb5a636.jpg",
      description: "The film finds the duo in the Wild West where they help save a ranch from the hands of a villain. The rivals team up to help a cowgirl and her brother save their homestead from a greedy land-grabber.",
      traile: "https://www.youtube.com/embed/jnzDRZTadAo",
      rate: 5,
      id: 1
    },
    {
      name: "Vaillante",
      poster: "https://media.services.cinergy.ch/media/box1600/2a6980cd30a8d549eb5459c88a7e75c02c898381.jpg",
      description: "Since she was a child, Georgia Nolan has had only one ambition: to become a firefighter like her father! Unfortunately, in New York in 1932, women were not allowed to practice this profession. When the city's firefighters disappear one-by-one in mysterious fires in Broadway theaters, Georgia sees a golden opportunity: she disguises herself as a man and joins the team of rookie firefighters tasked with stopping the arsonist! This is the beginning of an adventure as hilarious as it is breathtaking!",
      traile: "https://www.youtube.com/embed/2kqLbCKuGto",
      rate: "3",
      id: 2
    },
    {
      name: "Les BAD GUYS",
      poster: "https://www.ecranlarge.com/uploads/image/001/425/pwp4upxfq0sikunhp51grnwyuev-781.jpg",
      description: "After a lifetime of legendary heists, notary criminals Mr. Wolf, Mr. Snake, Mr. Shark and Mrs. Tarantula are finally captured. To avoid jail time, the outlaw animals must pull off their biggest scam: becoming model citizens. Under the tutelage of their mentor, Professor Marmalade, the gang sets out to make the world believe that they are becoming honest.",
      traile: "https://www.youtube.com/embed/ijjpgw0eqy8",
      rate: "3.5",
      id: 3
    },

    {
      name: "Alerte Rouge",
      poster: "https://fr.web.img6.acsta.net/pictures/22/02/28/10/29/1493029.jpg",
      description: "The adventures of Meilin Lee, a 13-year-old teenager, full of confidence, but torn between her image as a model little girl in the eyes of her overprotective mother and the chaos of adolescence. And as if all the changes taking place inside her weren't enough, whenever she's overwhelmed by her emotions - which, for a teenager, happens almost all the time - she transforms into a giant red panda!",
      traile: "https://www.youtube.com/embed/GB_N5NByStk",
      rate: "4",
      id: 4
    },
    {
      name: "L'âge de glace",
      poster: "https://www.cinezik.org/critiques/jaquettes/2022012402.jpg",
      description: "Eager for independence and always in search of thrills, the opossum brothers Crash and Eddie decide to look for a habitat just for them, but will quickly find themselves trapped under the ice, in a huge underground cave inhabited by dinosaurs. Rescued by their buddy Buck Wild, an eccentric one-eyed weasel, they go together and with the help of new friends embark on a mission to save the lost world from dinosaur domination.",
      traile: "https://www.youtube.com/embed/rUgpve1aiuw",
      rate: "5",
      id: 5
    },
    {
      name: "Marmaduke",
      poster: "https://www.murphysmultiverse.com/wp-content/uploads/2022/05/Review_Marmaduke.jpg",
      description: "Messy and mischievous, Marmaduke has a huge heart but can't stay out of trouble. Will he have enough dog to succeed in the posh world of dog shows?",
      traile: "https://www.youtube.com/embed/wDXYjxxnALU",
      rate: "1",
      id: 6
    },

  ])
  const search = useRef()

  const [filtredlist, setfirtre] = useState(list)
  const filter = () => {
    setfirtre(list.filter(e => e.name.includes(search.current.value)))
  }
  const [rating, setRating] = useState()
  const onStarClick = (nextValue) => {
    setRating(nextValue);
    console.log(nextValue);
    setfirtre(list.filter(e => e.rate >= nextValue))
  }
  const p = useRef()
  const p2 = useRef()
  const p3 = useRef()
  const p1 = useRef()
  const p4 = useRef()

  const add = () => {
    setList([...list,
    {
      name: p.current.value,
      poster: p1.current.value,
      rate: p2.current.value,


    }
    ])
  }
  return (
    <div className="App">

      < div className='search' >
        <input type={"text"} ref={search} onChange={filter} placeholder='enter movie name'></input>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div >
      <div>
        <input type={"text"} ref={p} placeholder="name movie"></input>
        <input type={"text"} ref={p2} placeholder="rate movie"></input>
        <input type={"text"} ref={p3} placeholder="image link"></input>
        <button onClick={add}>+</button>

        <br />
      </div>
      <Routes>
        <Route path='/' element={<><div className='movie'>
          {filtredlist.map((e, index) =>
            <NavLink to={index.toString()}>
              <p>{e.name}
                {e.rate}

                <img src={e.poster}></img>
              </p>
            </NavLink>
          )}

        </div></>}></Route>




        <Route path='/:id' element={<Trailer movies={list} />} />

      </Routes>


    </div>
  )
}

export default App;


