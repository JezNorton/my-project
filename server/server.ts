
import { findAllCourses } from './queries/findAllCourses';
import { initRestApi } from './api/api';
import { apiErrorHandler } from './api/apiErrorHandler';
import * as express from 'express';
import { Application } from 'express';
const app: Application = express();

initRestApi(app);

app.use(apiErrorHandler);
app.listen(8091, () => {
    console.log('Server is running  on port 8091 ... ')
});

