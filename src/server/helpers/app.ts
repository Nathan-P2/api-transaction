import express from 'express'

export const setupApp = () => {
  const app = express()
  app.use(express.json())
  return app
}