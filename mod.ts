import { Application, Context } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use(async (ctx: Context) => {
  const decoder = new TextDecoder('utf-8');
  if (ctx.request.url.pathname == '/') {
    // 返回静态资源
    ctx.response.type = 'text/html';
    const data = Deno.readFileSync('./index.html');
    ctx.response.body = decoder.decode(data);
  }
  if (
    ['jsx', 'js', 'tsx', 'ts'].some((v) =>
      ctx.request.url.pathname.endsWith(`.${v}`)
    )
  ) {
    const p = Deno.cwd() + ctx.request.url.pathname;
    ctx.response.type = 'application/javascript';
    ctx.response.body = new TextDecoder('utf-8').decode(Deno.readFileSync(p));
  }
});

console.log('http://0.0.0.0:9000');
app.listen({ port: 9000 });
