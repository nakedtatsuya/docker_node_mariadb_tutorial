import express, {NextFunction, Request, Response} from 'express';
const router = express.Router();

import auth from 'basic-auth';

const admins: any = {
  'nadenadeboy': { password: 'password' },
};

const basicAuth = (request: Request, response: Response, next: NextFunction) => {
  const user = auth(request);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};

router.get('/', basicAuth, (req, res, next) => {
  res.render('admin/index');
});

export default router;
