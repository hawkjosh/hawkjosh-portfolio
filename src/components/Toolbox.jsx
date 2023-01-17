import React, { useState } from 'react'
import '../assets/styles/Toolbox.css'

import Apollo from '../assets/images/toolbox/apollo.svg';
import Babel from '../assets/images/toolbox/babel.svg';
import Bootstrap from '../assets/images/toolbox/bootstrap.svg';
import Codepen from '../assets/images/toolbox/codepen.svg';
import CSS3_icon from '../assets/images/toolbox/css3.svg';
import ESLint from '../assets/images/toolbox/eslint.svg';
import Git from '../assets/images/toolbox/git.svg';
import GitHub from '../assets/images/toolbox/github.svg';
import GitLab from '../assets/images/toolbox/gitlab.svg';
import GraphQL from '../assets/images/toolbox/graphql.svg';
import Handlebars from '../assets/images/toolbox/handlebars.svg';
import Heroku from '../assets/images/toolbox/heroku.svg';
import HTML5_icon from '../assets/images/toolbox/html5.svg';
import JavaScript from '../assets/images/toolbox/javascript.svg';
import Jest from '../assets/images/toolbox/jest.svg';
import JQuery from '../assets/images/toolbox/jquery.svg';
import JSON_icon from '../assets/images/toolbox/json.svg';
import Linkedin from '../assets/images/toolbox/linkedin.svg';
import Material from '../assets/images/toolbox/material.svg';
import MomentJS from '../assets/images/toolbox/momentjs.svg';
import MongoDB from '../assets/images/toolbox/mongodb.svg';
import MySQL from '../assets/images/toolbox/mysql.svg';
import Netlify from '../assets/images/toolbox/netlify.svg';
import NodeJS from '../assets/images/toolbox/nodejs.svg';
import Nodemon from '../assets/images/toolbox/nodemon.svg';
import NPM_icon from '../assets/images/toolbox/npm.svg';
import ReactJS from '../assets/images/toolbox/react.svg';
import Redux from '../assets/images/toolbox/redux.svg';
import Sequelize from '../assets/images/toolbox/sequelize.svg';
import Slack from '../assets/images/toolbox/slack.svg';
import StackOverflow from '../assets/images/toolbox/stackoverflow.svg';
import SVG_icon from '../assets/images/toolbox/svg.svg';
import Tailwind from '../assets/images/toolbox/tailwind.svg';
import VSCode from '../assets/images/toolbox/vscode.svg';
import WebPack from '../assets/images/toolbox/webpack.svg';

const icons = [
{name: 'Apollo Icon', image: Apollo},
{name: 'Babel Icon', image: Babel},
{name: 'Bootstrap Icon', image: Bootstrap},
{name: 'Codepen Icon', image: Codepen},
{name: 'CSS3 Icon', image: CSS3_icon},
{name: 'ESLint Icon', image: ESLint},
{name: 'Git Icon', image: Git},
{name: 'GitHub Icon', image: GitHub},
{name: 'GitLab Icon', image: GitLab},
{name: 'GraphQL Icon', image: GraphQL},
{name: 'Handlebars Icon', image: Handlebars},
{name: 'Heroku Icon', image: Heroku},
{name: 'HTML5 Icon', image: HTML5_icon},
{name: 'JavaScript Icon', image: JavaScript},
{name: 'Jest Icon', image: Jest},
{name: 'JQuery Icon', image: JQuery},
{name: 'JSON Icon', image: JSON_icon},
{name: 'Linkedin Icon', image: Linkedin},
{name: 'Material Icon', image: Material},
{name: 'MomentJS Icon', image: MomentJS},
{name: 'MongoDB Icon', image: MongoDB},
{name: 'MySQL Icon', image: MySQL},
{name: 'Netlify Icon', image: Netlify},
{name: 'NodeJS Icon', image: NodeJS},
{name: 'Nodemon Icon', image: Nodemon},
{name: 'NPM Icon', image: NPM_icon},
{name: 'ReactJS Icon', image: ReactJS},
{name: 'Redux Icon', image: Redux},
{name: 'Sequelize Icon', image: Sequelize},
{name: 'Slack Icon', image: Slack},
{name: 'Stack Overflow Icon', image: StackOverflow},
{name: 'SVG Icon', image: SVG_icon},
{name: 'Tailwind Icon', image: Tailwind},
{name: 'VSCode Icon', image: VSCode},
{name: 'WebPack Icon', image: WebPack}
]

export default function Toolbox() {

  const [showToolbox, setShowToolbox] = useState(false)
  
  return (
    <>

    <div id='toolbox-component'>
      <button onClick={() => setShowToolbox(true)}>
        <svg width="48px" height="auto" viewBox="0 0 20 20">
          <path fill="white" d="M3.135 6.89c.933-.725 1.707-.225 2.74.971c.116.135.272-.023.361-.1c.088-.078 1.451-1.305 1.518-1.361c.066-.059.146-.169.041-.292a36.238 36.238 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994c-.528-.014-2.646-.039-2.963-.004c-1.283.135-2.894 1.334-3.705 1.893c-1.061.726-1.457 1.152-1.522 1.211c-.3.262-.048.867-.592 1.344c-.575.503-.934.122-1.267.414c-.165.146-.627.492-.759.607c-.133.117-.157.314-.021.471c0 0 1.264 1.396 1.37 1.52c.105.122.391.228.567.071c.177-.156.632-.553.708-.623c.078-.066-.05-.861.358-1.177zm5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.289.289 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758L8.843 7.407zM19.902 3.39c-.074-.494-.33-.391-.463-.182c-.133.211-.721 1.102-.963 1.506c-.24.4-.832 1.191-1.934.41c-1.148-.811-.749-1.377-.549-1.758c.201-.383.818-1.457.907-1.59c.089-.135-.015-.527-.371-.363c-.357.164-2.523 1.025-2.823 2.26c-.307 1.256.257 2.379-.85 3.494l-1.343 1.4l1.349 1.566l1.654-1.57c.394-.396 1.236-.781 1.998-.607c1.633.369 2.524-.244 3.061-1.258c.482-.906.402-2.814.327-3.308zM2.739 17.053a.538.538 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824l-1.503-1.714l-5.101 4.938z"/>
        </svg>
        <div className='toolbox-title'>My Toolbox</div>
      </button>
      {showToolbox && (
        <div className='toolbox-window'>
          <button onClick={() => setShowToolbox(false)}>
            <svg width="35px" height="auto" viewBox="0 0 32 32">
              <path className="close-btn" fill="white" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"/>
            </svg>
          </button>
          <div className='toolbox-window-icons'>
            {icons.map((icon, index) => (
              <img className='toolbox-icons' src={icon.image} key={index} alt={icon.name} />
            ))}
          </div>
        </div>
      )}
    </div>

    </>
  )
}