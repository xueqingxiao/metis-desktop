import React, { useState } from "react";
import { Button, Form, FormItem, Input, Root } from "./elements";
import { creatSession, joinSession } from "../../service/api";
import { useHistory, useParams } from "react-router-dom";

const Landing: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const { sessionId } = useParams<{ sessionId?: string }>();
  const history = useHistory();

  const handleCreateSession: React.UIEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    if (!username) {
      return;
    }
    if (sessionId) {
      const { data: uid } = await joinSession(sessionId, username);
      history.replace(`/session/${uid}`);
      return;
    }
    const { data: uid } = await creatSession(username);
    history.replace(`/session/${uid}`);
  };
  return (
    <Root>
      <Form>
        <FormItem>
          <Input
            type="text"
            placeholder="请输入用户名"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </FormItem>
        <FormItem>
          <Button onClick={handleCreateSession}>
            {sessionId ? "加入房间" : "创建房间"}
          </Button>
        </FormItem>
      </Form>
    </Root>
  );
};

export default Landing;
