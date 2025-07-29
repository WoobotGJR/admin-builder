import { AdminClientEntityBuilderContainer } from './_container';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GetEntityResult } from './_types';
import { Button } from '@/components/ui/button';

export const EntityCardProvider = AdminClientEntityBuilderContainer.provider(
  ({ deps: { config, action } }) => {
    return function EntityCard({ entity }: { entity: GetEntityResult }) {
      const handleDelete = () => {
        action({ type: 'delete', id: entity.id });
      };
      return (
        <Card>
          <CardHeader>
            <CardTitle>Card {entity.id}</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            {Object.entries(entity).map(([key, value]) => {1
              if (!config.fields.find((field) => field.name == key))
                return null;

              return (
                <div key={key}>
                  {key}: {String(value)}
                </div>
              );
            })}
          </CardContent>
          <CardFooter>
            <Button>Edit</Button>
            <Button onClick={() => handleDelete}>Delete</Button>
          </CardFooter>
        </Card>
      );
    };
  }
);
