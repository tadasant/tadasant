# tadasant

Personal site for [@tadasant](https://github.com/tadasant)

## Architecture

Technology used:
* Gatsby Static Site Generator (React, GraphQL)
* Leveraging plugins to enable:
  * TypeScript
  * `styled-components`
  * `remark`
  * `prismjs`
* Deployed on Netlify

## Commands

Use graphql-code-generator to generate TypeScript types for GraphQL queries:

`yarn gql-gen --schema ./schema.json --template graphql-codegen-typescript-template ``--out ./src/typings/graphql.d.ts "./src/**/*.ts*"`

TODO: this creates graphql queries return types that have the possibility of returning null. Since gatsby does the queries at build-time, there is no possibility of null post-build. And we probably want the build to break if we encounter an unexpected null. Instead, now I'm doing nullchecks for all the queries to satisfy the TS type checker - which would be mostly fine if they ran only at buildtime, but they're going to mildly bog down performance on the deployed site as well.

Solution is to have some sort of config on `gql-gen` that does not leave possibility of null.

## Notes

Ideal cover photo size for blog post is approximately 500px x 400px (width x height).

## How to get it to work

```
yarn install
```