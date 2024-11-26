import React from 'react'
import ImageGrid from '../components/ImageGrid'

export default function Gallery() {

    const [isVisibleArr, setIsVisibleArr] = React.useState([false, false, false, false])

    function toggleVisible(i) {
        setIsVisibleArr(prevState => {
            const newArray = [...prevState]
            newArray[i] = !newArray[i]
            return newArray
        })
    }

    return (
            <div className="container">
              <h1>Referenciák</h1>
              <div className="service-btn">
                <h1 className="service-title" onClick={() => toggleVisible(0)}>{!isVisibleArr[0] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Hőszivattyús rendszerek</h1>
                  {
                  isVisibleArr[0] &&
                  <div>
                      <ImageGrid category="hoszivattyu" />
                  </div>
                  }
              </div>
              <div className="service-btn">
                <h1 className="service-title" onClick={() => toggleVisible(1)}>{!isVisibleArr[1] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Központi szellőztető</h1>
                {isVisibleArr[1] &&
                <div>
                  <ImageGrid category="szellozteto" />
                </div>
                }    
              </div>  
              <div className="service-btn">   
                <h1 className="service-title" onClick={() => toggleVisible(2)}>{!isVisibleArr[2] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Új építésű családi házak</h1>
                {isVisibleArr[2] &&
                <div>
                  <ImageGrid category="ujepites" />
                </div>
                }
              </div>
              <div className="service-btn">
                <h1 className="service-title" onClick={() => toggleVisible(3)}>{!isVisibleArr[3] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Felújítás</h1>
                {isVisibleArr[3] &&
                <div>
                  <ImageGrid category="felujitas" />
                  </div>
                  }
              </div>
            </div>

    )
}