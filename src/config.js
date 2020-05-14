export default {
  STRIPE_KEY: "pk_test_tYYKqq6DnCDI8f000TPzcN2V00uigFPdhz",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-dk-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://27mbracgsc.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_d9BgT7Hp9",
    APP_CLIENT_ID: "5hatarbfnse8a78is2ulqvibui",
    IDENTITY_POOL_ID: "us-east-2:cf4aaa5d-b3cf-4530-9097-106bec51df27"
  }
};