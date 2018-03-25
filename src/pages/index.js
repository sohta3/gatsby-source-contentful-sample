import React from 'react'
import Link from 'gatsby-link'

const IndexPage = props => {
  const articles = props.data.allContentfulPerson.edges[0].node.blog_post.map(
    post => {
      const tags = post.tags.map(tag => {
        return (
          <a href={`/tags/${tag}`} className="tag" key={tag.id}>
            {tag}
          </a>
        )
      })

      return (
        <li className="item">
          <article key={post.id}>
            <img
              className="thumbnail"
              src={`${post.heroImage.file.url}?fit=scale&w=350&h=196`}
              srcSet={`${post.heroImage.file.url}?w=350&h=196&fit=fill 350w, ${
                post.heroImage.file.url
              }?w=1000&h=562&fit=fill 1000w, ${
                post.heroImage.file.url
              }?w=2000&h=1125&fit=fill 2000w`}
              sizes="(min-width: 1024px) 400px, 100vw"
            />
            <time className="tiny date">
              {new Date(post.publishDate).toDateString()}
            </time>
            <h4>
              <a href={`/blog/${post.slug}`} className="title">
                {post.title}
              </a>
            </h4>
            <p>{post.description.description}</p>

            <div className="tags">{tags}</div>
          </article>
        </li>
      )
    }
  )

  return (
    // <div>
    //   <h1>Hi people!!!</h1>
    //   <p>Welcome to your new Gatsby site.</p>
    //   <p>Now go build something great.</p>
    //   <Link to="/page-2/">Go to page 2</Link>
    // </div>
    <div>
      <header className="home header">
        <div className="picture">
          <img
            src={`${
              props.data.allContentfulPerson.edges[0].node.image.file.url
            }?w=1200`}
          />
        </div>
        <div className="foreground">
          <div className="page-bar wrapper">
            <a href="/" className="person-name">
              {props.data.allContentfulPerson.edges[0].node.name}
            </a>
            {/* <Navigation /> */}
          </div>
          <div className="page-info wrapper">
            <h2>{props.data.allContentfulPerson.edges[0].node.title}</h2>
            <p>
              {props.data.allContentfulPerson.edges[0].node.shortBio.shortBio}
            </p>
            <ul className="social-icons">
              <li>
                <a href={props.data.allContentfulPerson.edges[0].node.facebook}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="88.428 12.828 107.543 207.085"
                  >
                    <path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={props.data.allContentfulPerson.edges[0].node.twitter}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M72.955 17.969l-22.41 22.41c5.637 11.592 3.65 25.958-5.978 35.585-9.45 9.451-23.469 11.543-34.946 6.285 17.658 17.15 45.87 17.003 63.333-.461 17.625-17.623 17.625-46.196.001-63.819z" />
                    <path d="M58.281 47.966c-12.855 3.768-26.293-3.047-31.006-15.339-7.596 6.311-11.149 16.751-8.194 26.831 3.966 13.531 18.151 21.284 31.682 17.317 13.53-3.967 21.284-18.15 17.317-31.682a25.574 25.574 0 0 0-.675-1.979 25.458 25.458 0 0 1-9.124 4.852z" />
                    <circle cx="59.292" cy="32.235" r="19.743" />
                    <path d="M63.206 17.134L85.582 6.98 69.975 26.159" />
                    <path d="M67.625 21.553L90 11.399l-15.606 19.18" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={props.data.allContentfulPerson.edges[0].node.github}>
                  <svg x="0px" y="0px" viewBox="0 0 438.549 438.549">
                    <g>
                      <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z" />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="body-container">
        <div className="items-bar wrapper">
          <h2>Recent articles</h2>
        </div>
        <ul className="items-list wrapper">{articles}</ul>
      </section>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPerson {
      edges {
        node {
          id
          name
          company
          email
          title
          facebook
          twitter
          github
          image {
            id
            file {
              url
              fileName
              contentType
            }
          }
          title
          shortBio {
            shortBio
          }
          blog_post {
            id
            title
            slug
            tags
            publishDate
            description {
              description
            }
            heroImage {
              id
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`
