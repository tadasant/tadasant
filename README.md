# Tadasant

Personal site for [Tadas Antanavicius](https://github.com/tadasant)

## Feature Roadmap

- [ ] About Me
- [ ] Blog
    - [ ] Newsletter
    - [ ] Discussions
    - [ ] Social media sharing
- [ ] Timeline / Portfolio
- [ ] Services

## Architecture

Technology used:
* Gatsby Static Site Generator
* GraphQL
* `styled-components`

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tadasant/tadasant)

## Commands

Use graphql-code-generator to generate TypeScript types for GraphQL queries:

`yarn gql-gen --schema ./schema.json --template graphql-codegen-typescript-template --out ./src/typings/graphql.d.ts "./src/**/*.ts*"`
