import Joi from 'joi';

export type HttpRequest<T = any> = {
  body?: T;
  params: any;
  query?: any;
  headers?: any;
  user?: {
    username: string;
    emailAddress: string;
    name: string;
  };
};

export type HttpResponse<T = any> = {
  data?: T;
  headers?: any;
  status?: number;
};

export type RouteConfig = {
  method: string;
  version: string;
  path: string;
  schema: Joi.Schema;
  middlewares: Function[];
  statusCode: number;
  hasSchema: boolean;
};
