import { AdminServerEntityBuilderContainer } from './_container';
import { DBProvider } from './_db';

export const EntityPageProvider = AdminServerEntityBuilderContainer.provider(
  (ctx) => {
    return async function EntityPage() {
      const db = ctx.innerDeps.db;

      const res = await db.query.entitySchema.findMany();

      console.log(res);

      return (
        <div>
          <h1>{ctx.deps.config.title}</h1>
          <div>
            {ctx.deps.config.fields.map((field) => (
              <div key={field.name}>
                {field.type}: {field.name}
              </div>
            ))}
          </div>
        </div>
      );
    };
  },
  {
    db: DBProvider,
  }
);
