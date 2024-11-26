import React from 'react'

export default function Carousel() {
    
    const images = import.meta.glob("/src/carousel/*.jpg")
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [imagesArr, setImagesArr] = React.useState([])

    for (const path in images) {
          imagesArr.push(path)
      }


    React.useEffect(() => {
        const loadedImages = []
        // Preload images
        for (const path in images) {
            const img = new Image()
            img.src = path
            loadedImages.push(path)
        }
        setImagesArr(loadedImages)

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArr.length)
        }, 4000)
        return () => clearInterval(interval)  
    }, [])

    
    return (
        <div className="carousel">
           <img className="carousel-img" key={currentIndex} src={imagesArr[currentIndex]}/>
        </div>
    )
}