import { rest } from 'msw';
import { employeeData } from '../lib/apiUrls';

export const handlers = [
  // Handles a GET /employeeData request
  rest.get(`${employeeData}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: 'Varun',
        username: 'varunsaini21',
        email: 'varun@saini.co',
      })
    );
  }),
];
