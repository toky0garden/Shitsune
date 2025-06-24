interface JwtPayload {
  username: string;
  email: string;
  exp: number;
}

export const getParsedToken = (token: string): JwtPayload | null => {
  const payloadBase64 = token.split(".")[1];
  const payloadJson = atob(payloadBase64.replace(/-/g, "+").replace(/_/g, "/"));
  const final = JSON.parse(payloadJson);
  return final;
};
