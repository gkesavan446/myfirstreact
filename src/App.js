import logo from "./logo.svg";
import "./App.css";
import { User } from "./User";

function App() {   
  const users = [
    {   
    pic:"https://thefederal.com/file/2022/11/love-today.jpg",
    movie: "Love Today",
    rating: 9.1,
    description: "Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan in his second dirctorial venture after Comali, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment."
  },
  {   
    pic:"https://images.news18.com/ibnlive/uploads/2022/07/kamal-haasan-vikram-1.jpg",
    movie: "Vikram",
    rating: 9.5,
    description: "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.[15] The film stars Kamal Haasan, Fahadh Faasil and Vijay Sethupathi and many more artist"
  },
  {   
    pic:"https://cdn.tollywood.net/wp-content/uploads/2022/05/KGF-2-26-Days-Box-office-Collections.jpg",
    movie: "KGF 2",
    rating: 9.2,
    description: "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second installment in a two-part series, it serves as a sequel"
  },
  {   
    pic:"https://pbs.twimg.com/media/FgV2GbUVUAE2IIJ?format=jpg&name=large",
    movie: "Avatar",
    rating: 9.6,
    description: "Avatar (also marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced and co-edited by James Cameron, and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez and Sigourney Weaver."
  } 
];             
  return (
    <div className="card">      
      {
      users.map((a) => (
      <User movie={a.movie} pic ={a.pic} rating= {a.rating} description={a.description}/>))
      }     
    </div>
  );
}

export default App;
