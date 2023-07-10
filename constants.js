export const COLORS = {
  text: "#002859",
  button: "#035AC5",
  white: "#fff",
  lightgray: "#D3DCE6",
  red: "#B91C1C",
  textGray: "#758192",
};

export const DEVICE_ID = "7c519494-a87a-4760-942f-4257205896de";

export const API_URL = "https://payments.smsdata.com/api/v1/orders/";

// const BODY_SAMPLE = {
//   expected_output_amount: context.amount,
//   input_currency: "ETH_TEST3",
//   merchant_urlko: "https://www.google.com",
//   merchant_urlok: "https://www.google.com",
//   merchant_url_standby: "https://www.google.com",
//   notes: "string",
//   reference: "string",
//   fiat: context.currency,
//   language: "ES",
//   front_dni: "011010010110110101100001011001110110010101101110",
//   back_dni: "011010010110110101100001011001110110010101101110",
//   first_name: "string",
//   surnames: "string",
//   address_name: "string",
//   address_additional: "string",
//   address_number: "string",
//   zip_code: "string",
//   city: "string",
//   province: "string",
//   country: "string",
//   email: "geronimopylypchuk@gmail.com",
//   nif: "123456455",
//   referral_id: "string",
//   internal_data: "string",
// };

// Get Currencies
// const req = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Device-Id": "7c519494-a87a-4760-942f-4257205896de",
//   },
// };
// const res = await fetch("https://payments.smsdata.com/api/v1/currencies", xd);
// const dataCurrency = await res.json();
// console.log(dataCurrency[2]);

// EXAMPLE RESPONSE

// address: "0x523c8De67ECA2079A03B10082cB93679f052c5cD"
// expected_input_amount: 0.0034022
// fiat: "EUR"
// identifier: "9d060d1d-16c9-4e4d-90b4-07ff4e893b36"
// input_currency: "ETH_TEST3"
// language: "es"
// notes: null
// payment_uri: "ethereum:0x523c8De67ECA2079A03B10082cB93679f052c5cD?amount=0.0034022"
// rate: 1469.64
// reference: null
// tag_memo: ""
// web_url: "https://paytest.bitnovo.com/16c91dbc/"
