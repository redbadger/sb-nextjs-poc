# Security Bank UI proof of concept

## What is it?

It is a NextJS app with:

- Formik to handle form data
- Redux and redux-persist to handle persistant application state management
- Jose to sign and validate tokens

The idea is to populate the first page with personal data, that would create a user token and redirect to a page that only can be available if user is authorised.

## How to run it

- Install dependencies
  ```
  yarn
  ```
- Run local environment
  ```
  yarn dev
  ```
- Populate the form
