import './intro.css'
import wave from '../pictures/waving.png'
import avatar from '../pictures/avatar.svg'
import computers from '../pictures/pcs.svg'

export const Intro = () => {
  return (
    <section className="intro">
    <div className="intro-text-div">
      <div className="intro-title-div">
        <h1>Hi, I'm Renato</h1>
        <img src={wave} />
      </div>
      <p>
        I'm a passionate Front-end Developer and I love coding beautifully
        simple things.
      </p>
      <img src={avatar} className="avatar" />
    </div>
    <div className="intro-img-div">
      <img src={computers} className="computers" />
    </div>
  </section>
  )
}
