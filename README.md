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

## Commands

Use graphql-code-generator to generate TypeScript types for GraphQL queries:

`yarn gql-gen --schema ./schema.json --template graphql-codegen-typescript-template ``--out ./src/typings/graphql.d.ts "./src/**/*.ts*"`

TODO: this creates graphql queries return types that have the possibility of returning null. Since gatsby does the queries at build-time, there is no possibility of null post-build. And we probably want the build to break if we encounter an unexpected null. Instead, now I'm doing nullchecks for all the queries to satisfy the TS type checker - which would be mostly fine if they ran only at buildtime, but they're going to mildly bog down performance on the deployed site as well.

Solution is to have some sort of config on gql-gen that does not leave possibility of null.