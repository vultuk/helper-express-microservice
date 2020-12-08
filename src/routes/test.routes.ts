import { Application, request, response } from 'express';

import asyncMethod from '../shared/async-method';
import test from '../app/testMethod';

export default (app: Application) => {
  app.get('/test', asyncMethod(test));
};
