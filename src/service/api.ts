import axios from "axios";
import OSS from 'ali-oss';

export const ossClient = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI4GCnC5EJdK1ydcAvUpNT',
  accessKeySecret: 'guDsnMNuTGIzK22398sWF05cgRrcxL',
  bucket: '49-poc'
})

export interface CreateSession {
  uid: number;
}

export interface JoinSession {
  token: string;
}

export interface NetlessSession {
  uuid: string;
  token: string;
  appIdentifier: string;
  role: string;
}

export interface AgoraSession {
  appId: string;
  channel: string;
  token: string;
  uid: number;
}

export interface Session {
  id: string;
  token: string;
  username: string;
  expiredAt: number;
  agora: AgoraSession;
  netless: NetlessSession;
}

export const creatSession = (username: string) =>
  axios.post<CreateSession>("https://wx-metis-service.herokuapp.com/api/session", {
    username,
  });

export const joinSession = (sessionId: string, username: string) =>
  axios.put<JoinSession>(`https://wx-metis-service.herokuapp.com/api/session/${sessionId}`, {
    username,
  });

export const fetchSession = (uid: string) =>
  axios.get<Session>(`https://wx-metis-service.herokuapp.com/api/session/${uid}`);