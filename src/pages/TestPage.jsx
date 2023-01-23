import React from 'react'

import apollo from '../assets/images/toolbox/apollo.svg'
import babel from '../assets/images/toolbox/babel.svg'
import bootstrap from '../assets/images/toolbox/bootstrap.svg'
import codepen from '../assets/images/toolbox/codepen.svg'
import css3 from '../assets/images/toolbox/css3.svg'
import eslint from '../assets/images/toolbox/eslint.svg'
import git from '../assets/images/toolbox/git.svg'
import github from '../assets/images/toolbox/github.svg'
import gitlab from '../assets/images/toolbox/gitlab.svg'
import graphql from '../assets/images/toolbox/graphql.svg'
import handlebars from '../assets/images/toolbox/handlebars.svg'
import heroku from '../assets/images/toolbox/heroku.svg'
import html5 from '../assets/images/toolbox/html5.svg'
import javascript from '../assets/images/toolbox/javascript.svg'
import jest from '../assets/images/toolbox/jest.svg'
import jquery from '../assets/images/toolbox/jquery.svg'
import json from '../assets/images/toolbox/json.svg'
import linkedin from '../assets/images/toolbox/linkedin.svg'
import material from '../assets/images/toolbox/material.svg'
import momentjs from '../assets/images/toolbox/momentjs.svg'
import mongodb from '../assets/images/toolbox/mongodb.svg'
import mysql from '../assets/images/toolbox/mysql.svg'
import netlify from '../assets/images/toolbox/netlify.svg'
import nodejs from '../assets/images/toolbox/nodejs.svg'
import nodemon from '../assets/images/toolbox/nodemon.svg'
import npm from '../assets/images/toolbox/npm.svg'
import react from '../assets/images/toolbox/react.svg'
import redux from '../assets/images/toolbox/redux.svg'
import sequelize from '../assets/images/toolbox/sequelize.svg'
import slack from '../assets/images/toolbox/slack.svg'
import stackoverflow from '../assets/images/toolbox/stackoverflow.svg'
import svg from '../assets/images/toolbox/svg.svg'
import tailwind from '../assets/images/toolbox/tailwind.svg'
import vite from '../assets/images/toolbox/vite.svg'
import vscode from '../assets/images/toolbox/vscode.svg'
import webpack from '../assets/images/toolbox/webpack.svg'

const icons = [ apollo, babel, bootstrap, codepen, css3, eslint, git, github, gitlab, graphql, handlebars, heroku, html5, javascript, jest, jquery, json, linkedin, material, momentjs, mongodb, mysql, netlify, nodejs, nodemon, npm, react, redux, sequelize, slack, stackoverflow, svg, tailwind, vite, vscode, webpack ]

const pageContainer = {
	width: '90%',
	border: 'solid red',
	padding: '2rem',
	marginTop: '5rem',
	marginLeft: 'auto',
	marginRight: 'auto'
}

const iconsContainer = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '2.5rem',
	padding: '0.5rem',
	border: 'solid yellow'
}

const iconsImg = {
	width: '10%',
	aspectRatio: '3/2',
	objectFit: 'contain'
}

export default function TestPage() {
	return (
		<div style={pageContainer}>

			<div style={iconsContainer}>
				{icons.map((icon) => (
					<img src={icon} style={iconsImg} />
				))}
			</div>

		</div>
	)
}
