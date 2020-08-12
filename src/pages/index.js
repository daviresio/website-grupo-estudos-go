import React from "react"


const IndexPage = () => (
  <>
    <main>
      <h1>Golang grupo de estudos</h1>
      <h2>
        Com reunioes semanais e uma comunidade super amigavel, aprender golang esta mais facil do que nunca!
        Embarque agora mesmo nessa aventura e se conecte a outros devs por meio dos nossos canais de relacionamento.
      </h2>
      <img src={require("../images/header.png")}/>
    </main>

    <section className="content">

      <div className="card content-first">
        <div className="top">
          <h2>Feita pelo</h2>
          <img src={require('../images/google-logo.png')}/>
        </div>
        <span>
          Go é uma linguagem de programação de código aberto que facilita a criação de software simples, confiável e eficiente.
        </span>
        <div className="buttons">
          <button>Mande-nos um oi</button>
          <button className="outline-button"><i className="fas fa-play-circle" />Assistir video</button>
        </div>
      </div>

      <div className="card content-second">

        <div className="item">
          <i className="fas fa-terminal" />
          <h2>Linguagem simples</h2>
          <span>Golang é uma linguagem muito simples e facil de aprender, com a idea de nao ter coisas complicadas que dificultam o
      desenvolvimento e o tornam descessariamente complexo, é muito facil aprender go e desenvolver programas incriveis com ele</span>
        </div>
        <div className="item">
          <i className="fas fa-link" />
          <h2>Concorrente</h2>
          <span>Go foi criado após o surgimento dos processadores multi core, e desde a sua concepcao ele foi pensado para trabalhar em um ambiente multi thread,
      por isso consegue se destacar neste cenario, usando as suas goroutines que sao bem mais eficientes e consomem menos recursos que outras implementações</span>
        </div>
        <div className="item">
          <i className="fas fa-code" />
          <h2>Codigo organizado</h2>
          <span>Para escrever codigo baguncado e dificil de ser entendido o programador vai precisar se esforcar um pouco mais, com go nao é tao simples fazer aquela gambiarra marota
      e te forca a escrever um codigo com maior qualidade</span>
        </div>

      </div>

      <div className="card content-third">
        <h1>Experimente o GO agora mesmo no seu navegador</h1>
        <iframe width="100%" height="450" src="https://play.golang.org/p/HmnNoBf0p1z" frameBorder="0" />
      </div>

      <div className="card content-four">

        <h1>Que tal fazer parte da nossa comunidade?</h1>
        <div>
          <h2>Se conecte a comunidade, faça amizade com outros desenvolvedores e aprenda cada vez mais. Preencha o seu
            e-mail
            para que a gente possa te alertar das novidades que acontece na nossa comunidade</h2>
          <form>
            <input type="email" className="input" placeholder="seu-email@mail.com"/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>


    </section>
  </>
)

export default IndexPage
