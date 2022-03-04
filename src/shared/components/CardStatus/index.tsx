import { Card, CardIcon, CardText, CardTitle } from "./styles";

type CardStatusProps = {
  icon: any;
  title: string;
  text?: string;
};

export default function CardStatus({ icon, title, text }: CardStatusProps) {
  return (
    <Card>
      <CardIcon>{icon}</CardIcon>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </div>
    </Card>
  );
}
