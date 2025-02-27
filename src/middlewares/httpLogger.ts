import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const httpLogger = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        const { method, url, headers, body } = req;
        const { statusCode } = res;

        logger.info('HTTP Request', {
            method,
            url,
            headers: {
                ...headers,
                authorization: headers.authorization ? 'REDACTED' : undefined // Redact sensitive headers
            },
            body,
            statusCode,
            duration
        });
    });

    next();
};

export default httpLogger;