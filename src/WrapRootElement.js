import React from "react"
import { Provider } from "react-redux"
import store from "./store/store"
import "./styles/index.scss"
import { Helmet } from "react-helmet/es/Helmet"
import Layout from "./layout/Layout"


const WrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <script src="https://kit.fontawesome.com/4359434c56.js" crossOrigin="anonymous"/>

        <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.17.1/build/styles/atom-one-light.min.css"/>
      </Helmet>

      <Provider store={store}>
        <Layout>
          {element}
        </Layout>
      </Provider>
    </>
  )
}

export default WrapRootElement