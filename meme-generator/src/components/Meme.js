import React from "react"
import '../index.css';
import memesData from '../memesData'

export default function Meme(){
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }

    );

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
         const memesArray = allMemeImages.data.memes;
         const randomNumber = Math.floor(Math.random() * memesArray.length)
         let url = memesArray[randomNumber].url;
         setMeme(prevState => ({
             ...prevState,
             randomImage: url
         }))
        }


    return(
        <main className="memeContainer">
            <div className="form">
                <input type="text" className="formInput" placeholder="top text"></input>
                <input type="text" className="formInput" placeholder="bottom text"></input>
                <button className="formButton" 
                onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div>
                <img className="memePic" src={meme.randomImage} />
            </div>
        </main>
    )
}