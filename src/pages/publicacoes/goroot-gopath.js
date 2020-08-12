import React from "react"
import TemplatePublicacao from "../../layout/TemplatePublicacao"
import Paragraph from "../../components/Paragraph"
import Code from "../../components/Code"

const GorootGopathPage = () => {
  return (
    <TemplatePublicacao
      title={'JSON, criando seu próprio Marshal e Unmarshal'}
      videoUrl={"https://www.youtube.com/embed/ALlzgQfXVFo"}
      intro={<Paragraph>

            GOROOT e GOPATH sao variaveis de ambiente que o GO usa.
            A GOROOT `e a variavel que aponta para o local da instalacao do GO, ela `e usada para encontrar o GO e as suas bibliotecas padrao usada para encontrar bibliotecas padrao

            Continuando a conversa sobre interfaces e sobre manipulação de JSON tem um recurso muito útil que usamos
            para ajudar o nosso <mark>sistema</mark> a falar melhor com o PostgresQL e pREST.

            O formato de data padrão do Postgres é incompatível com o formato padrão do Golang e o nosso sistema usa
            muito
            JSON para tanto mandar como receber informações do banco de dados.

            Ter que lembrar toda hora de fazer o parser da data para o formato correto simplesmente não é pratico, é
            muito
            melhor ensinar o Golang como lidar com data e hora no bom e velho formato ISO 8601.

            Alias recomendo muito sempre usar ISO 8601 UTC para tudo no backend e apenas mudar para o formato e timezone
            local
            quando for exibir para o usuário. Mas isso é uma história para outro dia.

            O código fonte do package Golang esta disponível no GitHub.
      </Paragraph>
      }
      subtitle={'MarshalJSON'}
      body={<>
        <Paragraph>
          Agora vamos ver como o código funciona, no exemplo abaixo criamos uma struct Time e implementamos uma função
          MarshalJSON para ela. Na função main instanciamos uma struct com alguns dados, em seguida usamos a função
          json.MarshalIndent que percorre a struct e quando ela encontrar o campo Time vai usar a função que definimos e não
          a default do sistema.
        </Paragraph>

        <Code> {`
        package main

          import (
          "encoding/json"
          "fmt"
          "time"
          )

          type Time struct {
          time.Time
        }

          const layout = "2006-01-02T15:04:05.999999"

          func (t Time) MarshalJSON() ([]byte, error) {
          return []byte(fmt.Sprintf(\`"%s"\`, t.Time.Format(layout))), nil
        }

          func main() {
          data := struct {
          Name string
          Time Time
        }{
          Name: "teste",
          Time: Time{time.Now().Add(time.Millisecond * time.Duration(54321))},
        }

          json, err := json.MarshalIndent(data, "", "t")
          if err != nil {
          fmt.Println(err)
        }

          fmt.Println(string(json))
        }
        `}</Code>

        </>}
    />
  )
}

export default GorootGopathPage