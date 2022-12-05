import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import applause from '-!file-loader!./applause.wav'
import wheel from '-!file-loader!./wheel2.mp3'
// import arrow1 from '-!file-loader!./arrow.png'

import './luckywheelpage.css'

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ]
  }
  return array
}

function spin() {
  const wheelsound = new Audio(wheel)
  wheelsound.play()
  console.log('from the spin function')
  const box = document.getElementById('box')
  const element = document.getElementById('mainbox')
  let SelectedItem = ''

  let A1 = shuffle([1890, 2250, 2610])
  let A2 = shuffle([1850, 2210, 2570])
  let A3 = shuffle([1770, 2130, 2490])
  let A4 = shuffle([1810, 2170, 2530])
  let A5 = shuffle([1750, 2110, 2470])
  let A6 = shuffle([1630, 1990, 2350])
  let A7 = shuffle([1570, 1930, 2290])

  let results = shuffle([A1[0], A2[0], A3[0], A4[0], A5[0], A6[0], A7[0]])

  if (A1.includes(results[0])) SelectedItem = 'Gym'
  if (A2.includes(results[0])) SelectedItem = 'Club'
  if (A3.includes(results[0])) SelectedItem = 'Grill'
  if (A4.includes(results[0])) SelectedItem = 'Go Kart'
  if (A5.includes(results[0])) SelectedItem = 'Restaurant'
  if (A6.includes(results[0])) SelectedItem = 'Aktivität 1'
  if (A7.includes(results[0])) SelectedItem = '🔥'
  // if (A7.includes(results[0])) SelectedItem = '🔥'

  box.style.setProperty('transition', 'all ease 15s')
  box.style.transform = 'rotate(' + results[0] + 'deg)'
  element.classList.remove('animate')
  setTimeout(function () {
    element.classList.add('animate')
  }, 20000)

  setTimeout(function () {
    const applausesound = new Audio(applause)
    applausesound.play()
    Swal.fire({
      title: 'Team Die Hübschen',
      html: 'Eure nächste Aktivität ist : ' + ' Gym 💪 ',
      width: 320,
      height: 320,
      padding: 0.3125,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      // showCloseButton: true,
      imageUrl:
        'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      imageWidth: 140,
      imageHeight: 260,
      imageAlt: 'Custom image',
    })
  }, 17000)

  // setTimeout(function() {
  //   box.style.setProperty("transition", "initial");
  //   box.style.transform = "rotate(90deg)";
  // }, 6000);
}

const LuckywheelPage = () => {
  return (
    <>
      <MetaTags title="Luckywheel" description="Luckywheel page" />

      <Helmet>
        <title>Matis & Darios Projekt | LuckyWheel</title>
      </Helmet>

      <div className="flex items-center justify-center">
        <div className="text-white">
          <div className="pb-6 text-center text-2xl"></div>

          <div className="pb-2">
            <div className="mainbox" id="mainbox">
              <div className="box" id="box">
                <div className="box1">
                  <span className="font span1">
                    <h5>Gym</h5>
                  </span>
                  <span className="font span2">
                    <h5>Club</h5>
                  </span>
                  <span className="font span3">
                    <h5>Grill</h5>
                  </span>
                  <span className="font span4">
                    <h5>Go Kart</h5>
                  </span>
                  <span className="font span5">
                    <h5>Restaurant</h5>
                  </span>
                </div>
                <span className="box2">
                  <span className="font span1">
                    <h5>Aktivität 1</h5>
                  </span>
                  <span className="font span2">
                    <h5>Aktivität 2</h5>
                  </span>
                  <span className="font span3">
                    <h5>Aktivität 3</h5>
                  </span>
                  <span className="font span4">
                    <h5>Aktivität 4</h5>
                  </span>
                  <span className="font span5">
                    <h5>Aktivität 5</h5>
                  </span>
                </span>
              </div>
              <button
                id="spin"
                className="spin"
                // onClick={spin}
                onClick={() => {
                  spin()
                  audio.play()
                  // setTimeout(function() {

                  //   audio.pause();
                  // }, 5000);
                }}
              >
                SPIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LuckywheelPage
