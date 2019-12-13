/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * Every data for the site are located in
 *  `gatsby-config.js`
 *
 * To see more:
 *  https://www.gatsbyjs.org/docs/add-seo-component/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// Define interface for SEO component to type check params
interface SEOProps {
  title: string
  description?: string
  banner?: string
  pathname?: string
  article?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = '',
  banner = '',
  pathname = '',
  article = false,
}) => {
  // React hook to query site. You can use <StaticQuery /> component to do the same.
  const { site } = useStaticQuery(query)

  // Destructoring `site` object for clear data
  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultBanner,
      defaultDescription,
      headline,
      siteLanguage,
      author,
      twitter,
      github,
      linkedin
    }
  } = site

  // This will tell SEO components to use passed props or default data from query
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`
  }

  // SEO for Google Search Engine. More information:
  // https://developers.google.com/search/docs/guides/intro-structured-data
  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Person',
      name: author
    },
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultBanner}`
    }
  }

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage'
      },
      position: 1
    }
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}${defaultBanner}`
        }
      },
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image
      },
      mainEntityOfPage: seo.url
    }

    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title
      },
      position: 2
    })
  }

  const breadCrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement
  }

  return (
    <React.Fragment>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <script type="application/ld+json">
          {!article
            ? JSON.stringify(schemaOrgJSONLD)
            : JSON.stringify(schemaArticle)}
        </script>
        <script type="application/ld+json">{JSON.stringify(breadCrumb)}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
    </React.Fragment>
  )
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "MM-DD-YYYY")
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        headline
        language
        author
        twitter
        github
        linkedin
      }
    }
  }
`

export default SEO
