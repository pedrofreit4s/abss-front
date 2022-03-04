import { MessageCover, Container, MessageIcon, MessageText, MessageTitle } from "./styles";

type MessageProps = {
  message: string;
  top?: boolean;
  children?: any;
};

export default function Message({ message, children, top }: MessageProps) {
  return (
    <MessageCover marginTop={top}>
      <Container>
        <MessageIcon>
          <i className="bx bxs-quote-left"></i>
        </MessageIcon>
        <MessageTitle>{message}</MessageTitle>
      </Container>
      {children}
    </MessageCover>
  );
}
