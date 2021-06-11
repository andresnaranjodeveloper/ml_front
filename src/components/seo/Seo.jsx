import React from 'react';
import {Helmet} from "react-helmet";


import Logo from "./../../assets/images/Logo_ML.png";

const SEO = ({ title, description, url, product = null }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={Logo} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      {product ? 
        <Helmet>
          <meta name="twitter:card" content="product" data-head-react="true" />
          <meta name="twitter:image" content={product.picture} data-head-react="true" />
          <meta name="twitter:site" content="Mercado Libre" data-head-react="true" />
          <meta name="twitter:title" content={product.title} data-head-react="true" />
          <meta name="twitter:description" content={product.description} data-head-react="true" />
          <meta name="twitter:domain" content="mercadolibre.com.co" data-head-react="true" />
          
          <meta name="twitter:app:name:iphone" content="Mercado Libre" data-head-react="true" />
          <meta name="twitter:app:id:iphone" content={product.id} data-head-react="true" />
          <meta name="twitter:app:url:iphone" content={`meli://item?id=${product.id}`} data-head-react="true" />
          <meta name="twitter:app:name:ipad" content="Mercado Libre" data-head-react="true" />
          <meta name="twitter:app:id:ipad" content={product.id} data-head-react="true" />
          <meta name="twitter:app:url:ipad" content={`meli://item?id=${product.id}`} data-head-react="true" />
          <meta name="twitter:app:name:googleplay" content="Mercado Libre" data-head-react="true" />
          <meta name="twitter:app:id:googleplay" content="com.mercadolibre" data-head-react="true" />
          <meta name="twitter:app:url:googleplay" content={`meli://item?id=${product.id}`} data-head-react="true" />

          <meta property="og:description" content={product.description} data-head-react="true" />
          <meta property="og:image" content={product.picture} data-head-react="true" />
          <meta property="og:title" content={product.title} data-head-react="true" />
          <meta property="og:type" content="meli-co:product" data-head-react="true" />
          <meta property="og:url" content={url} data-head-react="true" />

          <meta property="fb:app_id" content={product.id} data-head-react="true" />

          <meta name="al:android:url" property="al:android:url" content={`meli://item?id=${product.id}`} data-head-react="true" />
          <meta name="al:android:app_name" property="al:android:app_name" content="Mercado Libre" data-head-react="true" />
          <meta name="al:android:package" property="al:android:package" content="com.mercadolibre" data-head-react="true" />
          
          <meta name="al:iphone:url" property="al:ios:url" content={`meli://item?id=${product.id}`} data-head-react="true" />
          <meta name="al:iphone:app_name" property="al:ios:app_name" content="Mercado Libre" data-head-react="true" />
          <meta name="al:iphone:app_store_id" property="al:ios:app_store_id" content={product.id} data-head-react="true" />
        </Helmet>
        : null
      }
    </>
  );
};

export default SEO;
