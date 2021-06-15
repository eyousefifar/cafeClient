import { APIClient } from "../../../_api";

const endpoint = "/reserves";

function pay(data: any) {
  return APIClient.post(`${endpoint}/pay`, data);
}

function payVerify(reqQuery: any) {
  return APIClient.get(
    `${endpoint}/verify?clientrefid=${reqQuery.clientrefid}&refid=${reqQuery.refid}`
  );
}

export { pay, payVerify };
