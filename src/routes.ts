import { Application, NextFunction, Request, Response } from 'express';

import testRoutes from './routes/test.routes';

export default (app: Application) => {
  testRoutes(app);
};
