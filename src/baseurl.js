// const ROOT_URL = 'http://192.168.1.100:3001';

const ROOT_URL = 'https://docstash-server.herokuapp.com';

// const ROOT_URL = process.env.NODE_ENV === 'prod' ? 'http://docstash-server.herokuapp.com' : 'http://192.168.1.100:3001';

export const WS_URL = process.env.NODE_ENV === 'prod'
    ? 'ws://docstash-server.herokuapp.com'
    : 'ws://d.in';

export default ROOT_URL;
