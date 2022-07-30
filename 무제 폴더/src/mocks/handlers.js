// rest api를 사용한다.
import { rest } from 'msw';
// 응답 값을 만들어 주는 함수
export const handlers = [
  rest.get('/login', async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
  rest.get(
    'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json',
    async (req, res, ctx) => {
      const id = req.url.searchParams.get('id');
      // 기존 url에 요청을 다시 보내서 데이터를 받는다.
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();
      return res(
        // 403 에러 메세지를 내려줄때
        // Send a valid HTTP status code
        ctx.status(403),
        // And a response body, if necessary
        ctx.json({
          errorMessage: `There is no data`,
        })
        // 응답 데이터가 있을때
        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       {
        //         name: id,
        //         age: 135,
        //       },
        //     ],
        //   },
        // })
      );
    }
  ),
  rest.put('http://localhost:3000/counter/increment', async (req, res, ctx) => {
    const { value } = req.body;
    return res(ctx.json({ value: value + 2 }));
  }),
  rest.get('http://localhost:3000/todo', async (req, res, ctx) => {
    return res(ctx.json({ todo: { task: 'Todo fk up' } }));
  }),
  rest.get('http://localhost:3000/api/user-name', async (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    return res(ctx.json({ name: id === '1' ? 'The One' : 'The Others' }));
    // 에러일때
    // return res(ctx.status(400));
  }),
  rest.get('http://localhost:3000/api/user/:userId', async (req, res, ctx) => {
    const { userId } = req.params;
    return res(ctx.json({ name: `Jimmy (${userId})` }));
    // 에러일때
    // return res(ctx.status(400));
  }),
];
