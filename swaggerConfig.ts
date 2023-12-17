import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blogged API',
      version: '1.0.0',
      description: 'Implement and test what u need',
    },
  },
  apis: ['./dist/src/application/routes/*.js', './src/application/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
