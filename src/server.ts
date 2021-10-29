import api from './api/api';

const port = process.env.PORT || '3003';
api.listen(port, () => console.log('💻 Server started'));