import React from "react"

const TemplatePublicacao = ({title, videoUrl, intro, subtitle, body}) => {
  return (
    <section className={'template-publicacao'}>
      <div className="card">

      <h1 className="title">{title}</h1>


      <iframe src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

      <div className="divider" />

        <div className="intro">
          <img src={require('../images/gopher-reading.png')} align="left"/>

          {intro}

        </div>

        <h2>{subtitle}</h2>

        {body}
      </div>
    </section>
  )
}

export default TemplatePublicacao